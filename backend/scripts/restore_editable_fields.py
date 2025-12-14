#!/usr/bin/env python3
"""
Restore editable order fields (Produce / Ready / Shipped / Note) from a backup
JSON file into the currently running backend via the public API.

Usage:
    python restore_editable_fields.py \
        --backup ../backup/orders_cache-20251117-173312.json \
        --api-base http://127.0.0.1:8080 \
        --username hakanozturkk@windowslive.com \
        --password Mushroom44!

Use --dry-run to preview the planned updates without calling the API.
"""

from __future__ import annotations

import argparse
import json
import os
import re
from html import unescape
from pathlib import Path
from typing import Dict, Any, List, Tuple, Optional

import requests

BACKUP_DIR = Path(__file__).resolve().parent.parent / "backup"
API_DEFAULT = "http://127.0.0.1:8080"
ADMIN_EMAIL = "hakanozturkk@windowslive.com"
ADMIN_PASSWORD = "Mushroom44!"
CHECKBOX_FIELDS = ("Produce", "Ready", "Shipped")
NOTE_FIELDS = ("Note", "importantnote")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--backup",
        type=Path,
        help="Path to orders_cache backup JSON (defaults to latest in backup/)",
    )
    parser.add_argument(
        "--api-base",
        default=API_DEFAULT,
        help="Base URL for the backend API (default: %(default)s)",
    )
    parser.add_argument(
        "--username",
        default=os.environ.get("RESTORE_ADMIN_EMAIL", ADMIN_EMAIL),
        help="Admin username/email for login",
    )
    parser.add_argument(
        "--password",
        default=os.environ.get("RESTORE_ADMIN_PASSWORD", ADMIN_PASSWORD),
        help="Admin password for login",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show planned updates without calling the API",
    )
    return parser.parse_args()


def find_latest_backup() -> Path:
    if not BACKUP_DIR.exists():
        raise SystemExit(f"Backup directory not found: {BACKUP_DIR}")
    candidates = sorted(BACKUP_DIR.glob("orders_cache-*.json"))
    if not candidates:
        raise SystemExit(f"No orders_cache backups under {BACKUP_DIR}")
    return candidates[-1]


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as fh:
        return json.load(fh)


def normalize_name(value: Optional[str]) -> str:
    if not value:
        return ""
    return "".join(value.lower().split())


def normalize_flag(value: Any) -> bool:
    if isinstance(value, str):
        v = value.strip().lower()
        return v in ("true", "1", "yes", "y", "t", "✓")
    return bool(value)


def flag_to_string(value: Any) -> str:
    return "TRUE" if normalize_flag(value) else "FALSE"


def normalize_email(value: Optional[str]) -> str:
    return (value or "").strip().lower()


def normalize_product(value: Optional[str]) -> str:
    if not value:
        return ""
    text = unescape(value)
    text = re.sub(r"[^a-z0-9]+", " ", text.lower())
    return " ".join(text.split())


def normalize_amount(value: Any) -> Optional[float]:
    if value in (None, ""):
        return None
    if isinstance(value, (int, float)):
        return round(float(value), 2)
    numeric = re.sub(r"[^\d,.\-]", "", str(value))
    if not numeric:
        return None
    # If there is a comma but no dot, treat comma as decimal separator
    if "," in numeric and "." not in numeric:
        numeric = numeric.replace(",", ".")
    else:
        numeric = numeric.replace(",", "")
    try:
        return round(float(numeric), 2)
    except ValueError:
        return None


def build_backup_indexes(
    records: List[Dict[str, Any]]
) -> Tuple[
    Dict[str, Dict[str, Any]],
    Dict[str, List[Dict[str, Any]]],
    Dict[str, List[Dict[str, Any]]],
    Dict[Tuple[str, str], List[Dict[str, Any]]],
    Dict[Tuple[str, float], List[Dict[str, Any]]],
]:
    by_transaction: Dict[str, Dict[str, Any]] = {}
    by_name: Dict[str, List[Dict[str, Any]]] = {}
    by_email: Dict[str, List[Dict[str, Any]]] = {}
    by_name_product: Dict[Tuple[str, str], List[Dict[str, Any]]] = {}
    by_name_amount: Dict[Tuple[str, float], List[Dict[str, Any]]] = {}

    def add_entry(mapping: Dict[Any, List[Dict[str, Any]]], key: Any, row: Dict[str, Any]) -> None:
        if not key:
            return
        mapping.setdefault(key, []).append(row)

    for row in records:
        tx = str(row.get("transaction") or row.get("Transaction ID") or "").strip()
        if tx:
            by_transaction[tx] = row
        name_key = normalize_name(row.get("buyername") or row.get("Name"))
        product_key = normalize_product(row.get("productname") or row.get("Product"))
        email_key = normalize_email(row.get("buyeremail") or row.get("Buyer Email"))
        amount_value = normalize_amount(row.get("ordertotal") or row.get("Order Total"))

        add_entry(by_name, name_key, row)
        add_entry(by_email, email_key, row)
        if name_key and product_key:
            add_entry(by_name_product, (name_key, product_key), row)
        if name_key and amount_value is not None:
            add_entry(by_name_amount, (name_key, amount_value), row)

    return by_transaction, by_name, by_email, by_name_product, by_name_amount


