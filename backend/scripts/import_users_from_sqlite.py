#!/usr/bin/env python3
"""
Import missing user accounts from the legacy SQLite backup into the current
PostgreSQL database.

Usage (run inside backend container so DATABASE_URL points to Postgres):
    python scripts/import_users_from_sqlite.py
"""

from __future__ import annotations

import sqlite3
from datetime import datetime
from pathlib import Path
from typing import Iterable, Dict

import os

import psycopg
from psycopg.rows import dict_row

BACKUP_PATH = Path(__file__).resolve().parent.parent / "backup" / "users.db"


def normalize_email(value: str | None) -> str:
    return (value or "").strip().lower()


def parse_bool(value) -> bool:
    if isinstance(value, str):
        return value.strip().lower() in {"1", "true", "t", "yes", "y"}
    return bool(value)


def parse_datetime(value: str | None) -> datetime | None:
    if not value:
        return None
    try:
        return datetime.fromisoformat(value)
    except ValueError:
        return None


def load_backup_rows() -> Iterable[sqlite3.Row]:
    if not BACKUP_PATH.exists():
        raise SystemExit(f"Backup file not found: {BACKUP_PATH}")
    conn = sqlite3.connect(BACKUP_PATH)
    conn.row_factory = sqlite3.Row
    try:
        rows = conn.execute("SELECT * FROM users").fetchall()
    finally:
        conn.close()
    return rows


def main() -> None:
    rows = load_backup_rows()
    print(f"Loaded {len(rows)} rows from {BACKUP_PATH.name}")

    db_url = os.environ.get("DATABASE_URL")
    if not db_url:
        raise SystemExit("DATABASE_URL environment variable must be set.")

    with psycopg.connect(db_url, row_factory=dict_row) as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT LOWER(email) AS email FROM users")
            existing = {row["email"] for row in cur.fetchall()}

        inserted = 0
        skipped = 0

        with conn.cursor() as cur:
            for row in rows:
                email = normalize_email(row["email"])
                if not email:
                    skipped += 1
                    continue
                if email in existing:
                    continue

                cur.execute(
                    """
                    INSERT INTO users
                        (username, email, full_name, hashed_password, is_active,
                         role, avatar, skills, phone, table_density, created_at)
                    VALUES
                        (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """,
                    (
                        (row["username"] or email).strip(),
                        email,
                        (row["full_name"] or row["username"] or email).strip(),
                        row["hashed_password"] or "",
                        parse_bool(row["is_active"]),
                        (row["role"] or "user").strip() or "user",
                        row["avatar"] or "",
                        row["skills"] or "",
                        row["phone"] or "",
                        row["table_density"] or "normal",
                        parse_datetime(row["created_at"]) or datetime.utcnow(),
                    ),
                )
                inserted += 1
        conn.commit()

    print(f"Inserted {inserted} users; skipped {skipped} rows with missing email.")


if __name__ == "__main__":
    main()