def login(api_base: str, username: str, password: str) -> str:
    payload = {"username": username, "password": password}
    resp = requests.post(f"{api_base}/api/auth/login", json=payload, timeout=30)
    resp.raise_for_status()
    data = resp.json()
    token = data.get("access_token")
    if not token:
        raise SystemExit("Login succeeded but no access_token returned")
    return token


def fetch_current_orders(api_base: str) -> List[Dict[str, Any]]:
    resp = requests.get(f"{api_base}/api/orders", timeout=60)
    resp.raise_for_status()
    return resp.json()


def prepare_updates(
    current_orders: List[Dict[str, Any]],
    backup_by_tx: Dict[str, Dict[str, Any]],
    backup_by_name: Dict[str, List[Dict[str, Any]]],
    backup_by_email: Dict[str, List[Dict[str, Any]]],
    backup_by_name_product: Dict[Tuple[str, str], List[Dict[str, Any]]],
    backup_by_name_amount: Dict[Tuple[str, float], List[Dict[str, Any]]],
) -> Tuple[List[Tuple[str, Dict[str, str]]], List[str]]:
    updates: List[Tuple[str, Dict[str, str]]] = []
    missing: List[str] = []
    for order in current_orders:
        tx = str(order.get("transaction") or order.get("Transaction ID") or "").strip()
        record = backup_by_tx.get(tx)
        if not record:
            name_key = normalize_name(order.get("buyername") or order.get("Name"))
            product_key = normalize_product(order.get("productname") or order.get("Product"))
            email_key = normalize_email(order.get("buyeremail") or order.get("Buyer Email"))
            amount_value = normalize_amount(order.get("ordertotal") or order.get("Order Total"))

            if email_key:
                candidates = backup_by_email.get(email_key, [])
                if len(candidates) == 1:
                    record = candidates[0]

            if not record and name_key and product_key:
                candidates = backup_by_name_product.get((name_key, product_key), [])
                if len(candidates) == 1:
                    record = candidates[0]

            if not record and name_key and amount_value is not None:
                candidates = backup_by_name_amount.get((name_key, amount_value), [])
                if len(candidates) == 1:
                    record = candidates[0]

            if not record and name_key:
                candidates = backup_by_name.get(name_key, [])
                if len(candidates) == 1:
                    record = candidates[0]
        if not record:
            missing.append(tx or (order.get("buyername") or "UNKNOWN"))
            continue

        payload: Dict[str, str] = {}
        for field in CHECKBOX_FIELDS:
            backup_value = record.get(field) or record.get(
                {"Produce": "Kesildi", "Ready": "Hazır", "Shipped": "Gönderildi"}[field]
            )
            if backup_value is None:
                continue
            current_value = order.get(field) or order.get(
                {"Produce": "Kesildi", "Ready": "Hazır", "Shipped": "Gönderildi"}[field]
            )
            if normalize_flag(backup_value) != normalize_flag(current_value):
                payload[field] = flag_to_string(backup_value)

        backup_note = None
        for note_field in NOTE_FIELDS:
            if record.get(note_field):
                backup_note = record.get(note_field)
                break
        current_note = order.get("Note") or order.get("importantnote") or ""
        if backup_note is not None and (backup_note or current_note):
            if (backup_note or "").strip() != (current_note or "").strip():
                payload["Note"] = backup_note

        if payload:
            updates.append((tx, payload))
    return updates, missing


def apply_updates(api_base: str, token: str, updates: List[Tuple[str, Dict[str, str]]], dry_run: bool = False) -> None:
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}",
    }
    for tx, payload in updates:
        print(f"[UPDATE] {tx} -> {payload}")
        if dry_run:
            continue
        resp = requests.put(f"{api_base}/api/orders/{tx}/edit", headers=headers, json=payload, timeout=30)
        if resp.status_code != 200:
            print(f"  ! Failed: {resp.status_code} {resp.text}")
        else:
            print("  ✓ Updated")


def main() -> None:
    args = parse_args()
    backup_path = args.backup or find_latest_backup()
    print(f"Using backup: {backup_path}")

    backup_records = load_json(backup_path)
    current_orders = fetch_current_orders(args.api_base)
    print(f"Loaded {len(current_orders)} current orders; backup contains {len(backup_records)} entries")

    (
        backup_by_tx,
        backup_by_name,
        backup_by_email,
        backup_by_name_product,
        backup_by_name_amount,
    ) = build_backup_indexes(backup_records)
    updates, missing = prepare_updates(
        current_orders,
        backup_by_tx,
        backup_by_name,
        backup_by_email,
        backup_by_name_product,
        backup_by_name_amount,
    )

    if not updates:
        print("No differences detected; nothing to update.")
        return

    print(f"Prepared {len(updates)} order updates")
    if missing:
        print(f"WARNING: {len(missing)} orders could not be matched (showing first 10): {missing[:10]}")

    token = ""
    if not args.dry_run:
        token = login(args.api_base, args.username, args.password)
        print("Authenticated successfully.")

    apply_updates(args.api_base, token, updates, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
