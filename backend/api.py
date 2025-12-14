"""
FastAPI backend for Portable Etsy Order Manager.
Provides simple REST endpoints for consuming order data.
"""

from fastapi.middleware.cors import CORSMiddleware
import json
import logging
import logging.handlers
from pathlib import Path
from fastapi import FastAPI, HTTPException, Response, Depends, status, Request, Query, Body
from fastapi.security import OAuth2PasswordBearer
from typing import List, Dict, Optional, Any, Tuple, Union, Literal
import requests
import csv
import io
from fastapi.staticfiles import StaticFiles
from fastapi import UploadFile, File
import hashlib
import threading
import time
from collections import deque
from datetime import datetime, timedelta, timezone, date as date_cls
from zoneinfo import ZoneInfo
import uuid
import copy
import shutil
import os
import sys
import socket
import re
from urllib.parse import urlparse, parse_qs
import asyncio
import secrets

# ==================== ADVANCED LOGGING SYSTEM ====================

# Create logs directory
logs_dir = Path(__file__).parent / "logs"
logs_dir.mkdir(exist_ok=True)
CLIENT_LOG_FILE = logs_dir / "client_logs.jsonl"

# Configure logging with multiple handlers
def setup_logging():
    """Setup comprehensive logging system"""
    logger = logging.getLogger()
    logger.setLevel(logging.DEBUG)

    # Remove any existing handlers
    for handler in logger.handlers[:]:
        logger.removeHandler(handler)

    # Create formatters
    detailed_formatter = logging.Formatter(
        '%(asctime)s [%(levelname)s] %(name)s:%(lineno)d - %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S'
    )

    simple_formatter = logging.Formatter(
        '%(asctime)s [%(levelname)s] - %(message)s',
        datefmt='%H:%M:%S'
    )

    # Console handler for development
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(logging.INFO)
    console_handler.setFormatter(simple_formatter)
    logger.addHandler(console_handler)

    # File handler for all logs
    all_logs_file = logs_dir / "etsy_manager.log"
    file_handler = logging.handlers.RotatingFileHandler(
        all_logs_file, maxBytes=10*1024*1024, backupCount=5
    )
    file_handler.setLevel(logging.DEBUG)
    file_handler.setFormatter(detailed_formatter)
    logger.addHandler(file_handler)

    # Error-only file handler
    error_logs_file = logs_dir / "errors.log"
    error_handler = logging.handlers.RotatingFileHandler(
        error_logs_file, maxBytes=5*1024*1024, backupCount=3
    )
    error_handler.setLevel(logging.ERROR)
    error_handler.setFormatter(detailed_formatter)
    logger.addHandler(error_handler)

    # Port binding and startup logger
    startup_logger = logging.getLogger('startup')
    startup_logger.setLevel(logging.INFO)

    return logger

# Initialize logging
logger = setup_logging()

# Custom logging functions for better error tracking
def log_port_binding(host: str, port: int):
    """Log port binding information"""
    try:
        # Test if port is available
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        result = sock.connect_ex((host, port))
        sock.close()

        if result == 0:
            logger.warning(f"⚠️  Port {port} on {host} is already in use!")
            logger.info(f"🔍 Checking what process is using port {port}...")
            try:
                import subprocess
                if sys.platform == "linux" or sys.platform == "darwin":
                    result = subprocess.run(['lsof', '-i', f':{port}'],
                                          capture_output=True, text=True, timeout=5)
                    if result.returncode == 0:
                        logger.info(f"📋 Process using port {port}:\n{result.stdout}")
                    else:
                        logger.info(f"❓ Could not determine process using port {port}")
            except Exception as e:
                logger.debug(f"Could not check port usage: {e}")
        else:
            logger.info(f"✅ Port {port} on {host} is available")

    except Exception as e:
        logger.warning(f"Could not check port availability: {e}")

def log_startup_info(host: str, port: int):
    """Log comprehensive startup information"""
    logger.info("=" * 60)
    logger.info("🚀 ETSY ORDER MANAGEMENT - DEVELOPMENT SERVER")
    logger.info("=" * 60)
    logger.info(f"📅 Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    logger.info(f"🏠 Host: {host}")
    logger.info(f"🔌 Port: {port}")
    logger.info(f"🌐 Local access: http://localhost:{port}")
    logger.info(f"🌍 Network access: http://{host}:{port}")
    logger.info(f"📁 Working directory: {Path.cwd()}")
    logger.info(f"📝 Logs directory: {logs_dir}")
    logger.info("=" * 60)

def log_cache_status():
    """Log cache status information"""
    global orders_cache
    cache_size = len(orders_cache) if orders_cache else 0
    cache_file = CACHE_FILE
    cache_exists = cache_file.exists()
    cache_size_mb = cache_file.stat().st_size / (1024 * 1024) if cache_exists else 0

    logger.info("📊 Cache Status:")
    logger.info(f"   • Orders in cache: {cache_size}")
    logger.info(f"   • Cache file exists: {cache_exists}")
    if cache_exists:
        logger.info(f"   • Cache file size: {cache_size_mb:.2f} MB")
        logger.info(f"   • Cache file path: {cache_file}")

def log_error_with_context(error: Exception, context: str = ""):
    """Log error with additional context and stack trace"""
    logger.error(f"❌ Error in {context}: {str(error)}")
    logger.error(f"   Full traceback:", exc_info=True)

# Override print statements with logging for better control
def print(*args, **kwargs):
    """Override print to use logging instead"""
    message = ' '.join(str(arg) for arg in args)
    if any(keyword in message.lower() for keyword in ['error', 'failed', 'exception']):
        logger.error(message)
    elif any(keyword in message.lower() for keyword in ['warning', 'warn']):
        logger.warning(message)
    elif any(keyword in message.lower() for keyword in ['debug']):
        logger.debug(message)
    else:
        logger.info(message)

def parse_iso_datetime(value: str) -> datetime:
    """Lenient ISO parser that supports trailing Z."""
    if not value:
        raise ValueError("Date value is required")
    normalized = value
    if normalized.endswith("Z"):
        normalized = normalized[:-1] + "+00:00"
    try:
        return datetime.fromisoformat(normalized)
    except ValueError:
        # Fallback: strip timezone and parse naive UTC
        return datetime.fromisoformat(normalized.split(".")[0])

from sqlalchemy import (
    create_engine,
    Column,
    Integer,
    String,
    Boolean,
    DateTime,
    ForeignKey,
    Text,
    or_,
    func,
    inspect,
    text,
    Date,
    UniqueConstraint,
    Float,
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.orm.exc import StaleDataError
from sqlalchemy.exc import OperationalError
from passlib.context import CryptContext
from pydantic import BaseModel, validator
from jose import JWTError, jwt
from bs4 import BeautifulSoup

# Database setup
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./users.db")
Base = declarative_base()


def create_engine_with_retry(db_url: str) -> Any:
    """Create SQLAlchemy engine with retry to handle slow DNS/DB readiness."""
    max_attempts = int(os.getenv("DB_CONNECT_ATTEMPTS", "30"))
    wait_seconds = float(os.getenv("DB_CONNECT_WAIT", "2"))
    parsed = urlparse(db_url)
    host = parsed.hostname or "db"
    port = parsed.port or 5432
    last_error: Optional[Exception] = None

    for attempt in range(1, max_attempts + 1):
        try:
            socket.gethostbyname(host)
        except socket.gaierror as exc:
            last_error = exc
            logger.warning(
                f"🔁 {host} DNS kaydı hazır değil (deneme {attempt}/{max_attempts}): {exc}"
            )
            time.sleep(wait_seconds)
            continue

        try:
            engine_candidate = create_engine(db_url, pool_pre_ping=True)
            with engine_candidate.connect() as conn:
                conn.execute(text("SELECT 1"))
            logger.info(f"✅ Veritabanına bağlandı: {host}:{port}")
            return engine_candidate
        except OperationalError as exc:
            last_error = exc
            logger.warning(
                f"🔁 Veritabanı hazır değil (deneme {attempt}/{max_attempts}): {exc}"
            )
            time.sleep(wait_seconds)

    raise RuntimeError("Veritabanına bağlanılamadı") from last_error


engine = create_engine_with_retry(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# User model
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    full_name = Column(String)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    role = Column(String, default="user")  # Options: admin, manager, user
    avatar = Column(String, default="")  # URL to avatar image
    skills = Column(String, default="")  # Comma-separated skills
    phone = Column(String, default="")
    table_density = Column(String, default="normal")  # Options: compact, normal, spacious
    created_at = Column(DateTime, default=datetime.utcnow)
    last_active = Column(DateTime, nullable=True)

# Task model
class Task(Base):
    __tablename__ = "tasks"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    status = Column(String, default="todo")  # todo, in-progress, done
    assigned_to = Column(Integer, index=True, nullable=True)
    assigned_to_many = Column(Text, nullable=True)  # JSON list of user IDs
    priority = Column(String, default="medium")  # low, medium, high
    start_date = Column(DateTime, default=datetime.utcnow)
    deadline = Column(DateTime, nullable=True)
    attachment = Column(String, nullable=True)  # JSON string for file attachments
    created_by = Column(Integer, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

# Calendar Event model
class CalendarEvent(Base):
    __tablename__ = "calendar_events"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    event_date = Column(DateTime)
    assigned_to = Column(Integer, index=True, nullable=True)
    type = Column(String, default="event")  # event, note, reminder
    priority = Column(String, default="medium")  # low, medium, high
    recurrence = Column(String, nullable=True)  # daily, weekly, monthly
    reminder = Column(Integer, nullable=True)  # minutes before
    color = Column(String, default="#667eea")  # hex color
    created_by = Column(Integer, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

# Notifications model
class Notification(Base):
    __tablename__ = "notifications"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, index=True)
    title = Column(String)
    message = Column(String)
    type = Column(String)  # task_assigned, event_assigned, reminder
    related_id = Column(Integer, nullable=True)  # ID of task/event
    data = Column(String, nullable=True)  # JSON string for additional data
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class WeeklyPlannerEntry(Base):
    __tablename__ = "weekly_planner_entries"
    id = Column(Integer, primary_key=True, index=True)
    text = Column(Text, default="")
    date = Column(DateTime, nullable=False)
    assigned_to = Column(Integer, ForeignKey("users.id"), nullable=True)
    assigned_name = Column(String, nullable=True)
    created_by = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class ActivityEntry(Base):
    __tablename__ = "activity_entries"
    id = Column(Integer, primary_key=True, index=True)
    actor_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    actor_name = Column(String, nullable=True)
    action = Column(String, nullable=False)
    entity_type = Column(String, nullable=True)
    entity_id = Column(Integer, nullable=True)
    description = Column(String, nullable=False)
    metadata_json = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class FinanceRecord(Base):
    __tablename__ = "finance_records"
    id = Column(Integer, primary_key=True, index=True)
    row_hash = Column(String, unique=True, index=True)
    row_data = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)


class ReturnRecord(Base):
    __tablename__ = "return_records"
    id = Column(Integer, primary_key=True, index=True)
    refund_date = Column(Date, nullable=True, index=True)
    store_name = Column(String, nullable=True)
    order_number = Column(String, nullable=True, index=True)
    customer_name = Column(String, nullable=True)
    refund_amount = Column(Float, nullable=True)
    currency = Column(String(16), nullable=True)
    reason = Column(Text, nullable=True)
    row_hash = Column(String, unique=True, index=True)
    raw_payload = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class PreciousPriceSnapshot(Base):
    __tablename__ = "precious_price_snapshots"
    id = Column(Integer, primary_key=True, index=True)
    gold_sell = Column(Float, nullable=True)
    silver_sell = Column(Float, nullable=True)
    source = Column(String, default="haremaltin", nullable=True)
    fetched_at = Column(DateTime, default=datetime.utcnow, index=True)


class ShoppingItem(Base):
    __tablename__ = "shopping_items"
    id = Column(Integer, primary_key=True, index=True)
    planned_date = Column(Date, nullable=False, default=datetime.utcnow)
    assigned_to = Column(String, nullable=True)
    item_name = Column(String, nullable=False)
    amount = Column(String, nullable=True)
    note = Column(Text, nullable=True)
    is_done = Column(Boolean, default=False)
    attachment = Column(Text, nullable=True)
    created_by = Column(Integer, ForeignKey("users.id"), nullable=True)
    updated_by = Column(Integer, ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class OrderCompletionEvent(Base):
    __tablename__ = "order_completion_events"
    id = Column(Integer, primary_key=True, index=True)
    transaction = Column(String, unique=True, index=True, nullable=False)
    completion_date = Column(Date, nullable=False, index=True)
    recorded_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class AdminAnnouncement(Base):
    __tablename__ = "admin_announcements"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=True)
    content = Column(Text, nullable=False)
    target_user_id = Column(Integer, ForeignKey("users.id"), nullable=True, index=True)
    is_active = Column(Boolean, default=True, nullable=False, index=True)
    created_by = Column(Integer, ForeignKey("users.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class UserPresence(Base):
    __tablename__ = "user_presence"
    __table_args__ = (UniqueConstraint("user_id", "session_id", name="uq_user_presence_session"),)

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    session_id = Column(String, nullable=False)
    client_type = Column(String, default="browser")
    state = Column(String, default="online")
    app_state = Column(String, nullable=True)
    active_page = Column(String, nullable=True)
    started_at = Column(DateTime, default=datetime.utcnow)
    last_seen = Column(DateTime, default=datetime.utcnow, index=True)
    ended_at = Column(DateTime, nullable=True)


class RefreshToken(Base):
    __tablename__ = "refresh_tokens"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    token_hash = Column(String, unique=True, nullable=False, index=True)
    user_agent = Column(String, nullable=True)
    ip_address = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    expires_at = Column(DateTime, nullable=False, index=True)
    last_used_at = Column(DateTime, nullable=True)
    revoked_at = Column(DateTime, nullable=True)
    replaced_by_token_id = Column(Integer, ForeignKey("refresh_tokens.id"), nullable=True)


Base.metadata.create_all(bind=engine)


def ensure_weekly_planner_schema():
    inspector = inspect(engine)
    if "weekly_planner_entries" not in inspector.get_table_names():
        return
    columns = {col["name"] for col in inspector.get_columns("weekly_planner_entries")}
    if "date" not in columns:
        logger.info("💾 Adding missing 'date' column to weekly_planner_entries table")
        with engine.begin() as conn:
            conn.execute(text("ALTER TABLE weekly_planner_entries ADD COLUMN date DATETIME"))
            conn.execute(text("UPDATE weekly_planner_entries SET date = created_at WHERE date IS NULL"))


ensure_weekly_planner_schema()


def ensure_tasks_schema():
    inspector = inspect(engine)
    if "tasks" not in inspector.get_table_names():
        return
    columns = {col["name"] for col in inspector.get_columns("tasks")}
    if "assigned_to_many" not in columns:
        logger.info("💾 Adding missing 'assigned_to_many' column to tasks table")
        with engine.begin() as conn:
            conn.execute(text("ALTER TABLE tasks ADD COLUMN assigned_to_many TEXT"))


ensure_tasks_schema()

def ensure_shopping_schema():
    inspector = inspect(engine)
    if "shopping_items" not in inspector.get_table_names():
        return
    columns = {col["name"] for col in inspector.get_columns("shopping_items")}
    if "attachment" not in columns:
        logger.info("💾 Adding missing 'attachment' column to shopping_items table")
        with engine.begin() as conn:
            conn.execute(text("ALTER TABLE shopping_items ADD COLUMN attachment TEXT"))


ensure_shopping_schema()

def ensure_admin_announcements_schema():
    inspector = inspect(engine)
    if "admin_announcements" not in inspector.get_table_names():
        return
    columns = {col["name"] for col in inspector.get_columns("admin_announcements")}
    statements = []
    if "title" not in columns:
        statements.append("ALTER TABLE admin_announcements ADD COLUMN title TEXT")
    if "target_user_id" not in columns:
        statements.append("ALTER TABLE admin_announcements ADD COLUMN target_user_id INTEGER")
    if "is_active" not in columns:
        statements.append("ALTER TABLE admin_announcements ADD COLUMN is_active BOOLEAN DEFAULT 1")
    if statements:
        logger.info("💾 Updating admin_announcements schema with %d changes", len(statements))
        with engine.begin() as conn:
            for stmt in statements:
                conn.execute(text(stmt))
            if "is_active" not in columns:
                conn.execute(text("UPDATE admin_announcements SET is_active = 1 WHERE is_active IS NULL"))
            conn.execute(text(
                "CREATE INDEX IF NOT EXISTS ix_announcements_active ON admin_announcements(is_active)"
            ))
            conn.execute(text(
                "CREATE INDEX IF NOT EXISTS ix_announcements_target ON admin_announcements(target_user_id)"
            ))

ensure_admin_announcements_schema()

def serialize_weekly_entry(entry: WeeklyPlannerEntry) -> Dict[str, Any]:
    return {
        "id": entry.id,
        "text": entry.text or "",
        "date": entry.date.isoformat(),
        "assigned_to": entry.assigned_to,
        "assigned_name": entry.assigned_name,
        "created_by": entry.created_by,
        "created_at": entry.created_at.isoformat() if entry.created_at else datetime.utcnow().isoformat(),
        "updated_at": entry.updated_at.isoformat() if entry.updated_at else datetime.utcnow().isoformat(),
    }

def serialize_activity_entry(entry: ActivityEntry) -> Dict[str, Any]:
    return {
        "id": entry.id,
        "actor_name": entry.actor_name,
        "action": entry.action,
        "entity_type": entry.entity_type,
        "entity_id": entry.entity_id,
        "description": entry.description,
        "metadata": json.loads(entry.metadata_json) if entry.metadata_json else None,
        "created_at": entry.created_at.isoformat(),
    }

def serialize_shopping_item(item: ShoppingItem) -> Dict[str, Any]:
    return {
        "id": item.id,
        "date": item.planned_date.isoformat() if item.planned_date else None,
        "assigned": item.assigned_to or "",
        "item": item.item_name,
        "amount": item.amount or "",
        "note": item.note or "",
        "done": bool(item.is_done),
        "attachment": _parse_attachment_blob(item.attachment),
        "updated_at": item.updated_at.isoformat() if item.updated_at else None,
        "created_at": item.created_at.isoformat() if item.created_at else None,
    }

def _shopping_item_visible_to_user(item: ShoppingItem, user: User) -> bool:
    if not user:
        return False
    if item.created_by == user.id:
        return True
    assigned_value = (item.assigned_to or "").strip().lower()
    username = (user.username or "").strip().lower()
    full_name = (user.full_name or "").strip().lower()
    return bool(
        username and assigned_value == username
        or full_name and assigned_value == full_name
    )

def serialize_finance_record(record: FinanceRecord) -> Dict[str, Any]:
    try:
        payload = json.loads(record.row_data)
    except Exception:
        payload = {"raw": record.row_data}
    return {
        "id": record.id,
        "data": payload,
        "created_at": record.created_at.isoformat() if record.created_at else None,
    }


def serialize_precious_snapshot(snapshot: PreciousPriceSnapshot) -> Dict[str, Any]:
    return {
        "id": snapshot.id,
        "gold_sell": snapshot.gold_sell,
        "silver_sell": snapshot.silver_sell,
        "source": snapshot.source,
        "fetched_at": snapshot.fetched_at.isoformat() if snapshot.fetched_at else None,
    }

def serialize_announcement(
    announcement: AdminAnnouncement,
    target_user: Optional[User] = None,
    creator: Optional[User] = None,
) -> Dict[str, Any]:
    return {
        "id": announcement.id,
        "title": announcement.title,
        "content": announcement.content,
        "target_user_id": announcement.target_user_id,
        "target_user_name": (
            (target_user.full_name or target_user.username)
            if target_user else None
        ),
        "is_active": bool(announcement.is_active),
        "created_at": announcement.created_at.isoformat() if announcement.created_at else None,
        "created_by": announcement.created_by,
        "created_by_name": (
            (creator.full_name or creator.username)
            if creator else None
        ),
    }

def record_activity(
    db: Session,
    *,
    actor: Optional[User],
    action: str,
    description: str,
    entity_type: Optional[str] = None,
    entity_id: Optional[int] = None,
    metadata: Optional[Dict[str, Any]] = None,
) -> ActivityEntry:
    entry = ActivityEntry(
        actor_id=actor.id if actor else None,
        actor_name=(actor.full_name or actor.username) if actor else None,
        action=action,
        entity_type=entity_type,
        entity_id=entity_id,
        description=description,
        metadata_json=json.dumps(metadata) if metadata else None,
    )
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry

def normalize_optional_text(value: Optional[str]) -> Optional[str]:
    if value is None:
        return None
    trimmed = value.strip()
    return trimmed or None

# ==================== FINANCE SYNC HELPERS ====================

def extract_sheet_identifiers(sheet_url: str) -> Tuple[Optional[str], Optional[str]]:
    if not sheet_url:
        return None, None
    match = re.search(r"/spreadsheets/d/([a-zA-Z0-9-_]+)", sheet_url)
    sheet_id = match.group(1) if match else None
    parsed = urlparse(sheet_url)
    params = parse_qs(parsed.query)
    gid = params.get("gid", ["0"])[0]
    return sheet_id, gid

def build_csv_export_url(sheet_url: str) -> str:
    if "export?format=csv" in sheet_url:
        return sheet_url
    sheet_id, gid = extract_sheet_identifiers(sheet_url)
    if not sheet_id:
        raise ValueError("Google Sheet ID could not be determined")
    return f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv&gid={gid}"

FINANCE_EXTRA_COLUMNS = ["Transfer", "Kalan Miktar", "Güncel"]

def fetch_finance_sheet_rows(sheet_url: str) -> Tuple[List[str], List[Dict[str, Any]]]:
    csv_url = build_csv_export_url(sheet_url)
    response = requests.get(csv_url, timeout=30)
    if response.status_code != 200:
        raise HTTPException(status_code=502, detail="Finance sheet erişilemedi")
    decoded = response.content.decode('utf-8')
    reader = csv.DictReader(io.StringIO(decoded))
    columns = [col.strip() for col in (reader.fieldnames or []) if col and col.strip()]
    for extra in FINANCE_EXTRA_COLUMNS:
        if extra not in columns:
            columns.append(extra)
    rows: List[Dict[str, Any]] = []
    for row in reader:
        cleaned: Dict[str, Any] = {}
        for column in columns:
            cleaned[column] = (row.get(column) or "").strip()
        if any(cleaned.values()):
            rows.append(cleaned)
    return columns, rows

def synchronize_finance_records(db: Session) -> Dict[str, Any]:
    global finance_columns_cache, last_finance_sync
    columns, rows = fetch_finance_sheet_rows(FINANCE_SHEET_URL)
    finance_columns_cache = columns
    existing_hashes = {
        hash_value
        for (hash_value,) in db.query(FinanceRecord.row_hash).all()
    }
    added = 0
    for row in rows:
        normalized = {key: (value or "").strip() for key, value in row.items()}
        row_hash = hashlib.sha256(json.dumps(normalized, sort_keys=True, ensure_ascii=False).encode('utf-8')).hexdigest()
        if row_hash in existing_hashes:
            continue
        db.add(FinanceRecord(row_hash=row_hash, row_data=json.dumps(normalized, ensure_ascii=False)))
        existing_hashes.add(row_hash)
        added += 1
    db.commit()
    last_finance_sync = datetime.utcnow()
    total = db.query(FinanceRecord).count()
    return {"added": added, "total": total, "columns": columns}


# ==================== PRECIOUS METAL PRICE HELPERS ====================

def _parse_haremaltin_value(raw: Optional[str]) -> Optional[float]:
    if not raw:
        return None
    cleaned = raw.strip()
    if not cleaned:
        return None
    cleaned = cleaned.replace('.', '').replace(',', '.')
    try:
        return float(cleaned)
    except ValueError:
        return None


def fetch_haremaltin_prices() -> Dict[str, Optional[float]]:
    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
    }
    response = requests.get(HAREM_ALTIN_URL, timeout=20, headers=headers)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    gold_span = soup.find("span", id="satis__ALTIN")
    silver_span = soup.find("span", id="satis__GUMUSTRY")
    gold_value = _parse_haremaltin_value(gold_span.get_text(strip=True) if gold_span else None)
    silver_value = _parse_haremaltin_value(silver_span.get_text(strip=True) if silver_span else None)
    if gold_value is None and silver_value is None:
        raise ValueError("Harem Altın fiyatları alınamadı")
    return {"gold_sell": gold_value, "silver_sell": silver_value}


def synchronize_precious_price(db: Session) -> Optional[PreciousPriceSnapshot]:
    try:
        data = fetch_haremaltin_prices()
    except Exception as exc:
        print(f"[PRECIOUS SYNC ERROR] {exc}")
        return None
    snapshot = PreciousPriceSnapshot(
        gold_sell=data.get("gold_sell"),
        silver_sell=data.get("silver_sell"),
        source="haremaltin",
        fetched_at=datetime.utcnow()
    )
    db.add(snapshot)
    db.commit()
    db.refresh(snapshot)
    return snapshot


# ==================== RETURNS SYNC HELPERS ====================

RETURN_DATE_FORMATS = ("%d.%m.%Y", "%d/%m/%Y", "%Y-%m-%d")


def clean_html_text(value: Optional[str]) -> str:
    if not value:
        return ""
    return re.sub(r"<[^>]+>", "", value).strip()


def parse_return_date(value: Optional[str]) -> Optional[date_cls]:
    if not value:
        return None
    raw = value.strip()
    for fmt in RETURN_DATE_FORMATS:
        try:
            return datetime.strptime(raw, fmt).date()
        except ValueError:
            continue
    try:
        parsed = datetime.fromisoformat(raw)
        return parsed.date()
    except Exception:
        return None


def parse_return_amount(value: Optional[str]) -> Optional[float]:
    if not value:
        return None
    cleaned = re.sub(r"[^0-9,.\-]", "", value)
    if cleaned.count(",") == 1 and cleaned.count(".") == 0:
        cleaned = cleaned.replace(",", ".")
    else:
        cleaned = cleaned.replace(",", "")
    try:
        return float(cleaned)
    except ValueError:
        return None


def fetch_return_sheet_rows(sheet_url: str) -> List[Dict[str, Any]]:
    csv_url = build_csv_export_url(sheet_url)
    response = requests.get(csv_url, timeout=30)
    response.raise_for_status()
    decoded = response.content.decode("utf-8")
    reader = csv.DictReader(io.StringIO(decoded))
    rows: List[Dict[str, Any]] = []
    for row in reader:
        cleaned: Dict[str, str] = {}
        for key, value in row.items():
            normalized_key = (key or "").replace("\ufeff", "").strip()
            cleaned[normalized_key] = (value or "").strip()
        if not any(cleaned.values()):
            continue
        rows.append(cleaned)
    return rows


def normalize_return_row(row: Dict[str, str]) -> Optional[Dict[str, Any]]:
    date_value = parse_return_date(row.get("Tarih") or row.get("tarih"))
    order_number = (row.get("Sipariş No") or row.get("sipariş no") or row.get("Siparis No") or "").strip()
    refund_amount = parse_return_amount(row.get("İade Tutarı") or row.get("iade tutarı") or row.get("Iade Tutari"))
    if not (date_value and order_number):
        return None
    store_name = clean_html_text(row.get("Mağaza Adı") or row.get("Magaza Adi"))
    customer_name = clean_html_text(row.get("Müşteri Adı") or row.get("Musteri Adi"))
    currency = (row.get("Para Birimi") or row.get("para birimi") or "USD").strip() or "USD"
    reason = clean_html_text(row.get("İade Nedeni") or row.get("Iade Nedeni"))
    raw_signature = "|".join([
        str(date_value),
        store_name,
        order_number,
        customer_name,
        f"{refund_amount:.2f}" if refund_amount is not None else "",
        currency,
        reason,
    ])
    row_hash = hashlib.sha256(raw_signature.encode("utf-8")).hexdigest()
    return {
        "refund_date": date_value,
        "store_name": store_name,
        "order_number": order_number,
        "customer_name": customer_name,
        "refund_amount": refund_amount,
        "currency": currency,
        "reason": reason,
        "row_hash": row_hash,
        "raw_payload": row,
    }


def synchronize_return_records(db: Session) -> Dict[str, Any]:
    global returns_last_sync
    rows = fetch_return_sheet_rows(RETURNS_SHEET_URL)
    existing_hashes = {
        hash_value
        for (hash_value,) in db.query(ReturnRecord.row_hash).all()
    }
    added = 0
    for row in rows:
        normalized = normalize_return_row(row)
        if not normalized:
            continue
        row_hash = normalized["row_hash"]
        if row_hash in existing_hashes:
            continue
        record = ReturnRecord(
            refund_date=normalized["refund_date"],
            store_name=normalized["store_name"],
            order_number=normalized["order_number"],
            customer_name=normalized["customer_name"],
            refund_amount=normalized["refund_amount"],
            currency=normalized["currency"],
            reason=normalized["reason"],
            row_hash=row_hash,
            raw_payload=json.dumps(normalized["raw_payload"], ensure_ascii=False),
        )
        db.add(record)
        existing_hashes.add(row_hash)
        added += 1
    db.commit()
    returns_last_sync = datetime.utcnow()
    total = db.query(ReturnRecord).count()
    return {"added": added, "total": total}


def serialize_return_record(record: ReturnRecord) -> Dict[str, Any]:
    return {
        "id": record.id,
        "refund_date": record.refund_date.isoformat() if record.refund_date else None,
        "store_name": record.store_name,
        "order_number": record.order_number,
        "customer_name": record.customer_name,
        "refund_amount": record.refund_amount,
        "currency": record.currency,
        "reason": record.reason,
        "created_at": record.created_at.isoformat() if record.created_at else None,
    }

# Pydantic models
class UserCreate(BaseModel):
    username: str
    email: str
    full_name: str
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    full_name: Optional[str] = None
    is_active: bool
    role: str
    avatar: Optional[str] = None
    skills: Optional[str] = None
    phone: Optional[str] = None
    table_density: Optional[str] = None

    class Config:
        orm_mode = True

    @validator("username", "email", "full_name", "skills", "phone", "table_density", pre=True, always=True)
    def strip_string_fields(cls, value):
        if isinstance(value, str):
            return value.strip()
        return value

class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    avatar: Optional[str] = None
    skills: Optional[str] = None
    phone: Optional[str] = None
    table_density: Optional[str] = None

class Token(BaseModel):
    access_token: str
    token_type: str
    expires_in: Optional[int] = None

class TokenData(BaseModel):
    username: str | None = None

class LoginRequest(BaseModel):
    username: str
    password: str
    captcha_token: Optional[str] = None


class ReturnRecordResponse(BaseModel):
    id: int
    refund_date: Optional[str]
    store_name: Optional[str]
    order_number: Optional[str]
    customer_name: Optional[str]
    refund_amount: Optional[float]
    currency: Optional[str]
    reason: Optional[str]
    created_at: Optional[str]


class OnlinePingPayload(BaseModel):
    session_id: Optional[str] = None
    client_type: Optional[str] = "browser"
    status: Optional[str] = "online"
    app_state: Optional[str] = None
    active_page: Optional[str] = None

# Task Pydantic models
class TaskCreate(BaseModel):
    title: str
    description: str
    assigned_to: int | None = None
    assigned_to_many: Optional[List[int]] = None
    priority: str = "medium"
    deadline: str | None = None  # ISO string
    status: str = "todo"
    attachment: Optional[Dict[str, Any]] = None

class TaskResponse(BaseModel):
    id: int
    title: str
    description: str
    status: str
    assigned_to: int | None
    assigned_to_many: Optional[List[int]] = None
    priority: str
    start_date: str
    deadline: str | None
    attachment: Optional[Dict[str, Any]] = None
    created_by: int
    created_at: str
    updated_at: str

    class Config:
        orm_mode = True


def get_task_assignees(task: Task) -> List[int]:
    """Return list of user IDs assigned to a task."""
    # Prefer explicit multi-assignee field if present
    raw_many = getattr(task, "assigned_to_many", None)
    if raw_many:
        try:
            parsed = json.loads(raw_many)
            if isinstance(parsed, list):
                return [int(x) for x in parsed if x is not None]
        except Exception:
            # Fallback to single-field representation
            pass
    if task.assigned_to is not None:
        try:
            return [int(task.assigned_to)]
        except Exception:
            return []
    return []


def set_task_assignees(task: Task, assignees: List[int]) -> None:
    """Persist assignees list on Task, keeping first as primary assigned_to."""
    cleaned = [int(a) for a in assignees if a is not None]
    task.assigned_to = cleaned[0] if cleaned else None
    task.assigned_to_many = json.dumps(cleaned) if cleaned else None

def _is_task_personal(task: Task, user_id: int) -> bool:
    if not user_id:
        return False
    if task.created_by == user_id:
        return True
    return user_id in get_task_assignees(task)

# Calendar Event Pydantic models
class CalendarEventCreate(BaseModel):
    title: str
    description: str
    assigned_to: int | None = None
    event_date: str  # ISO string
    type: str = "event"
    priority: str = "medium"
    recurrence: str | None = None
    reminder: int | None = None
    color: str = "#667eea"

class CalendarEventResponse(BaseModel):
    id: int
    title: str
    description: str
    event_date: str
    assigned_to: int | None
    type: str
    priority: str
    recurrence: str | None
    reminder: int | None
    color: str
    created_by: int
    created_at: str
    updated_at: str

    class Config:
        orm_mode = True

# Notification Pydantic models
class NotificationResponse(BaseModel):
    id: int
    user_id: int
    title: str
    message: str
    type: str
    related_id: int | None
    data: str | None
    is_read: bool
    created_at: str

    class Config:
        orm_mode = True

class WeeklyPlannerEntryCreate(BaseModel):
    date: str
    text: str = ""
    assigned_to: Optional[int | str] = None
    assigned_username: Optional[str] = None

class WeeklyPlannerEntryUpdate(BaseModel):
    text: Optional[str] = None
    assigned_to: Optional[int | str] = None
    assigned_username: Optional[str] = None

class WeeklyPlannerEntryResponse(BaseModel):
    id: int
    text: str
    date: str
    assigned_to: Optional[int]
    assigned_name: Optional[str]
    created_by: int
    created_at: str
    updated_at: str

    class Config:
        orm_mode = True

class ActivityEntryResponse(BaseModel):
    id: int
    actor_name: Optional[str]
    action: str
    entity_type: Optional[str]
    entity_id: Optional[int]
    description: str
    metadata: Optional[Dict[str, Any]]
    created_at: str

    class Config:
        orm_mode = True

class ShoppingItemBaseModel(BaseModel):
    date: date_cls
    assigned: Optional[str] = None
    item: str
    amount: Optional[str] = None
    note: Optional[str] = None
    done: bool = False
    attachment: Optional[Dict[str, Any]] = None

class ShoppingItemCreate(ShoppingItemBaseModel):
    pass

class ShoppingItemUpdate(BaseModel):
    date: Optional[date_cls] = None
    assigned: Optional[str] = None
    item: Optional[str] = None
    amount: Optional[str] = None
    note: Optional[str] = None
    done: Optional[bool] = None
    attachment: Optional[Dict[str, Any]] = None

class ShoppingItemResponse(BaseModel):
    id: int
    date: Optional[str]
    assigned: Optional[str]
    item: str
    amount: Optional[str]
    note: Optional[str]
    done: bool
    attachment: Optional[Dict[str, Any]] = None
    updated_at: Optional[str] = None
    created_at: Optional[str] = None

    class Config:
        orm_mode = True

class AnnouncementCreate(BaseModel):
    user_id: int
    title: Optional[str] = None
    content: str

class AnnouncementResponse(BaseModel):
    id: int
    title: Optional[str]
    content: str
    target_user_id: Optional[int]
    target_user_name: Optional[str]
    is_active: bool
    created_at: Optional[str]
    created_by: Optional[int]
    created_by_name: Optional[str]

    class Config:
        orm_mode = True

class FinanceUpdatePayload(BaseModel):
    updates: Dict[str, Optional[str]]

class ClientLogPayload(BaseModel):
    level: str
    message: str
    stack: Optional[str] = None
    url: Optional[str] = None
    user_agent: Optional[str] = None
    extra: Optional[Dict[str, Any]] = None

class PasswordResetRequest(BaseModel):
    email: str
    new_password: str

# Order edit Pydantic models
class OrderUpdate(BaseModel):
    Kesildi: str | None = None  # TRUE/FALSE values
    Hazır: str | None = None
    Gönderildi: str | None = None
    importantnote: str | None = None
    FullAdress: str | None = None
    vatcollected: str | None = None
    vatid: str | None = None
    Problem: str | None = None

# Auth utilities
SECRET_KEY = os.getenv("SECRET_KEY", "change-me")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REFRESH_TOKEN_EXPIRE_DAYS = int(os.getenv("REFRESH_TOKEN_EXPIRE_DAYS", "14"))
REFRESH_TOKEN_COOKIE_NAME = "refresh_token"
HCAPTCHA_SECRET_KEY = os.getenv("HCAPTCHA_SECRET_KEY") or os.getenv("RECAPTCHA_SECRET_KEY")

# Admin configuration
ADMIN_EMAIL = "hakanozturkk@windowslive.com"
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login", auto_error=False)

# Email whitelist for registration and login
ALLOWED_EMAILS = {
    "hakanozturkk@windowslive.com",      # Admin user
    "semih@luminousluxcrafts.com",
    "busra@luminousluxcrafts.com",
    "busrayagcoglu@gmail.com",
    "boraozturk006@gmail.com",
    "workshop@luminousluxcrafts.com",
    "gulnurcsknn@gmail.com",
    "ahmattthannnnn@gmail.com",
    "etsyortakk@gmail.com",
    "rdvn.ctn006@gmail.com",
    "test@luminousluxcrafts.com",
}

PRIVILEGED_ROW_ORDER_EMAILS = {
    "hakanozturkk@windowslive.com",
    "busra@luminousluxcrafts.com",
}

ONLINE_ACTIVE_WINDOW = timedelta(seconds=45)
PRESENCE_CLEANUP_WINDOW = ONLINE_ACTIVE_WINDOW * 8


def _normalize_client_type(value: Optional[str]) -> str:
    if not value:
        return "browser"
    normalized = value.strip().lower()[:32]
    return normalized or "browser"


def _resolve_session_identifier(user_id: int, payload: Optional[OnlinePingPayload]) -> str:
    provided = ""
    if payload and payload.session_id:
        provided = payload.session_id.strip()
    if not provided:
        provided = f"default-{user_id}"
    return provided[:128]


def _touch_presence_entry(db: Session, user_id: int, payload: Optional[OnlinePingPayload]) -> str:
    session_id = _resolve_session_identifier(user_id, payload)
    client_type = _normalize_client_type(getattr(payload, "client_type", None))
    now = datetime.utcnow()
    entry = (
        db.query(UserPresence)
        .filter(UserPresence.user_id == user_id, UserPresence.session_id == session_id)
        .one_or_none()
    )
    desired_state = getattr(payload, "status", None) or "online"
    if entry:
        entry.client_type = client_type
        entry.last_seen = now
        entry.state = desired_state
        if getattr(payload, "app_state", None):
            entry.app_state = payload.app_state
        if getattr(payload, "active_page", None):
            entry.active_page = payload.active_page
        entry.ended_at = None
    else:
        entry = UserPresence(
            user_id=user_id,
            session_id=session_id,
            client_type=client_type,
            state=desired_state,
            app_state=getattr(payload, "app_state", None),
            active_page=getattr(payload, "active_page", None),
            started_at=now,
            last_seen=now,
        )
    db.add(entry)
    return session_id


def _end_presence_session(db: Session, user_id: int, session_id: Optional[str], state: str = "offline"):
    if not session_id:
        return
    entry = (
        db.query(UserPresence)
        .filter(UserPresence.user_id == user_id, UserPresence.session_id == session_id)
        .one_or_none()
    )
    if entry:
        entry.state = state
        entry.last_seen = datetime.utcnow() - (ONLINE_ACTIVE_WINDOW + timedelta(seconds=5))
        entry.ended_at = datetime.utcnow()
        db.add(entry)


def _cleanup_stale_presence(db: Session):
    cutoff = datetime.utcnow() - PRESENCE_CLEANUP_WINDOW
    db.query(UserPresence).filter(UserPresence.last_seen < cutoff).delete(synchronize_session=False)

# ==================== BASIC RATE LIMITING ====================
RATE_LIMIT_WINDOW_SECONDS = 1.0
DEFAULT_RATE_LIMIT = 30  # default IP limit (per second) - Increased for multiple users
WHITELIST_RATE_LIMIT = 200  # trusted internal IP limit - Increased for heavy usage
RATE_LIMIT_WHITELIST = {"192.168.0.14"}  # Will be dynamically managed

_rate_limit_hits: Dict[str, deque] = {}
_rate_limit_lock = threading.Lock()
_failed_login_attempts: Dict[str, deque] = {}
FAILED_LOGIN_LIMIT = 7
FAILED_LOGIN_WINDOW_SECONDS = 300  # 5 minutes


def _resolve_client_ip(request: Request) -> str:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        return forwarded.split(",")[0].strip()
    if request.client:
        return request.client.host or "unknown"
    return "unknown"


def rate_limit_dependency(request: Request):
    client_ip = _resolve_client_ip(request)
    limit = WHITELIST_RATE_LIMIT if client_ip in RATE_LIMIT_WHITELIST else DEFAULT_RATE_LIMIT
    now = time.time()
    window_start = now - RATE_LIMIT_WINDOW_SECONDS

    with _rate_limit_lock:
        bucket = _rate_limit_hits.setdefault(client_ip, deque())
        while bucket and bucket[0] <= window_start:
            bucket.popleft()

        if len(bucket) >= limit:
            retry_after = max(1, int(bucket[0] + RATE_LIMIT_WINDOW_SECONDS - now)) if bucket else 1
            raise HTTPException(
                status_code=429,
                detail="Çok fazla istek alındı. Lütfen birkaç saniye sonra tekrar deneyin.",
                headers={"Retry-After": str(retry_after)}
            )

        bucket.append(now)


def register_failed_login(ip_address: str):
    now = time.time()
    window_start = now - FAILED_LOGIN_WINDOW_SECONDS
    with _rate_limit_lock:
        bucket = _failed_login_attempts.setdefault(ip_address, deque())
        while bucket and bucket[0] <= window_start:
            bucket.popleft()
        bucket.append(now)


def is_ip_locked(ip_address: str) -> bool:
    now = time.time()
    window_start = now - FAILED_LOGIN_WINDOW_SECONDS
    with _rate_limit_lock:
        bucket = _failed_login_attempts.get(ip_address)
        if not bucket:
            return False
        while bucket and bucket[0] <= window_start:
            bucket.popleft()
        return len(bucket) >= FAILED_LOGIN_LIMIT


def verify_captcha_token(token: Optional[str], ip_address: str) -> bool:
    """
    Validate hCaptcha token if secret key configured.
    Returns True when verification passes or captcha is disabled.
    """
    if not HCAPTCHA_SECRET_KEY:
        return True
    if not token:
        logger.warning(f"[SECURITY] Missing captcha token for IP {ip_address}")
        return False
    try:
        response = requests.post(
            "https://hcaptcha.com/siteverify",
            data={
                "secret": HCAPTCHA_SECRET_KEY,
                "response": token,
                "remoteip": ip_address,
            },
            timeout=5,
        )
        data = response.json()
        success = bool(data.get("success"))
        if not success:
            logger.warning(f"[SECURITY] Captcha verification failed for IP {ip_address}: {data}")
        return success
    except Exception as exc:
        logger.warning(f"[SECURITY] Captcha verification error for IP {ip_address}: {exc}")
        return False

pwd_context = CryptContext(schemes=["pbkdf2_sha256"], deprecated="auto")

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def _determine_cookie_settings(request: Request) -> Tuple[bool, Optional[str]]:
    scheme = request.headers.get("x-forwarded-proto", request.url.scheme)
    secure_cookie = scheme == "https"
    forwarded_host = request.headers.get("x-forwarded-host")
    host_header = (forwarded_host or request.headers.get("host") or request.url.hostname or "").split(",")[0].strip()
    cookie_domain = None
    if host_header and host_header not in {"localhost", "127.0.0.1"}:
        cookie_domain = host_header.split(":")[0]
    return secure_cookie, cookie_domain


def _set_access_cookie(response: Response, request: Request, token_value: str):
    cookie_max_age = ACCESS_TOKEN_EXPIRE_MINUTES * 60
    secure_cookie, cookie_domain = _determine_cookie_settings(request)
    response.set_cookie(
        key="access_token",
        value=token_value,
        httponly=True,
        secure=secure_cookie,
        samesite="strict",
        max_age=cookie_max_age,
        expires=cookie_max_age,
        path="/",
        domain=cookie_domain,
    )


def _set_refresh_cookie(response: Response, request: Request, token_value: str):
    refresh_max_age = REFRESH_TOKEN_EXPIRE_DAYS * 24 * 60 * 60
    secure_cookie, cookie_domain = _determine_cookie_settings(request)
    response.set_cookie(
        key=REFRESH_TOKEN_COOKIE_NAME,
        value=token_value,
        httponly=True,
        secure=secure_cookie,
        samesite="strict",
        max_age=refresh_max_age,
        expires=refresh_max_age,
        path="/",
        domain=cookie_domain,
    )


def _clear_auth_cookies(response: Response, request: Request):
    _, cookie_domain = _determine_cookie_settings(request)
    response.delete_cookie("access_token", path="/", domain=cookie_domain)
    response.delete_cookie(REFRESH_TOKEN_COOKIE_NAME, path="/", domain=cookie_domain)


def _generate_refresh_token_value() -> str:
    return secrets.token_urlsafe(48)


def _hash_refresh_token(token: str) -> str:
    return hashlib.sha256(token.encode("utf-8")).hexdigest()


def _create_refresh_token_entry(
    db: Session,
    user_id: int,
    raw_token: str,
    request: Request,
    replaced_token: Optional[RefreshToken] = None,
) -> RefreshToken:
    now = datetime.utcnow()
    entry = RefreshToken(
        user_id=user_id,
        token_hash=_hash_refresh_token(raw_token),
        user_agent=(request.headers.get("user-agent") or "")[:255],
        ip_address=_resolve_client_ip(request),
        expires_at=now + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS),
        last_used_at=now,
    )
    db.add(entry)
    db.flush()
    if replaced_token:
        replaced_token.revoked_at = now
        replaced_token.replaced_by_token_id = entry.id
        db.add(replaced_token)
    return entry


def _get_active_refresh_token(db: Session, raw_token: str) -> Optional[RefreshToken]:
    hashed = _hash_refresh_token(raw_token)
    now = datetime.utcnow()
    return (
        db.query(RefreshToken)
        .filter(
            RefreshToken.token_hash == hashed,
            RefreshToken.revoked_at.is_(None),
            RefreshToken.expires_at > now,
        )
        .first()
    )

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def authenticate_user(db: Session, username: str, password: str):
    """Validate username/email + password combo."""
    user = db.query(User).filter(
        or_(User.username == username, User.email == username)
    ).first()
    if not user:
        return None

    if not verify_password(password, user.hashed_password):
        return None

    return user

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def ensure_admin_user(db: Session):
    """Ensure the admin user exists in the database"""
    admin_email = "hakanozturkk@windowslive.com"
    admin_password = "Mushroom44!"

    # Check if admin user already exists
    admin_user = db.query(User).filter(User.email == admin_email).first()
    if not admin_user:
        logger.info(f"[ADMIN] Creating admin user: {admin_email}")
        hashed_password = get_password_hash(admin_password)
        admin_user = User(
            username="admin",
            email=admin_email,
            full_name="Hakan Öztürk",
            hashed_password=hashed_password,
            role="admin",
            is_active=True
        )
        db.add(admin_user)
        try:
            db.commit()
            db.refresh(admin_user)
            logger.info(f"[ADMIN] Admin user created successfully with ID: {admin_user.id}")
        except Exception as e:
            logger.warning(f"[ADMIN] Admin user creation failed (might already exist): {e}")
            db.rollback()
    else:
        logger.info(f"[ADMIN] Admin user already exists: {admin_email}")

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def authenticate_socket_user(auth: Optional[Dict[str, Any]]) -> Optional[User]:
    token = None
    if isinstance(auth, dict):
        token = auth.get("token")
    if not token:
        return None
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: Optional[str] = payload.get("sub")
        user_id: Optional[int] = payload.get("user_id")
        if not username:
            return None
    except JWTError:
        return None

    db = SessionLocal()
    try:
        query = db.query(User)
        if user_id:
            user = query.filter(User.id == user_id).first()
        else:
            user = query.filter(User.username == username).first()
        return user
    finally:
        db.close()


async def emit_orders_update(event: str, payload: Dict[str, Any]):
    try:
        await sio.emit(ORDERS_SOCKET_EVENT, {"event": event, "payload": payload})
    except Exception as exc:
        logger.debug(f"[WS] Failed to emit orders update: {exc}")


async def emit_tasks_update(event: str, payload: Dict[str, Any]):
    try:
        await sio.emit(TASKS_SOCKET_EVENT, {"event": event, "payload": payload})
    except Exception as exc:
        logger.debug(f"[WS] Failed to emit tasks update: {exc}")


# @sio.event
# async def connect(sid, environ, auth):
#     user = authenticate_socket_user(auth)
#     if not user:
#         logger.warning("[WS] Connection refused: unauthorized client")
        raise ConnectionRefusedError("unauthorized")
    active_socket_users[sid] = user.id
    logger.info(f"[WS] Client connected: {sid} (user_id={user.id})")


# @sio.event
# async def disconnect(sid):
#     user_id = active_socket_users.pop(sid, None)
#     logger.info(f"[WS] Client disconnected: {sid} (user_id={user_id})")
# 
fastapi_app = FastAPI(title="Portable Etsy Order Manager API")
app = fastapi_app

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for network access
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

cache_dir = Path(__file__).parent / "static" / "image_cache"
cache_dir.mkdir(parents=True, exist_ok=True)
app.mount("/images", StaticFiles(directory=str(cache_dir)), name="images")

uploads_base_dir = Path(__file__).parent / "static" / "uploads"
chat_images_dir = uploads_base_dir / "chat"
attachments_dir = uploads_base_dir / "attachments"
for directory in (uploads_base_dir, chat_images_dir, attachments_dir):
    directory.mkdir(parents=True, exist_ok=True)

app.mount("/chat-images", StaticFiles(directory=str(chat_images_dir)), name="chat-images")
app.mount("/attachments", StaticFiles(directory=str(attachments_dir)), name="attachments")

BASE_DIR = Path(__file__).parent
try:
    ISTANBUL_TZ = ZoneInfo("Europe/Istanbul")
except Exception:
    ISTANBUL_TZ = timezone(timedelta(hours=3))
ORDERS_JSON_SCRIPT = BASE_DIR / "data" / "etsy_orders.json"
ORDERS_JSON_CWD = Path.cwd() / "portable_etsy_manager" / "data" / "etsy_orders.json"
CACHE_FILE = BASE_DIR / "data" / "orders_cache.json"
MANUAL_ORDERS_FILE = BASE_DIR / "data" / "manual_orders.json"
ORDER_COMPLETION_LOG_FILE = BASE_DIR / "data" / "order_completion_log.json"
ASSIGNMENTS_FILE = BASE_DIR / "data" / "assignments.json"
ORDER_SEQUENCE_FILE = BASE_DIR / "data" / "order_sequence.json"
FINANCE_SHEET_URL = os.environ.get(
    "FINANCE_SHEET_URL",
    "https://docs.google.com/spreadsheets/d/1xfmP9I2p77NCczN9oAlCzK_dvMPwJ9En23iB1HrJUx8/edit?usp=sharing"
)
FINANCE_SYNC_INTERVAL = int(os.environ.get("FINANCE_SYNC_INTERVAL", 60 * 60 * 4))
PRECIOUS_PRICE_SYNC_INTERVAL = int(os.environ.get("PRECIOUS_PRICE_SYNC_INTERVAL", 60 * 60 * 6))
HAREM_ALTIN_URL = os.environ.get("HAREM_ALTIN_URL", "https://www.haremaltin.com/")
RETURNS_SHEET_URL = os.environ.get(
    "RETURNS_SHEET_URL",
    "https://docs.google.com/spreadsheets/d/1Pk_45NnHdj8LbmJpvDZWd06NjCqyn4aIM3LEtsPwID4/export?format=csv"
)
RETURNS_SYNC_INTERVAL = int(os.environ.get("RETURNS_SYNC_INTERVAL", 60 * 60 * 24))

DISABLE_AUTOMATIC_SYNC = os.environ.get("DISABLE_AUTOMATIC_SYNC", "0") == "1"

# Google Drive authentication
# Google Drive authentication REMOVED - Not needed
drive_service = None

# Global cache
orders_cache = []

# Limit how many rows we keep from Google Sheets to keep UI responsive
max_orders_env = os.environ.get("MAX_SYNC_ORDERS")
try:
    MAX_SYNC_ORDERS = int(max_orders_env) if max_orders_env is not None else 0
except ValueError:
    MAX_SYNC_ORDERS = 0
if MAX_SYNC_ORDERS <= 0:
    MAX_SYNC_ORDERS = None
finance_columns_cache: List[str] = []
last_finance_sync: Optional[datetime] = None
returns_last_sync: Optional[datetime] = None


def limit_orders(records):
    if not records or not MAX_SYNC_ORDERS:
        return records
    if len(records) > MAX_SYNC_ORDERS:
        print(f"[SYNC] ⚠️ Limiting fetched orders to first {MAX_SYNC_ORDERS} rows (original: {len(records)})")
        return records[:MAX_SYNC_ORDERS]
    return records

# Notifications system
notifications_cache = []

def fetch_orders_from_sheet():
    # User provided NEW Google Sheets CSV export URL - siparişleri buradan çek
    csv_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQCos0e8YxQkpHBUfam2n-U6CrocTRbqulRa0H5vGlYfTrZFycgxOvDmr2In4bKjGtmTkI9dP7TGqg8/pub?output=csv"
    try:
        print(f"[DEBUG] 🎯 Fetching orders from NEW Google Sheet URL: {csv_url}")
        response = requests.get(csv_url, timeout=10)
        response.raise_for_status()

        # Explicitly decode with UTF-8 to handle Turkish characters, currency symbols, and emojis properly
        csv_data = response.content.decode('utf-8')
        reader = csv.DictReader(io.StringIO(csv_data))
        raw_orders = [row for row in reader]

        print(f"[DEBUG] ✅ Fetched: {len(raw_orders)} records from NEW Google Sheet")

        # Print actual headers for verification
        if raw_orders and reader.fieldnames:
            print(f"[DEBUG] 📊 Actual CSV headers: {list(reader.fieldnames)}")

        # Debug: Print first order to see raw data
        if raw_orders:
            print(f"[DEBUG] 🔍 First order raw data: {raw_orders[0]}")

        return raw_orders
    except Exception as e:
        print(f"[ERROR] Failed to fetch from NEW Sheet: {e}")
        return None

def load_cache():
    global orders_cache
    if CACHE_FILE.exists():
        try:
            with open(CACHE_FILE, 'r', encoding='utf-8') as f:
                orders_cache = json.load(f)
            print(f"[DEBUG] Loaded {len(orders_cache)} records from cache")
        except Exception as e:
            print(f"[ERROR] Failed to load cache: {e}")
            orders_cache = []

def save_cache():
    try:
        with open(CACHE_FILE, 'w', encoding='utf-8') as f:
            json.dump(orders_cache, f, ensure_ascii=False, indent=2)
        print(f"[DEBUG] Saved {len(orders_cache)} records to cache (Unicode preserved)")
    except Exception as e:
        print(f"[ERROR] Failed to save cache: {e}")

def download_order_images():
    """Download images from Google Drive URLs in orders cache"""
    global orders_cache

    # DISABLE ALL IMAGE DOWNLOADS DURING STARTUP TO SPEED UP FASTAPI BOOT
    if os.environ.get("STARTUP_MODE", "normal") == "startup":
        print("[STARTUP] Skipping image downloads for fast startup... DISABLED COMPLETELY")
        return

    # DEBUG: Add call stack logging
    import inspect
    print("[DEBUG] download_order_images() called from:")
    for frame_info in inspect.stack():
        print(f"  {frame_info.filename}:{frame_info.lineno} {frame_info.function}")
        if frame_info.filename.endswith('api.py') and frame_info.lineno > 100:
            break  # Stop at the main api.py frames

    print("[INFO] Starting automatic image download from Google Drive URLs...")

    downloaded_count = 0
    for order in orders_cache:
        # Check if order has photo URL - use 'Image' column from CSV
        photo_url = order.get('Image', '').strip()
        if not photo_url:
            continue

        if "drive.google.com" in photo_url:
            print(f"[DEBUG] Processing Google Drive image URL: {photo_url}")

            # Extract file ID from Google Drive URL
            if "id=" in photo_url:
                file_id = photo_url.split("id=")[1].split("&")[0].split("?")[0].split("#")[0]
                print(f"[DEBUG] Extracted file ID: {file_id}")

                # Create hashed filename for cache
                hashed = hashlib.md5(photo_url.encode()).hexdigest()
                cache_file = cache_dir / f"{hashed}.jpg"

                # Check if already cached
                if not cache_file.exists():
                    print(f"[DEBUG] Downloading image for {file_id}...")

                    try:
                        # Try different Google Drive access methods
                        possible_urls = [
                            f"https://drive.google.com/uc?export=download&id={file_id}",
                            f"https://drive.google.com/uc?export=view&id={file_id}",
                            f"https://drive.google.com/uc?export=open&id={file_id}",
                            f"https://drive.google.com/uc?id={file_id}",
                        ]

                        image_downloaded = False
                        for test_url in possible_urls:
                            try:
                                print(f"[DEBUG] Trying Google Drive URL: {test_url}")
                                headers = {
                                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                                    'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
                                    'Accept-Language': 'en-US,en;q=0.9',
                                    'Accept-Encoding': 'gzip, deflate, br',
                                    'DNT': '1',
                                    'Connection': 'keep-alive',
                                    'Upgrade-Insecure-Requests': '1',
                                }

                                response = requests.get(test_url, timeout=30, headers=headers, allow_redirects=True, stream=True)

                                if response.status_code == 200:
                                    content = response.content
                                    content_length = len(content)

                                    if content_length > 1000:  # Valid image size
                                        # Save to cache
                                        cache_file.write_bytes(content)
                                        print(f"[SUCCESS] Cached image: {cache_file.name}, size: {content_length} bytes")
                                        downloaded_count += 1
                                        image_downloaded = True
                                        break
                                    else:
                                        print(f"[WARNING] Invalid content size {content_length} for {test_url}")

                            except Exception as e:
                                print(f"[WARNING] Failed URL {test_url}: {str(e)}")
                                continue

                        if not image_downloaded:
                            print(f"[ERROR] Failed to download image for {file_id}")

                    except Exception as e:
                        print(f"[ERROR] Failed to download image for {photo_url}: {str(e)}")

                else:
                    print(f"[DEBUG] Image already cached: {cache_file.name}")

                # Update order photo URL to cached image URL if downloaded
                if cache_file.exists():
                    cached_image_url = f"/images/{cache_file.name}"
                    order['photo'] = cached_image_url
                    print(f"[DEBUG] Updated order with cached image URL: {cached_image_url}")

    if downloaded_count > 0:
        print(f"[SUCCESS] Downloaded and cached {downloaded_count} images from Google Drive")
        save_cache()  # Save updated cache with new image URLs


def clear_image_cache() -> int:
    """Remove existing files in the /images cache so we can re-populate them."""
    removed = 0
    if cache_dir.exists():
        for file_path in cache_dir.iterdir():
            if file_path.is_file():
                try:
                    file_path.unlink()
                    removed += 1
                except Exception as exc:
                    print(f"[WARNING] Failed to remove cached image {file_path.name}: {exc}")
    print(f"[DEBUG] Cleared {removed} files from image cache")
    return removed


CRON_ALLOWED_HOSTS = {"127.0.0.1", "::1"}


def ensure_local_cron_access(request: Request):
    """Guard cron-only endpoints so only localhost can reach them."""
    client_host = request.client.host if request.client else None
    if client_host not in CRON_ALLOWED_HOSTS:
        raise HTTPException(status_code=403, detail="Cron endpoint is restricted to localhost")


def reset_orders_cache():
    """Empty the in-memory cache and drop the persisted cache file."""
    global orders_cache
    orders_cache = []
    if CACHE_FILE.exists():
        try:
            CACHE_FILE.unlink()
            print(f"[DEBUG] Removed cache file: {CACHE_FILE}")
        except Exception as exc:
            print(f"[WARNING] Failed to delete cache file {CACHE_FILE}: {exc}")

EDITABLE_FIELD_GROUPS = [
    ("Produce", "Kesildi"),
    ("Ready", "Hazır"),
    ("Shipped", "Gönderildi"),
    ("Note", "importantnote")
]


def preserve_editable_fields(target_order: dict, source_order: dict):
    """Copy user-editable checkbox/note values from source order to target order."""
    if not source_order or not target_order:
        return

    for frontend_field, backend_field in EDITABLE_FIELD_GROUPS:
        # Prefer backend value if available, otherwise fall back to frontend entry
        preserved_value = None
        if backend_field in source_order:
            preserved_value = source_order.get(backend_field)
        elif frontend_field in source_order:
            preserved_value = source_order.get(frontend_field)

        if preserved_value is not None:
            target_order[frontend_field] = preserved_value
            target_order[backend_field] = preserved_value


def update_cache(download_images: bool = True):
    # DISABLE ALL CACHE UPDATE DURING STARTUP TO SPEED UP BOOT
    if os.environ.get("STARTUP_MODE", "normal") == "startup":
        print("[STARTUP] Skipping update_cache() for fast startup...")
        return
    global orders_cache
    print("[DEBUG] Updating cache...")
    new_orders = fetch_orders_from_sheet()
    if new_orders is not None:
        new_orders = limit_orders(new_orders)
        # Preserve original Google Sheets ordering
        # Create indexed dict from new orders by transaction ID while maintaining Google Sheets order
        sheet_ordering = {}
        for idx, new_order in enumerate(new_orders):
            transaction_id = new_order.get('Transaction ID') or new_order.get('transaction')
            if transaction_id:
                sheet_ordering[transaction_id] = new_order

        # Build a quick lookup for existing orders so we can preserve user edits
        existing_orders_map = {}
        for existing_order in orders_cache:
            existing_transaction = existing_order.get('transaction') or existing_order.get('Transaction ID')
            if existing_transaction and existing_transaction not in existing_orders_map:
                existing_orders_map[existing_transaction] = existing_order

        # Merge with existing orders while preserving Google Sheets ordering among new items
        updated_cache = []
        cached_transactions = set()

        # Add all new orders first (in Google Sheets original order)
        for order in new_orders:
            transaction_id = order.get('Transaction ID') or order.get('transaction')
            if transaction_id and transaction_id not in cached_transactions:
                if transaction_id in existing_orders_map:
                    preserve_editable_fields(order, existing_orders_map[transaction_id])
                updated_cache.append(order)
                cached_transactions.add(transaction_id)

        # Add any existing orders that aren't in new data
        for existing_order in orders_cache:
            transaction_id = existing_order.get('transaction') or existing_order.get('Transaction ID')
            if transaction_id and transaction_id not in cached_transactions:
                updated_cache.append(existing_order)

        orders_cache = updated_cache

        if download_images:
            download_order_images()

        save_cache()
        print(f"[DEBUG] Cache updated with {len(orders_cache)} records")

def incremental_update_cache():
    """Incremental update that only fetches and processes new/changed orders"""
    global orders_cache
    print("[DEBUG] Performing incremental cache update...")

    # Get current transaction IDs from cache
    current_transaction_ids = set()
    for order in orders_cache:
        transaction_id = order.get('transaction') or order.get('Transaction ID')
        if transaction_id:
            current_transaction_ids.add(transaction_id)

    # Fetch new orders from Google Sheets
    new_orders = fetch_orders_from_sheet()
    if new_orders is None:
        print("[DEBUG] No orders fetched from Google Sheets")
        return False

    new_orders = limit_orders(new_orders)

    # Create mapping of new orders by transaction ID
    new_orders_map = {}
    for order in new_orders:
        transaction_id = order.get('Transaction ID') or order.get('transaction')
        if transaction_id:
            new_orders_map[transaction_id] = order

    # Find new orders (not in current cache)
    new_order_ids = set(new_orders_map.keys()) - current_transaction_ids
    updated_order_ids = set()

    # Process new orders
    for transaction_id in new_order_ids:
        if transaction_id in new_orders_map:
            # Add new order to cache
            orders_cache.append(new_orders_map[transaction_id])
            updated_order_ids.add(transaction_id)
            print(f"[INCREMENTAL] Added new order: {transaction_id}")

    # Check for updated orders (same ID but different data)
    for transaction_id in current_transaction_ids:
        if transaction_id in new_orders_map:
            # Compare existing and new order data
            existing_order = None
            for order in orders_cache:
                order_transaction = order.get('transaction') or order.get('Transaction ID')
                if order_transaction == transaction_id:
                    existing_order = order
                    break

            if existing_order:
                new_order = new_orders_map[transaction_id]

                # Check if order has been updated (excluding editable fields)
                order_changed = False
                for key, value in new_order.items():
                    if key not in ['Produce', 'Ready', 'Shipped', 'Note', 'Kesildi', 'Hazır', 'Gönderildi', 'importantnote']:
                        if existing_order.get(key) != value:
                            order_changed = True
                            break

                if order_changed:
                    # Preserve editable fields from existing order
                    preserve_editable_fields(new_order, existing_order)

                    # Replace existing order with updated one
                    index = orders_cache.index(existing_order)
                    orders_cache[index] = new_order
                    updated_order_ids.add(transaction_id)
                    print(f"[INCREMENTAL] Updated order: {transaction_id}")

    if new_order_ids or updated_order_ids:
        # Download images for new/updated orders only
        _download_images_for_specific_orders(list(new_order_ids) + list(updated_order_ids))

        # Save updated cache
        save_cache()
        print(f"[DEBUG] Incremental update completed. New: {len(new_order_ids)}, Updated: {len(updated_order_ids)}")
        return True
    else:
        print("[DEBUG] No changes detected in incremental update")
        return False

def _download_images_for_specific_orders(transaction_ids):
    """Download images only for specific orders"""
    if not transaction_ids or not orders_cache:
        return

    print(f"[DEBUG] Downloading images for {len(transaction_ids)} specific orders...")

    downloaded_count = 0
    for order in orders_cache:
        transaction_id = order.get('transaction') or order.get('Transaction ID')
        if transaction_id in transaction_ids:
            # Check if order has photo URL - use 'Image' column from CSV
            photo_url = order.get('Image', '').strip()
            if not photo_url:
                continue

            if "drive.google.com" in photo_url:
                print(f"[DEBUG] Processing Google Drive image URL for {transaction_id}: {photo_url}")

                # Extract file ID from Google Drive URL
                if "id=" in photo_url:
                    file_id = photo_url.split("id=")[1].split("&")[0].split("?")[0].split("#")[0]
                    print(f"[DEBUG] Extracted file ID: {file_id}")

                    # Create hashed filename for cache
                    hashed = hashlib.md5(photo_url.encode()).hexdigest()
                    cache_file = cache_dir / f"{hashed}.jpg"

                    # Check if already cached
                    if not cache_file.exists():
                        print(f"[DEBUG] Downloading image for {file_id}...")

                        try:
                            # Try different Google Drive access methods
                            possible_urls = [
                                f"https://drive.google.com/uc?export=download&id={file_id}",
                                f"https://drive.google.com/uc?export=view&id={file_id}",
                                f"https://drive.google.com/uc?export=open&id={file_id}",
                                f"https://drive.google.com/uc?id={file_id}",
                            ]

                            image_downloaded = False
                            for test_url in possible_urls:
                                try:
                                    print(f"[DEBUG] Trying Google Drive URL: {test_url}")
                                    headers = {
                                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                                        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
                                        'Accept-Language': 'en-US,en;q=0.9',
                                        'Accept-Encoding': 'gzip, deflate, br',
                                        'DNT': '1',
                                        'Connection': 'keep-alive',
                                        'Upgrade-Insecure-Requests': '1',
                                    }

                                    response = requests.get(test_url, timeout=30, headers=headers, allow_redirects=True, stream=True)

                                    if response.status_code == 200:
                                        content = response.content
                                        content_length = len(content)

                                        if content_length > 1000:  # Valid image size
                                            # Save to cache
                                            cache_file.write_bytes(content)
                                            print(f"[SUCCESS] Cached image: {cache_file.name}, size: {content_length} bytes")
                                            downloaded_count += 1
                                            image_downloaded = True
                                            break
                                        else:
                                            print(f"[WARNING] Invalid content size {content_length} for {test_url}")

                                except Exception as e:
                                    print(f"[WARNING] Failed URL {test_url}: {str(e)}")
                                    continue

                            if not image_downloaded:
                                print(f"[ERROR] Failed to download image for {file_id}")

                        except Exception as e:
                            print(f"[ERROR] Failed to download image for {photo_url}: {str(e)}")

                    else:
                        print(f"[DEBUG] Image already cached: {cache_file.name}")

                    # Update order photo URL to cached image URL if downloaded
                    if cache_file.exists():
                        cached_image_url = f"/images/{cache_file.name}"
                        order['photo'] = cached_image_url
                        print(f"[DEBUG] Updated order with cached image URL: {cached_image_url}")

    if downloaded_count > 0:
        print(f"[SUCCESS] Downloaded and cached {downloaded_count} images for specific orders")
        save_cache()  # Save updated cache with new image URLs
        return True
    else:
        print("[DEBUG] No new images downloaded")
        return False

def sync_latest_orders():
    """Sync latest 20 orders from Google Sheets - preserve ALL existing orders and their editable fields"""
    global orders_cache

    print("[AUTO-SYNC] Checking for latest orders from Google Sheets...")
    new_orders = fetch_orders_from_sheet()

    if new_orders is not None:
        new_orders = limit_orders(new_orders)
        # Sort orders by date (latest first)
        def get_order_date(order):
            if 'Data' in order and order['Data']:  # Use 'Data' column which contains the date
                try:
                    # Try different date formats
                    date_str = str(order['Data']).strip()
                    # Handle various date formats
                    if '/' in date_str:
                        return datetime.strptime(date_str, '%m/%d/%Y')
                    elif '.' in date_str:
                        return datetime.strptime(date_str, '%d.%m.%Y')
                    else:
                        return datetime.now()  # Fallback
                except:
                    return datetime.min  # Old date
            return datetime.min

        # Sort by date, latest first
        sorted_orders = sorted(new_orders, key=get_order_date, reverse=True)

        # Get latest 20 orders
        latest_20 = sorted_orders[:20]

        print(f"[AUTO-SYNC] Found {len(latest_20)} orders in Google Sheets")

        # PRESERVE EDITABLE FIELDS FOR ALL EXISTING ORDERS (FIX FOR CHECKBOX PERSISTENCE)
        print("[AUTO-SYNC] 🔄 Preserving editable fields for ALL existing orders...")

        # Create a mapping of existing orders by transaction ID
        existing_orders_map = {}
        for existing_order in orders_cache:
            transaction = existing_order.get('transaction') or existing_order.get('Transaction ID')
            if transaction:
                existing_orders_map[transaction] = existing_order

        # Update existing orders with latest data but preserve editable fields
        updated_orders = []
        transactions_processed = set()

        # First, update the latest 20 with preserved editable fields
        for order in latest_20:
            transaction = order.get('transaction') or order.get('Transaction ID')
            if transaction:
                transactions_processed.add(transaction)

                # If this order exists in cache, preserve its editable fields
                if transaction in existing_orders_map:
                    existing_order = existing_orders_map[transaction]
                    print(f"[AUTO-SYNC] 📝 Preserving editable fields for transaction: {transaction}")
                    preserve_editable_fields(order, existing_order)

                updated_orders.append(order)

        # Add any existing orders that are NOT in the latest 20 (preserve ALL existing data)
        for existing_order in orders_cache:
            transaction = existing_order.get('transaction') or existing_order.get('Transaction ID')
            if transaction and transaction not in transactions_processed:
                print(f"[AUTO-SYNC] 💾 Keeping existing order: {transaction}")
                updated_orders.append(existing_order)

        # Update the cache with preserved data
        orders_cache = updated_orders
        print(f"[AUTO-SYNC] ✅ Cache updated with {len(updated_orders)} orders (all editable fields preserved)")

        # Download images for new orders
        download_order_images()

        # Save updated cache
        save_cache()
    else:
        print("[AUTO-SYNC] ℹ️ No orders to sync")

def schedule_updates():
    def repeat():
        update_cache()  # Full update hourly
        timer = threading.Timer(3600, repeat)  # Keep full update every hour
        timer.daemon = True
        timer.start()
    repeat()

def schedule_quick_sync():
    """Schedule quick sync every hour for latest orders"""
    def repeat():
        try:
            sync_latest_orders()
        except Exception as e:
            print(f"[AUTO-SYNC ERROR] {str(e)}")
        timer = threading.Timer(3600, repeat)  # 60 minutes (1 hour)
        timer.daemon = True
        timer.start()
    # Start quick sync after 5 minutes
    threading.Timer(300, repeat).start()

def schedule_finance_sync():
    """Schedule finance sheet synchronization every 4 hours"""
    def repeat():
        db = SessionLocal()
        try:
            synchronize_finance_records(db)
        except Exception as e:
            print(f"[FINANCE SYNC ERROR] {str(e)}")
        finally:
            db.close()
        timer = threading.Timer(FINANCE_SYNC_INTERVAL, repeat)
        timer.daemon = True
        timer.start()
    threading.Timer(10, repeat).start()


def schedule_returns_sync():
    """Schedule returns sheet synchronization every day"""
    def repeat():
        db = SessionLocal()
        try:
            synchronize_return_records(db)
        except Exception as e:
            print(f"[RETURNS SYNC ERROR] {str(e)}")
        finally:
            db.close()
        timer = threading.Timer(RETURNS_SYNC_INTERVAL, repeat)
        timer.daemon = True
        timer.start()
    threading.Timer(20, repeat).start()


def schedule_precious_price_sync():
    """Schedule gram gold/silver price synchronization every few hours."""
    def repeat():
        db = SessionLocal()
        try:
            synchronize_precious_price(db)
        except Exception as e:
            print(f"[PRECIOUS SYNC ERROR] {str(e)}")
        finally:
            db.close()
        timer = threading.Timer(PRECIOUS_PRICE_SYNC_INTERVAL, repeat)
        timer.daemon = True
        timer.start()
    threading.Timer(30, repeat).start()

# Assignments management
assignments = {}

def load_assignments():
    global assignments
    if ASSIGNMENTS_FILE.exists():
        try:
            with open(ASSIGNMENTS_FILE, 'r', encoding='utf-8') as f:
                assignments = json.load(f)
            print(f"[DEBUG] Loaded assignments: {assignments}")
        except Exception as e:
            print(f"[ERROR] Failed to load assignments: {e}")
            assignments = {}

def save_assignments():
    try:
        with open(ASSIGNMENTS_FILE, 'w', encoding='utf-8') as f:
            json.dump(assignments, f)
        print(f"[DEBUG] Saved assignments: {assignments}")
    except Exception as e:
        print(f"[ERROR] Failed to save assignments: {e}")

# Load assignments on startup
load_assignments()

# Auth routes
@app.post("/api/auth/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):
    print(f"[DEBUG] Register attempt: {user.username}, {user.email}")

    # Check if email is in whitelist
    if user.email.lower() not in ALLOWED_EMAILS:
        logger.warning(f"[SECURITY] Registration blocked for non-whitelisted email: {user.email}")
        raise HTTPException(
            status_code=403,
            detail="Bu email adresi ile kayıt olma yetkiniz bulunmamaktadır. Sadece yetkili kullanıcılar kayıt olabilir."
        )

    # Check if user exists
    db_user = db.query(User).filter(
        (User.username == user.username) | (User.email == user.email)
    ).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Username or email already registered")

    # Set role based on email
    user_role = "admin" if user.email.lower() == "hakanozturkk@windowslive.com" else "user"

    # Create new user
    hashed_password = get_password_hash(user.password)
    db_user = User(
        username=user.username,
        email=user.email,
        full_name=user.full_name,
        hashed_password=hashed_password,
        role=user_role
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    print(f"[DEBUG] User created: {db_user.id}, {db_user.username}, role: {user_role}")
    return db_user

@app.post("/api/auth/login", response_model=Token)
def login(
    form_data: LoginRequest,
    response: Response,
    request: Request,
    rate_guard: None = Depends(rate_limit_dependency),
    db: Session = Depends(get_db)
):
    client_ip = _resolve_client_ip(request)
    if is_ip_locked(client_ip):
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Çok fazla başarısız giriş denemesi. Lütfen birkaç dakika sonra tekrar deneyin."
        )

    if not verify_captcha_token(form_data.captcha_token, client_ip):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Doğrulama başarısız. Lütfen captchayı tekrar tamamlayın."
        )

    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        register_failed_login(client_ip)
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    if not user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")

    # Check if user's email is in whitelist
    if user.email.lower() not in ALLOWED_EMAILS:
        logger.warning(f"[SECURITY] Login blocked for non-whitelisted email: {user.email}")
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Bu hesap ile giriş yapma yetkiniz bulunmamaktadır."
        )

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username, "user_id": user.id},
        expires_delta=access_token_expires
    )

    refresh_token_value = _generate_refresh_token_value()
    _create_refresh_token_entry(db, user.id, refresh_token_value, request)
    _set_access_cookie(response, request, access_token)
    _set_refresh_cookie(response, request, refresh_token_value)

    user.last_active = datetime.utcnow()
    db.add(user)
    db.commit()

    with _rate_limit_lock:
        _failed_login_attempts.pop(client_ip, None)

    return {"access_token": access_token, "token_type": "bearer", "expires_in": ACCESS_TOKEN_EXPIRE_MINUTES * 60}


@app.post("/api/auth/logout")
def logout(response: Response, request: Request, db: Session = Depends(get_db)):
    refresh_cookie = request.cookies.get(REFRESH_TOKEN_COOKIE_NAME)
    commit_needed = False
    if refresh_cookie:
        token_entry = (
            db.query(RefreshToken)
            .filter(RefreshToken.token_hash == _hash_refresh_token(refresh_cookie))
            .first()
        )
        if token_entry:
            token_entry.revoked_at = datetime.utcnow()
            db.add(token_entry)
            commit_needed = True
    if commit_needed:
        db.commit()
    _clear_auth_cookies(response, request)
    return {"message": "Logged out"}


@app.post("/api/auth/refresh", response_model=Token)
def refresh_access_token(response: Response, request: Request, db: Session = Depends(get_db)):
    raw_refresh = request.cookies.get(REFRESH_TOKEN_COOKIE_NAME)
    if not raw_refresh:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Refresh token missing")

    token_entry = _get_active_refresh_token(db, raw_refresh)
    if not token_entry:
        _clear_auth_cookies(response, request)
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Refresh token expired or invalid")

    user = db.query(User).filter(User.id == token_entry.user_id).first()
    if not user or not user.is_active:
        token_entry.revoked_at = datetime.utcnow()
        db.add(token_entry)
        db.commit()
        _clear_auth_cookies(response, request)
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User inactive")

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username, "user_id": user.id},
        expires_delta=access_token_expires
    )

    token_entry.last_used_at = datetime.utcnow()
    new_refresh_value = _generate_refresh_token_value()
    _create_refresh_token_entry(db, user.id, new_refresh_value, request, replaced_token=token_entry)
    user.last_active = datetime.utcnow()
    db.add(user)
    db.commit()

    _set_access_cookie(response, request, access_token)
    _set_refresh_cookie(response, request, new_refresh_value)

    return {"access_token": access_token, "token_type": "bearer", "expires_in": ACCESS_TOKEN_EXPIRE_MINUTES * 60}


async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    if not token:
        raise credentials_exception

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: Optional[str] = payload.get("sub")
        user_id: Optional[int] = payload.get("user_id")
        if not username:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    query = db.query(User)
    if user_id:
        user = query.filter(User.id == user_id).first()
    else:
        user = query.filter(User.username == username).first()

    if user is None:
        raise credentials_exception

    return user


async def get_optional_user(
    token: Optional[str] = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
) -> Optional[User]:
    if not token:
        return None

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: Optional[str] = payload.get("sub")
        user_id: Optional[int] = payload.get("user_id")
        if not username:
            return None
    except JWTError:
        return None

    query = db.query(User)
    if user_id:
        user = query.filter(User.id == user_id).first()
    else:
        user = query.filter(User.username == username).first()

    return user

@app.post("/api/online/ping")
def ping_online(
    payload: Optional[OnlinePingPayload] = Body(default=None),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    current_user.last_active = datetime.utcnow()
    db.add(current_user)
    session_id = _touch_presence_entry(db, current_user.id, payload)
    _cleanup_stale_presence(db)
    try:
        db.commit()
    except StaleDataError:
        db.rollback()
        db.query(UserPresence).filter(
            UserPresence.user_id == current_user.id,
            UserPresence.session_id == session_id,
        ).delete(synchronize_session=False)
        db.commit()
        _touch_presence_entry(db, current_user.id, payload)
        _cleanup_stale_presence(db)
        db.commit()
    return {
        "status": "ok",
        "session_id": session_id,
        "expires_in": int(ONLINE_ACTIVE_WINDOW.total_seconds()),
    }


@app.post("/api/online/leave")
def leave_online(
    payload: Optional[OnlinePingPayload] = Body(default=None),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    cutoff = datetime.utcnow() - (ONLINE_ACTIVE_WINDOW + timedelta(minutes=5))
    current_user.last_active = cutoff
    db.add(current_user)
    session_id = getattr(payload, "session_id", None)
    if session_id:
        _end_presence_session(db, current_user.id, session_id, state="offline")
    else:
        # Mark all sessions for the user as offline if no specific session is provided
        now = datetime.utcnow()
        entries = db.query(UserPresence).filter(UserPresence.user_id == current_user.id).all()
        for entry in entries:
            entry.state = "offline"
            entry.last_seen = cutoff
            entry.ended_at = now
            db.add(entry)
    _cleanup_stale_presence(db)
    db.commit()
    return {"status": "ok"}


@app.get("/api/online/users")
def get_online_users(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    cutoff = datetime.utcnow() - ONLINE_ACTIVE_WINDOW
    presence_rows = (
        db.query(UserPresence)
        .filter(UserPresence.last_seen != None, UserPresence.last_seen >= cutoff)
        .all()
    )
    sessions_by_user: Dict[int, List[UserPresence]] = {}
    for entry in presence_rows:
        sessions_by_user.setdefault(entry.user_id, []).append(entry)

    users = (
        db.query(User)
        .filter(User.is_active == True)
        .all()
    )

    result: List[Dict[str, Any]] = []
    for user in users:
        sessions = sessions_by_user.get(user.id, [])
        fallback_active = bool(user.last_active and user.last_active >= cutoff)
        is_online = bool(sessions) or fallback_active

        client_types = sorted({(session.client_type or "browser") for session in sessions})
        if not client_types and fallback_active:
            client_types = ["browser"]

        presence_summary = (
            ", ".join(client_types).title()
            if client_types
            else ("Offline" if not is_online else None)
        )
        result.append({
            "id": user.id,
            "username": user.username,
            "full_name": user.full_name,
            "avatar": user.avatar,
            "last_active": user.last_active.isoformat() if user.last_active else None,
            "client_types": client_types,
            "presence_summary": presence_summary,
            "is_online": is_online,
            "presence": [
                {
                    "session_id": session.session_id,
                    "client_type": session.client_type,
                    "state": session.state,
                    "last_seen": session.last_seen.isoformat() if session.last_seen else None,
                    "app_state": session.app_state,
                    "active_page": session.active_page,
                }
                for session in sorted(
                    sessions,
                    key=lambda item: item.last_seen or datetime.utcnow(),
                    reverse=True
                )
            ],
        })

    result.sort(
        key=lambda item: (
            item.get("presence", [{}])[0].get("last_seen")
            if item.get("presence")
            else item.get("last_active") or ""
        ),
        reverse=True,
    )
    return result

@app.get("/api/auth/me", response_model=UserResponse)
def get_current_user_endpoint(current_user: User = Depends(get_current_user)):
    return current_user

@app.get("/api/users/me", response_model=UserResponse)
def read_user_profile(current_user: User = Depends(get_current_user)):
    return current_user

@app.put("/api/users/me", response_model=UserResponse)
def update_user_profile(
    updates: UserUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    update_data = updates.dict(exclude_unset=True)
    if not update_data:
        return current_user

    for field, value in update_data.items():
        setattr(current_user, field, value)

    db.add(current_user)
    db.commit()
    db.refresh(current_user)
    return current_user

@app.post("/api/admin/reset-password")
def admin_reset_password(
    payload: PasswordResetRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Only admins can reset passwords")

    if len(payload.new_password) < 8:
        raise HTTPException(status_code=400, detail="Password must be at least 8 characters long")

    target = db.query(User).filter(User.email == payload.email.lower()).first()
    if not target:
        raise HTTPException(status_code=404, detail="User not found")

    target.hashed_password = get_password_hash(payload.new_password)
    db.add(target)
    db.commit()
    db.refresh(target)

    record_activity(
        db,
        actor=current_user,
        action="admin_reset_password",
        description=f"{target.email} password reset",
        entity_type="user",
        entity_id=target.id,
    )

    return {"detail": "Password updated"}

@app.get("/api/admin/announcements", response_model=List[AnnouncementResponse])
def list_admin_announcements(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Only admins can view announcements")

    announcements = (
        db.query(AdminAnnouncement)
        .order_by(AdminAnnouncement.created_at.desc())
        .all()
    )
    if not announcements:
        return []

    user_ids = {
        user_id
        for announcement in announcements
        for user_id in (announcement.target_user_id, announcement.created_by)
        if user_id
    }
    target_lookup: Dict[int, User] = {}
    if user_ids:
        rows = db.query(User).filter(User.id.in_(list(user_ids))).all()
        target_lookup = {row.id: row for row in rows}

    return [
        serialize_announcement(
            announcement,
            target_user=target_lookup.get(announcement.target_user_id),
            creator=target_lookup.get(announcement.created_by) if announcement.created_by else None,
        )
        for announcement in announcements
    ]

@app.post("/api/admin/announcements", response_model=AnnouncementResponse)
def create_admin_announcement(
    payload: AnnouncementCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Only admins can create announcements")

    target_user = db.query(User).filter(User.id == payload.user_id).first()
    if not target_user:
        raise HTTPException(status_code=404, detail="Target user not found")

    content = (payload.content or "").strip()
    if not content:
        raise HTTPException(status_code=400, detail="Announcement content is required")

    title = (payload.title or "").strip() or None
    announcement = AdminAnnouncement(
        title=title,
        content=content,
        target_user_id=target_user.id,
        created_by=current_user.id,
        is_active=True,
    )
    db.add(announcement)
    db.commit()
    db.refresh(announcement)

    record_activity(
        db,
        actor=current_user,
        action="admin_create_announcement",
        description=f"Announcement created for {target_user.email}",
        entity_type="announcement",
        entity_id=announcement.id,
        metadata={"target_user_id": target_user.id},
    )

    return serialize_announcement(announcement, target_user=target_user, creator=current_user)

@app.delete("/api/admin/announcements/{announcement_id}", response_model=AnnouncementResponse)
def deactivate_admin_announcement(
    announcement_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Only admins can remove announcements")

    announcement = db.query(AdminAnnouncement).filter(AdminAnnouncement.id == announcement_id).first()
    if not announcement:
        raise HTTPException(status_code=404, detail="Announcement not found")

    announcement.is_active = False
    announcement.updated_at = datetime.utcnow()
    db.add(announcement)
    db.commit()
    db.refresh(announcement)

    target_user = None
    if announcement.target_user_id:
        target_user = db.query(User).filter(User.id == announcement.target_user_id).first()

    record_activity(
        db,
        actor=current_user,
        action="admin_deactivate_announcement",
        description=f"Announcement {announcement.id} deactivated",
        entity_type="announcement",
        entity_id=announcement.id,
        metadata={"target_user_id": announcement.target_user_id},
    )

    return serialize_announcement(
        announcement,
        target_user=target_user,
        creator=current_user,
    )

@app.get("/api/announcements/me", response_model=List[AnnouncementResponse])
def get_my_announcements(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    announcements = (
        db.query(AdminAnnouncement)
        .filter(AdminAnnouncement.is_active == True)
        .filter(
            or_(
                AdminAnnouncement.target_user_id == None,
                AdminAnnouncement.target_user_id == current_user.id,
            )
        )
        .order_by(AdminAnnouncement.created_at.desc())
        .all()
    )
    if not announcements:
        return []

    creator_ids = {ann.created_by for ann in announcements if ann.created_by}
    creators: Dict[int, User] = {}
    if creator_ids:
        rows = db.query(User).filter(User.id.in_(list(creator_ids))).all()
        creators = {row.id: row for row in rows}

    return [
        serialize_announcement(
            announcement,
            target_user=current_user if announcement.target_user_id == current_user.id else None,
            creator=creators.get(announcement.created_by),
        )
        for announcement in announcements
    ]

@app.get("/api/users/me/dashboard-stats")
def get_dashboard_stats(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Get dashboard statistics for current (authenticated) user"""
    if not current_user:
        raise HTTPException(status_code=401, detail="Authentication required for dashboard stats")

    # Get tasks assigned to current user (supports multi-assignment)
    all_tasks = db.query(Task).all()
    tasks = [task for task in all_tasks if current_user.id in get_task_assignees(task)]

    total_assigned = len(tasks)

    # Completed tasks
    completed_tasks = [task for task in tasks if task.status == "done"]
    completed_count = len(completed_tasks)

    # On time completed tasks
    completed_on_time = 0
    overdue_completed = 0
    current_time = datetime.now(timezone.utc)

    for task in completed_tasks:
        deadline_value = getattr(task, "deadline", None)
        completion_value = getattr(task, "completed_at", None)
        if deadline_value:
            try:
                deadline_time = deadline_value if isinstance(deadline_value, datetime) else datetime.fromisoformat(str(deadline_value))
            except Exception:
                deadline_time = None
            if deadline_time and deadline_time.tzinfo is None:
                deadline_time = deadline_time.replace(tzinfo=timezone.utc)

            if completion_value:
                completion_time = completion_value if isinstance(completion_value, datetime) else None
                if completion_time is None:
                    try:
                        completion_time = datetime.fromisoformat(str(completion_value))
                    except Exception:
                        completion_time = None
                if completion_time and completion_time.tzinfo is None:
                    completion_time = completion_time.replace(tzinfo=timezone.utc)

                if completion_time and deadline_time:
                    if completion_time <= deadline_time:
                        completed_on_time += 1
                    else:
                        overdue_completed += 1
                else:
                    overdue_completed += 1
            else:
                overdue_completed += 1
        else:
            completed_on_time += 1

    # Tasks in progress
    in_progress_tasks = [task for task in tasks if task.status == "in-progress"]
    in_progress_count = len(in_progress_tasks)

    # Overdue tasks in progress
    overdue_in_progress = 0
    for task in in_progress_tasks:
        if task.deadline and task.deadline.replace(tzinfo=timezone.utc) < current_time:
            overdue_in_progress += 1

    weekly_assigned = db.query(WeeklyPlannerEntry).filter(WeeklyPlannerEntry.assigned_to == current_user.id).count()

    return {
        "total_assigned": total_assigned,
        "completed": completed_count,
        "completed_on_time": completed_on_time,
        "overdue_completed": overdue_completed,
        "in_progress": in_progress_count,
        "overdue_in_progress": overdue_in_progress,
        "weekly_assigned": weekly_assigned,
        "overdue_total": overdue_completed + overdue_in_progress
    }

# NextAuth session endpoint
@app.get("/api/auth/session")
def get_session():
    """NextAuth session endpoint - returns minimal session or empty for now"""
    # For now, return a basic session structure that NextAuth can handle
    # In a real implementation, this would validate JWT tokens and return user data
    return {}

@app.post("/api/auth/session")
async def post_session():
    """NextAuth session POST endpoint - handles session updates"""
    # Basic implementation - NextAuth makes POST requests too
    return {}

# Initialize cache and scheduler
orders_cache = []
manual_orders: List[Dict[str, Any]] = []
order_sequence: List[str] = []

def load_manual_orders():
    global manual_orders
    if MANUAL_ORDERS_FILE.exists():
        try:
            with open(MANUAL_ORDERS_FILE, 'r', encoding='utf-8') as f:
                manual_orders = json.load(f)
        except Exception as exc:
            print(f"[ERROR] Failed to load manual orders: {exc}")
            manual_orders = []
    else:
        manual_orders = []
    normalized: List[Dict[str, Any]] = []
    for entry in manual_orders:
        normalized_entry = copy.deepcopy(DEFAULT_MANUAL_ORDER)
        for field in MANUAL_ORDER_FIELDS:
            if field in entry and entry[field] is not None:
                normalized_entry[field] = entry[field]
        normalized_entry["transaction"] = entry.get("transaction") or f"MANUAL-{str(uuid.uuid4())[:8].upper()}"
        normalized_entry["__manualId"] = entry.get("__manualId") or str(uuid.uuid4())
        normalized_entry["created_at"] = entry.get("created_at", datetime.utcnow().isoformat())
        normalized_entry["isManual"] = True
        normalized.append(normalized_entry)
    manual_orders = normalized
    save_manual_orders()

def save_manual_orders():
    MANUAL_ORDERS_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(MANUAL_ORDERS_FILE, 'w', encoding='utf-8') as f:
        json.dump(manual_orders, f, ensure_ascii=False, indent=2)

def load_order_sequence():
    global order_sequence
    if ORDER_SEQUENCE_FILE.exists():
        try:
            with open(ORDER_SEQUENCE_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, list):
                    order_sequence = [str(item) for item in data if item]
                else:
                    order_sequence = []
        except Exception as exc:
            print(f"[ERROR] Failed to load order sequence: {exc}")
            order_sequence = []
    else:
        order_sequence = []

def save_order_sequence():
    ORDER_SEQUENCE_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(ORDER_SEQUENCE_FILE, 'w', encoding='utf-8') as f:
        json.dump(order_sequence, f, ensure_ascii=False, indent=2)

MANUAL_ORDER_FIELDS = [
    "buyername", "productname", "Quantity", "material", "Chain Length",
    "Personalization", "ioss", "FullAdress", "itemprice", "discount",
    "salestax", "ordertotal", "buyeremail", "tarih", "created_at",
    "Note", "photo", "Produce", "Ready", "Shipped", "shop", "transaction", "_sortKey"
]

DEFAULT_MANUAL_ORDER = {
    "buyername": "",
    "productname": "",
    "Quantity": "",
    "material": "",
    "Chain Length": "",
    "Personalization": "",
    "ioss": "",
    "FullAdress": "",
    "itemprice": "",
    "discount": "",
    "salestax": "",
    "ordertotal": "",
    "buyeremail": "",
    "tarih": "",
    "created_at": "",
    "Note": "",
    "photo": "",
    "Produce": "FALSE",
    "Ready": "FALSE",
    "Shipped": "FALSE",
    "shop": "",
    "transaction": "",
    "isManual": True
}

def build_manual_order(payload: Dict[str, Any]) -> Dict[str, Any]:
    manual_id = str(payload.get("__manualId") or uuid.uuid4())
    order = copy.deepcopy(DEFAULT_MANUAL_ORDER)
    for field in MANUAL_ORDER_FIELDS:
        if field in payload and payload[field] is not None:
            order[field] = payload[field]
    if not order["transaction"]:
        order["transaction"] = f"MANUAL-{manual_id[:8].upper()}"
    order["__manualId"] = manual_id
    order["created_at"] = payload.get("created_at") or datetime.utcnow().isoformat()
    order["isManual"] = True
    order["_sortKey"] = payload.get("_sortKey") or determine_sort_key(order)
    return order

def find_manual_by_id(manual_id: str) -> Optional[Dict[str, Any]]:
    return next((order for order in manual_orders if order.get("__manualId") == manual_id), None)

def find_manual_by_transaction(transaction: str) -> Optional[Dict[str, Any]]:
    return next((order for order in manual_orders if str(order.get("transaction")) == str(transaction)), None)

order_completion_log: Dict[str, Dict[str, Any]] = {}

def load_order_completion_log():
    global order_completion_log
    try:
        if ORDER_COMPLETION_LOG_FILE.exists():
            with open(ORDER_COMPLETION_LOG_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, dict):
                    order_completion_log = data
                else:
                    order_completion_log = {}
        else:
            ORDER_COMPLETION_LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
            order_completion_log = {}
    except Exception as exc:
        print(f"[WARNING] Failed to load order completion log: {exc}")
        order_completion_log = {}

def save_order_completion_log():
    try:
        ORDER_COMPLETION_LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(ORDER_COMPLETION_LOG_FILE, 'w', encoding='utf-8') as f:
            json.dump(order_completion_log, f, ensure_ascii=False, indent=2)
    except Exception as exc:
        print(f"[WARNING] Failed to save order completion log: {exc}")

def get_order_identifier(order: Dict[str, Any], explicit_identifier: Optional[str] = None) -> Optional[str]:
    candidates = [
        explicit_identifier,
        order.get("transaction"),
        order.get("Transaction ID"),
        order.get("Transaction"),
        order.get("order_id"),
        order.get("Order ID"),
        order.get("__manualId"),
        order.get("id"),
        order.get("ID"),
    ]
    for candidate in candidates:
        if candidate:
            return str(candidate)
    return None

def parse_completion_timestamp(value: str) -> Optional[datetime]:
    if not value:
        return None
    try:
        timestamp = parse_iso_datetime(value)
        if timestamp.tzinfo is None:
            timestamp = timestamp.replace(tzinfo=timezone.utc)
        return timestamp
    except Exception:
        return None

def completion_date_from_entry(entry: Dict[str, Any]) -> Optional[date_cls]:
    timestamp = parse_completion_timestamp(entry.get("completed_at"))
    if not timestamp:
        return None
    return timestamp.astimezone(ISTANBUL_TZ).date()

def get_order_stage_flags(order: Dict[str, Any]) -> Tuple[bool, bool, bool]:
    produce = normalize_flag_value(order.get("Produce") or order.get("Kesildi"))
    ready = normalize_flag_value(order.get("Ready") or order.get("Hazır"))
    shipped = normalize_flag_value(order.get("Shipped") or order.get("Gönderildi"))
    return produce, ready, shipped

def is_order_marked_complete(order: Dict[str, Any]) -> bool:
    produce, ready, shipped = get_order_stage_flags(order)
    return produce and ready and shipped

def update_order_completion_tracking(order: Dict[str, Any], explicit_identifier: Optional[str] = None):
    global order_completion_log
    identifier = get_order_identifier(order, explicit_identifier)
    if not identifier:
        return

    produce, ready, shipped = get_order_stage_flags(order)
    is_complete_now = produce and ready and shipped
    entry = order_completion_log.get(identifier, {})
    was_complete = bool(entry.get("is_complete"))

    if is_complete_now and not was_complete:
        timestamp = datetime.now(timezone.utc).isoformat()
        history = entry.get("history") or []
        history.append(timestamp)
        if len(history) > 50:
            history = history[-50:]
        order_completion_log[identifier] = {
            "is_complete": True,
            "completed_at": timestamp,
            "history": history
        }
        save_order_completion_log()
    elif not is_complete_now and was_complete:
        entry["is_complete"] = False
        entry["completed_at"] = None
        order_completion_log[identifier] = entry
        save_order_completion_log()

def remove_order_completion_entry(identifier: Optional[str]):
    if not identifier:
        return
    if identifier in order_completion_log:
        order_completion_log.pop(identifier, None)
        save_order_completion_log()

if not orders_cache:
    load_cache()  # Load from cache if available
    if not orders_cache:
        update_cache()  # Initial load if no cache

load_manual_orders()
load_order_completion_log()
load_order_sequence()

# Start sync schedulers
if DISABLE_AUTOMATIC_SYNC:
    print("[STARTUP] Automatic sync schedulers disabled via DISABLE_AUTOMATIC_SYNC=1")
else:
    schedule_updates()
    schedule_quick_sync()
    schedule_finance_sync()
    schedule_returns_sync()
    schedule_precious_price_sync()

# Force initial sync on startup
print("[STARTUP] Forcing initial sync...")
update_cache()
try:
    db = SessionLocal()
    result = synchronize_finance_records(db)
    print(f"[STARTUP] Finance sync completed (added {result.get('added')} rows)")
    returns_result = synchronize_return_records(db)
    print(f"[STARTUP] Returns sync completed (added {returns_result.get('added')} rows)")
finally:
    db.close()

@app.get("/api/users", response_model=List[UserResponse])
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users

@app.put("/api/users/{user_id}")
def update_profile(user_id: int, user_data: dict, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    for key, value in user_data.items():
        if hasattr(user, key):
            setattr(user, key, value)

    db.commit()
    db.refresh(user)
    return user

# User preferences Pydantic models
class UserPreferencesUpdate(BaseModel):
    table_density: Optional[str] = None  # 'compact', 'normal', 'spacious'

@app.get("/api/users/me/preferences")
def get_user_preferences(db: Session = Depends(get_db)):
    """Get current user's preferences (especially table density)"""
    # For now, return first user as placeholder
    user = db.query(User).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return {
        "user_id": user.id,
        "table_density": user.table_density or "normal",
        "preferences": {
            "table_density": user.table_density or "normal"
        }
    }

@app.put("/api/users/me/preferences")
def update_user_preferences(preferences: UserPreferencesUpdate, db: Session = Depends(get_db)):
    """Update current user's preferences"""
    # For now, update first user as placeholder
    user = db.query(User).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if preferences.table_density is not None:
        # Validate table_density value
        valid_densities = ["compact", "normal", "spacious"]
        if preferences.table_density not in valid_densities:
            raise HTTPException(status_code=400, detail=f"Geçersiz table_density: {preferences.table_density}. Geçerli değerler: {valid_densities}")

        user.table_density = preferences.table_density

    db.commit()
    db.refresh(user)

    return {
        "message": "Tercihler güncellendi",
        "user_id": user.id,
        "preferences": {
            "table_density": user.table_density
        }
    }

@app.post("/api/orders/{order_id}/assign/{user_id}")
def assign_order(order_id: str, user_id: int, db: Session = Depends(get_db)):
    global assignments

    # Check if user exists
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Check if current user has permission (for now, allow any logged in user)
    # In a real app, you'd check permissions here

    # Update the assignments tracking
    assignments[order_id] = user_id
    save_assignments()

    # Create a notification for the assigned user
    notification = Notification(
        user_id=user_id,
        title="Yeni sipariş atandı",
        message=f"Sipariş #{order_id} size atandı",
        type="order_assigned",
        related_id=int(order_id) if order_id.isdigit() else None
    )
    db.add(notification)
    db.commit()

    return {
        "message": f"Order {order_id} assigned to user {user.username}",
        "assigned_user": {
            "id": user.id,
            "username": user.username,
            "email": user.email
        }
    }

@app.get("/api/orders/{order_id}/assignee")
def get_order_assignee(order_id: str):
    global assignments
    user_id = assignments.get(order_id)
    if user_id:
        return {"assigned_user": user_id}
    return {"assigned_user": None}

def try_parse_order_date(value: Optional[Any]) -> Optional[datetime]:
    if not value:
        return None
    if isinstance(value, datetime):
        return value
    if isinstance(value, str):
        normalized = value.strip()
        if not normalized:
            return None
        try:
            return parse_iso_datetime(normalized)
        except Exception:
            pass
        for fmt in ("%d.%m.%Y", "%Y-%m-%d", "%d/%m/%Y", "%m/%d/%Y"):
            try:
                return datetime.strptime(normalized, fmt)
            except Exception:
                continue
    return None

def determine_sort_key(order: Dict[str, Any]) -> str:
    date_candidates = [
        order.get("tarih"),
        order.get("tarihh"),
        order.get("created_at"),
        order.get("_sortKey")
    ]
    for candidate in date_candidates:
        parsed = try_parse_order_date(candidate)
        if parsed:
            return parsed.isoformat()
    return datetime.utcnow().isoformat()

def get_checkbox_string(order: Dict[str, Any], primary_key: str, fallback_key: str) -> str:
    value = order.get(primary_key)
    if value in (None, ""):
        value = order.get(fallback_key)
    return str(value if value not in (None, "") else "FALSE")


def get_note_string(order: Dict[str, Any]) -> str:
    value = order.get('Note')
    if value in (None, ""):
        value = order.get('importantnote')
    return str(value if value not in (None, "") else "")


def transform_orders_for_frontend() -> List[Dict[str, Any]]:
    global orders_cache
    if not orders_cache:
        load_cache()

    transformed_orders: List[Dict[str, Any]] = []
    for order in orders_cache:
        try:
            transformed = {
                "photo": str(order.get('photo', order.get('Image', ''))),
                "buyername": str(order.get('Name', '')),
                "Produce": get_checkbox_string(order, 'Produce', 'Kesildi'),
                "Ready": get_checkbox_string(order, 'Ready', 'Hazır'),
                "Shipped": get_checkbox_string(order, 'Shipped', 'Gönderildi'),
                "Note": get_note_string(order),
                "productname": str(order.get('Product', '')),
                "Quantity": str(order.get('Quantity', '')),
                "material": str(order.get('Material & Size', '')),
                "Chain Length": str(order.get('Chain Length', '')),
                "Personalization": str(order.get('Personalization', '')),
                "ioss": str(order.get('IOSS Number', '')),
                "FullAdress": str(order.get('FullAdress', '')),
                "itemprice": str(order.get('Item Price', '')),
                "discount": str(order.get('Discount', '')),
                "salestax": str(order.get('Sales Tax', '')),
                "ordertotal": str(order.get('Order Total', '')),
                "buyeremail": str(order.get('Buyer Email', '')),
                "tarih": str(order.get('Data', '')),
                "vatcollected": str(order.get('VAT', '')),
                "vatid": str(order.get('VAT ID', '')),
                "shop": str(order.get('Shop Name', '')),
                "vatpaidchf": str(order.get('VAT Paid CHF', '')),
                "transaction": str(order.get('Transaction ID', '')),
                "Buyer Note": str(order.get('Buyer Note', '')),
                "Expres": str(order.get('Express', '')),
                "data": str(order.get('Data', '')),
                "buyermessage": str(order.get('MÃ¼Återi MesajÄ±', '')),
                "express": str(order.get('Express', '')),
                "gonderimdurumu": "pending",
                "status": "pending",
                "Kesildi": get_checkbox_string(order, 'Kesildi', 'Produce'),
                "Hazır": get_checkbox_string(order, 'Hazır', 'Ready'),
                "Gönderildi": get_checkbox_string(order, 'Gönderildi', 'Shipped'),
                "importantnote": get_note_string(order),
                "Problem": str(order.get('Problem', '') or 'FALSE')
            }
            transformed["isManual"] = False
            transformed["_sortKey"] = determine_sort_key(transformed)
            transformed_orders.append(transformed)
        except Exception as e:
            print(f"[ERROR] Transforming order failed: {e}")
            continue

    manual_payloads = [copy.deepcopy(entry) for entry in manual_orders]
    for manual_entry in manual_payloads:
        manual_entry.setdefault("isManual", True)
        manual_entry.setdefault("_sortKey", manual_entry.get("created_at") or datetime.utcnow().isoformat())

    combined = manual_payloads + transformed_orders
    combined.sort(key=lambda item: item.get("_sortKey") or "", reverse=True)
    return combined

def normalize_flag_value(value: Any) -> bool:
    if value is None:
        return False
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return value == 1
    if isinstance(value, str):
        normalized = value.strip().lower()
        return normalized in ("true", "1", "yes", "y", "t")
    return False

def compute_dashboard_order_stats(order_list: List[Dict[str, Any]]) -> Dict[str, Any]:
    global order_completion_log
    total_completed = 0
    pending = 0
    produce_only = 0
    ready_total = 0
    shipped_total = 0
    today = datetime.now(ISTANBUL_TZ).date()
    daily_completed = 0
    days = [today - timedelta(days=i) for i in range(29, -1, -1)]
    day_counts = {day.isoformat(): 0 for day in days}
    stage_day_counts = {
        day.isoformat(): {"produce": 0, "ready": 0, "shipped": 0}
        for day in days
    }
    log_dirty = False

    for order in order_list:
        produce, ready, shipped = get_order_stage_flags(order)
        if produce and not ready:
            produce_only += 1
        if ready:
            ready_total += 1
        if shipped:
            shipped_total += 1
        stage_date = try_parse_order_date(
            order.get("tarih") or order.get("tarihh") or order.get("created_at") or order.get("_sortKey")
        )
        stage_day_key = stage_date.date().isoformat() if stage_date else None
        if stage_day_key and stage_day_key in stage_day_counts:
            if produce:
                stage_day_counts[stage_day_key]["produce"] += 1
            if ready:
                stage_day_counts[stage_day_key]["ready"] += 1
            if shipped:
                stage_day_counts[stage_day_key]["shipped"] += 1
        identifier = get_order_identifier(order)
        is_complete_now = produce and ready and shipped
        completion_date = None
        if identifier:
            entry = order_completion_log.get(identifier)
            if entry and not is_complete_now and entry.get("is_complete"):
                entry["is_complete"] = False
                entry["completed_at"] = None
                log_dirty = True
            elif is_complete_now and entry and entry.get("is_complete") and entry.get("completed_at"):
                completion_date = completion_date_from_entry(entry)
                if completion_date is None:
                    entry["is_complete"] = False
                    entry["completed_at"] = None
                    log_dirty = True
        if is_complete_now and completion_date is None:
            fallback_date = try_parse_order_date(
                order.get("tarih") or order.get("tarihh") or order.get("created_at") or order.get("_sortKey")
            )
            if fallback_date:
                completion_date = fallback_date.date()
        if produce and ready and shipped:
            total_completed += 1
            if completion_date:
                if completion_date == today:
                    daily_completed += 1
                day_key = completion_date.isoformat()
                if day_key in day_counts:
                    day_counts[day_key] += 1
        else:
            pending += 1

    if log_dirty:
        save_order_completion_log()

    monthly_trend = [{"date": day.isoformat(), "count": day_counts[day.isoformat()]} for day in days]
    stage_trend = [
        {
            "date": day.isoformat(),
            "produce": stage_day_counts[day.isoformat()]["produce"],
            "ready": stage_day_counts[day.isoformat()]["ready"],
            "shipped": stage_day_counts[day.isoformat()]["shipped"],
        }
        for day in days
    ]
    return {
        "completed": total_completed,
        "pending": pending,
        "produce": produce_only,
        "ready": ready_total,
        "shipped": shipped_total,
        "daily_completed": daily_completed,
        "monthly_trend": monthly_trend,
        "stage_trend": stage_trend,
    }

@app.get("/api/orders", response_model=List[Dict[str, Any]])
async def get_orders():
    orders = transform_orders_for_frontend()
    print(f"[DEBUG] Returning {len(orders)} transformed orders to frontend")
    return orders

@app.get("/api/dashboard/orders-stats")
async def get_orders_dashboard_stats():
    orders = transform_orders_for_frontend()
    return compute_dashboard_order_stats(orders)

@app.post("/api/orders/refresh")
async def refresh_orders():
    """Force a full cache reset, re-fetch from Google Sheets and download images."""
    print("[API] /api/orders/refresh called - resetting cache")
    reset_orders_cache()
    removed_images = clear_image_cache()
    update_cache(download_images=True)
    return {
        "status": "success",
        "message": "Orders cache cleared and refreshed from Google Sheets",
        "records_fetched": len(orders_cache),
        "images_purged": removed_images,
    }


@app.post("/api/orders/refresh-cron")
def cron_refresh_orders(request: Request):
    """Allow a localhost cron job to nuke the cache and re-fetch orders."""
    ensure_local_cron_access(request)
    print("[CRON] /api/orders/refresh-cron triggered - wiping cache")
    reset_orders_cache()
    removed_images = clear_image_cache()
    try:
        update_cache(download_images=True)
    except Exception as exc:
        print(f"[CRON] /api/orders/refresh-cron failed: {exc}")
        raise HTTPException(status_code=500, detail="Cron refresh failed") from exc
    return {
        "status": "success",
        "message": "Orders cache rebuilt from Google Sheets",
        "records_fetched": len(orders_cache),
        "images_purged": removed_images,
    }

@app.post("/api/orders/sync")
async def sync_orders(db: Session = Depends(get_db)):
    """Manually sync orders from Google Sheets - Admin only"""
    # Get current user from database (since we don't have proper JWT yet)
    current_user = db.query(User).first()
    if not current_user or current_user.email.lower() != ADMIN_EMAIL.lower():
        raise HTTPException(status_code=403, detail="Bu işlem sadece admin kullanıcısı tarafından yapılabilir")

    global orders_cache
    try:
        print(f"[DEBUG] Manual sync requested by admin: {current_user.username}")
        update_cache()  # This will force refresh and merge data
        return {
            "status": "success",
            "message": f"{len(orders_cache)} sipariş başarıyla Google Sheets'den çekildi ve güncellendi",
            "record_count": len(orders_cache),
            "sheet_url": "https://docs.google.com/spreadsheets/d/1_h3QWwiSS6Pc8aYqwaXUMlryObgHqm4pkr-DbtqY5Qk",
            "admin_user": current_user.email
        }
    except Exception as e:
        return {
            "status": "error",
            "message": f"Senkronization hatası: {str(e)}",
            "record_count": len(orders_cache) if orders_cache else 0
        }

@app.get("/api/proxy-image")
async def proxy_image(url: str):
    try:
        print(f"[DEBUG] Accessing proxy-image with URL: {url}")

        # Handle Google Drive URLs specifically
        if "drive.google.com" in url:
            # Extract file ID from Google Drive URL
            if "id=" in url:
                file_id = url.split("id=")[1].split("&")[0].split("?")[0].split("#")[0]
                print(f"[DEBUG] Extracted file ID: {file_id}")

                # Try different Google Drive access methods
                possible_urls = [
                    f"https://drive.google.com/uc?export=download&id={file_id}",
                    f"https://drive.google.com/uc?export=view&id={file_id}",
                    f"https://drive.google.com/uc?export=open&id={file_id}",
                    f"https://drive.google.com/uc?id={file_id}",
                ]

                for test_url in possible_urls:
                    try:
                        print(f"[DEBUG] Trying Google Drive URL: {test_url}")
                        headers = {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                            'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
                            'Accept-Language': 'en-US,en;q=0.9',
                            'Accept-Encoding': 'gzip, deflate, br',
                            'DNT': '1',
                            'Connection': 'keep-alive',
                            'Upgrade-Insecure-Requests': '1',
                        }

                        response = requests.get(test_url, timeout=20, headers=headers, allow_redirects=True, stream=True)

                        if response.status_code != 200:
                            print(f"[DEBUG] Failed with status {response.status_code} for {test_url}")
                            continue

                        content = response.content
                        content_length = len(content)

                        if content_length < 100:  # Probably not an actual image file
                            print(f"[DEBUG] Invalid content length {content_length} for {test_url}")
                            continue

                        content_type = response.headers.get('content-type', 'image/jpeg')
                        print(f"[SUCCESS] Successfully downloaded image from {test_url}, size: {content_length} bytes")

                        # Save to cache
                        hashed = hashlib.md5(url.encode()).hexdigest()
                        cache_file = cache_dir / f"{hashed}.jpg"

                        try:
                            cache_file.write_bytes(content)
                            print(f"[DEBUG] Cached image as {cache_file}")
                        except Exception as cache_e:
                            print(f"[WARNING] Failed to cache image: {cache_e}")

                        return Response(
                            content=content,
                            media_type=content_type
                        )

                    except Exception as e:
                        print(f"[WARNING] Failed URL {test_url}: {str(e)}")
                        continue

                # If all Google Drive attempts fail, use fallback placeholder
                print(f"[ERROR] All Google Drive download attempts failed for {url}")
                raise HTTPException(status_code=500, detail="Google Drive image access denied")

        else:
            # Regular image URL
            print(f"[DEBUG] Processing regular image URL: {url}")
            hashed = hashlib.md5(url.encode()).hexdigest()
            cache_file = cache_dir / f"{hashed}.jpg"
            media_type = 'image/jpeg'

            if cache_file.exists():
                print(f"[DEBUG] Serving cached image for {url}")
                return Response(
                    content=cache_file.read_bytes(),
                    media_type=media_type
                )
            else:
                print(f"[DEBUG] Downloading regular image: {url}")
                headers = {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
                response = requests.get(url, timeout=15, headers=headers, allow_redirects=True)
                response.raise_for_status()
                content = response.content
                content_type = response.headers.get('content-type', 'image/jpeg')

                print(f"[DEBUG] Successfully downloaded {len(content)} bytes, type: {content_type}")

                try:
                    cache_file.write_bytes(content)
                except Exception as cache_e:
                    print(f"[WARNING] Failed to cache image: {cache_e}")

                return Response(
                    content=content,
                    media_type=content_type
                )

    except requests.exceptions.HTTPError as http_e:
        print(f"[ERROR] HTTP error for {url}: {http_e.response.status_code}")
        raise HTTPException(status_code=500, detail=f"HTTP {http_e.response.status_code}")
    except requests.exceptions.Timeout:
        print(f"[ERROR] Timeout for {url}")
        raise HTTPException(status_code=504, detail="Download timeout")
    except requests.exceptions.RequestException as req_e:
        print(f"[ERROR] Request error for {url}: {req_e}")
        raise HTTPException(status_code=500, detail=f"Connection failed: {str(req_e)}")
    except Exception as e:
        print(f"[ERROR] Unexpected error for {url}: {e}")
        raise HTTPException(status_code=500, detail=f"Processing error: {e}")

@app.get("/api/test")
async def test_endpoint():
    print("[DEBUG] Test endpoint called")
    return {"message": "Backend is working!", "timestamp": str(datetime.now())}

@app.get("/api/debug/connectivity")
async def test_connectivity():
    """Test network connectivity to external services"""
    test_results = {}

    # Test basic internet connection - if this works, PC can connect to internet
    try:
        print("[DEBUG] Testing basic internet connectivity to httpbin.org...")
        response = requests.get("https://httpbin.org/ip", timeout=10)
        if response.status_code == 200:
            test_results["internet_connectivity"] = "✓ Çalışıyor - PC internete erişebiliyor"
            print("[DEBUG] Internet bağlantısı OK")
        else:
            test_results["internet_connectivity"] = f"✗ Status: {response.status_code}"
            print(f"[ERROR] Httpbin başarısız, status {response.status_code}")
    except Exception as e:
        test_results["internet_connectivity"] = f"✗ Hata: {str(e)}"
        print(f"[ERROR] İnternet bağlantısı yok: {e}")

    # Test Google Drive access - if this fails but internet works, then Google Drive blocked
    try:
        print("[DEBUG] Testing Google Drive access...")
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        test_url = "https://www.google.com/"
        response = requests.get(test_url, timeout=10, headers=headers)
        if response.status_code == 200:
            test_results["google_drive_access"] = "✓ Google Drive erişimi çalışıyor"
            print("[DEBUG] Google Drive erişimi OK")
        else:
            test_results["google_drive_access"] = f"✗ Status: {response.status_code}"
            print(f"[ERROR] Google test başarısız, status {response.status_code}")
    except Exception as e:
        test_results["google_drive_access"] = f"✗ Engellenmiş: {str(e)}"
        print(f"[ERROR] Google Drive engellenmiş: {e}")

    # Analyze results
    analysis = ""
    pc_can_connect = "internet_connectivity" in test_results and test_results["internet_connectivity"].startswith("✓")
    google_blocked = "google_drive_access" in test_results and test_results["google_drive_access"].startswith("✗")

    if pc_can_connect and google_blocked:
        analysis = "PC internete erişebilir ancak Google Drive engellenmiş. Bu corporate firewall/proxy sorunudur."
    elif not pc_can_connect:
        analysis = "PC hiç internete erişemez. Ağ bağlantısını kontrol edin."
    else:
        analysis = "Tüm bağlantılar OK - başka sorun olabilir."

    return {
        "timestamp": str(datetime.now()),
        "network_tests": test_results,
        "analysis": analysis,
        "troubleshooting": [
            "1. PC internete erişebilir mi test ediyorum",
            "2. Eğer erişebilir ancak Google Drive'a erişemezse:", "   - Corporate firewall/proxy engellemesi var",
            "   - IT departmanınızı başvurun",
            "   - Veya hızlı çözün",
            "3. Eğer hiç bağlanamazsa: Ağ kablosu/wifi'yi kontrol edin"
        ]
    }



@app.get("/api/status")
async def get_status():
    status = {
        "app": "Portable Etsy Order Manager",
        "mode": "test"  # hardcoded for now; could be derived from settings.json
    }
    return status

# ==================== ORDER EDIT ENDPOINTS ====================

@app.put("/api/orders/{transaction}/edit")
async def edit_order_fields(
    transaction: str,
    updates: dict,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Edit specific order fields like status, notes, etc."""
    global orders_cache

    is_admin = (current_user.role or "").lower() == "admin"

    # Find order in cache by transaction ID (try both 'transaction' and 'Transaction ID' fields)
    order_index = None
    for i, order in enumerate(orders_cache):
        order_transaction = str(order.get('transaction') or order.get('Transaction ID') or '')
        if order_transaction == str(transaction):
            order_index = i
            break

    manual_entry = None
    if order_index is None:
        manual_entry = find_manual_by_transaction(transaction)
        if not manual_entry:
            raise HTTPException(status_code=404, detail="Sipariş bulunamadı")

    # Update only provided fields
    updated_fields = []
    if order_index is not None:
        order = orders_cache[order_index]
    else:
        order = manual_entry

    # Field mapping - Frontend field isimlerini backend field isimlerine çevir
    field_mapping = {
        'Produce': 'Kesildi',
        'Ready': 'Hazır',
        'Shipped': 'Gönderildi',
        'Note': 'importantnote'
    }

    # Update each field from the request
    for frontend_field, value in updates.items():
        backend_field = field_mapping.get(frontend_field, frontend_field)
        target_field = backend_field if order_index is not None else frontend_field

        is_checkbox_field = backend_field in ['Kesildi', 'Hazır', 'Gönderildi'] or frontend_field in ['Produce', 'Ready', 'Shipped']
        if is_checkbox_field:
            if isinstance(value, str):
                normalized = value.strip().lower()
                requested_bool = normalized in ('true', '1', 'yes', 'y')
            else:
                requested_bool = bool(value)

            is_produce_field = backend_field in ['Kesildi', 'Produce'] or frontend_field in ['Produce', 'Kesildi']
            if is_produce_field and not is_admin:
                current_produce_value = normalize_flag_value(order.get('Produce') or order.get('Kesildi'))
                if current_produce_value and not requested_bool:
                    raise HTTPException(status_code=403, detail="Produce durumunu yalnızca admin kullanıcılar FALSE'a çekebilir.")

            updated_value = 'TRUE' if requested_bool else 'FALSE'
            order[target_field] = updated_value
        else:
            order[target_field] = str(value)

        # Also update the UI fields for consistency
        if target_field in ['Kesildi', 'Produce']:
            order['Produce'] = order[target_field]
        elif target_field in ['Hazır', 'Ready']:
            order['Ready'] = order[target_field]
        elif target_field in ['Gönderildi', 'Shipped']:
            order['Shipped'] = order[target_field]
        elif target_field in ['importantnote', 'Note']:
            order['Note'] = order[target_field]

        updated_fields.append(backend_field)
        print(f"[EDIT] Updated {target_field} = {order[target_field]} for transaction {transaction}")

    if order_index is not None:
        save_cache()
    else:
        manual_entry["_sortKey"] = determine_sort_key(manual_entry)
        save_manual_orders()
    update_order_completion_tracking(order, transaction)

    return {
        "success": True,
        "message": f"Transaction {transaction} güncellendi",
        "updated_fields": updated_fields,
        "timestamp": str(datetime.now())
    }

# ==================== TASK MANAGEMENT ENDPOINTS ====================

@app.post("/api/tasks", response_model=TaskResponse)
async def create_task(
    task: TaskCreate,
    rate_guard: None = Depends(rate_limit_dependency),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Create a new task and notify assigned user if assigned"""

    # Parse deadline if provided
    deadline = None
    if task.deadline:
        try:
            deadline = datetime.fromisoformat(task.deadline.replace('Z', '+00:00'))
        except Exception:
            raise HTTPException(status_code=400, detail="Geçersiz deadline formatı")

    # Normalize assignees (support multiple users)
    assignees: List[int] = []
    if task.assigned_to_many:
        assignees = [int(a) for a in task.assigned_to_many if a is not None]
    elif task.assigned_to is not None:
        assignees = [int(task.assigned_to)]

    # Create task
    db_task = Task(
        title=task.title,
        description=task.description,
        status=task.status or "todo",
        priority=task.priority,
        deadline=deadline,
        created_by=current_user.id,
        attachment=_dump_attachment_blob(task.attachment)
    )

    set_task_assignees(db_task, assignees)

    db.add(db_task)
    db.commit()
    db.refresh(db_task)

    # Create notifications for assigned users (excluding creator)
    for user_id in assignees:
        if user_id and user_id != current_user.id:
            notification = Notification(
                user_id=user_id,
                title="Yeni görev atandı",
                message=f"'{task.title}' görevi size atandı",
                type="task_assigned",
                related_id=db_task.id
            )
            db.add(notification)
    if assignees:
        db.commit()

    task_assignees = get_task_assignees(db_task)
    task_response = TaskResponse(
        id=db_task.id,
        title=db_task.title,
        description=db_task.description,
        status=db_task.status,
        assigned_to=task_assignees[0] if task_assignees else None,
        assigned_to_many=task_assignees or None,
        priority=db_task.priority,
        start_date=db_task.start_date.isoformat() if db_task.start_date else None,
        deadline=db_task.deadline.isoformat() if db_task.deadline else None,
        attachment=_parse_attachment_blob(db_task.attachment),
        created_by=db_task.created_by,
        created_at=db_task.created_at.isoformat(),
        updated_at=db_task.updated_at.isoformat()
    )
    return task_response

@app.get("/api/tasks", response_model=List[TaskResponse])
async def get_tasks(
    rate_guard: None = Depends(rate_limit_dependency),
    db: Session = Depends(get_db),
    scope: Literal["global", "personal"] = Query("global"),
    current_user: Optional[User] = Depends(get_optional_user),
):
    """Get tasks, optionally limited to the requesting user"""
    tasks = db.query(Task).order_by(Task.created_at.desc()).all()
    if scope == "personal":
        if not current_user:
            raise HTTPException(status_code=401, detail="Kişisel görevleri görüntülemek için giriş yapmalısınız")
        tasks = [task for task in tasks if _is_task_personal(task, current_user.id)]
    return [
        TaskResponse(
            id=task.id,
            title=task.title,
            description=task.description,
            status=task.status,
            assigned_to=(assignees[0] if assignees else None),
            assigned_to_many=assignees or None,
            priority=task.priority,
            start_date=task.start_date.isoformat() if task.start_date else None,
            deadline=task.deadline.isoformat() if task.deadline else None,
            attachment=_parse_attachment_blob(task.attachment),
            created_by=task.created_by,
            created_at=task.created_at.isoformat(),
            updated_at=task.updated_at.isoformat()
        )
        for task in tasks
        for assignees in [get_task_assignees(task)]
    ]

@app.put("/api/tasks/{task_id}")
async def update_task(
    task_id: int,
    updates: dict,
    rate_guard: None = Depends(rate_limit_dependency),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """Update task status or assignments"""
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Görev bulunamadı")
    previous_assignees = get_task_assignees(task)
    previous_description = task.description

    # Update allowed fields
    allowed_fields = ['status', 'priority', 'description', 'title']
    for field in allowed_fields:
        if field in updates:
            if field == 'title':
                new_title = (updates[field] or '').strip()
                if not new_title:
                    raise HTTPException(status_code=400, detail="Görev başlığı boş olamaz")
                setattr(task, field, new_title)
            else:
                setattr(task, field, updates[field])

    if 'deadline' in updates:
        deadline_value = updates['deadline']
        if not deadline_value:
            task.deadline = None
        else:
            try:
                parsed_deadline = datetime.fromisoformat(str(deadline_value).replace('Z', '+00:00'))
            except Exception:
                raise HTTPException(status_code=400, detail="Geçersiz deadline formatı")
            task.deadline = parsed_deadline

    if 'attachment' in updates:
        attachment_payload = updates['attachment']
        if not attachment_payload:
            task.attachment = None
        else:
            if isinstance(attachment_payload, str):
                try:
                    attachment_payload = json.loads(attachment_payload)
                except Exception:
                    attachment_payload = None
            task.attachment = _dump_attachment_blob(attachment_payload if isinstance(attachment_payload, dict) else None)

    # Handle assignee updates (single or multiple)
    new_assignees: Optional[List[int]] = None
    if 'assigned_to_many' in updates:
        raw = updates['assigned_to_many']
        if isinstance(raw, list):
            new_assignees = [int(a) for a in raw if a is not None]
    elif 'assigned_to' in updates:
        value = updates['assigned_to']
        if value:
            new_assignees = [int(value)]
        else:
            new_assignees = []

    if new_assignees is not None:
        set_task_assignees(task, new_assignees)

    description_changed = 'description' in updates and updates['description'] != previous_description

    task.updated_at = datetime.now()

    db.commit()
    db.refresh(task)

    # After commit, compute current assignees
    current_assignees = set(get_task_assignees(task))
    previous_assignees_set = set(previous_assignees)

    # Notify newly assigned users
    newly_assigned = [
        user_id for user_id in current_assignees
        if user_id not in previous_assignees_set and user_id != current_user.id
    ]
    for user_id in newly_assigned:
        notification = Notification(
            user_id=user_id,
            title="Yeni görev ataması",
            message=f"'{task.title}' görevi size atandı",
            type="task_assigned",
            related_id=task.id
        )
        db.add(notification)

    # Notify assignees when description (cevap) changes
    if description_changed and current_assignees:
        for user_id in current_assignees:
            if user_id != current_user.id:
                notification = Notification(
                    user_id=user_id,
                    title="Göreve yeni yanıt",
                    message=f"'{task.title}' görevi için yeni bir yanıt eklendi",
                    type="task_comment",
                    related_id=task.id
                )
                db.add(notification)

    if newly_assigned or (description_changed and current_assignees):
        db.commit()

    updated_response = TaskResponse(
        id=task.id,
        title=task.title,
        description=task.description,
        status=task.status,
        assigned_to=(next(iter(current_assignees)) if current_assignees else None),
        assigned_to_many=list(current_assignees) or None,
        priority=task.priority or "",
        start_date=task.start_date.isoformat() if task.start_date else None,
        deadline=task.deadline.isoformat() if task.deadline else None,
        attachment=_parse_attachment_blob(task.attachment),
        created_by=task.created_by,
        created_at=task.created_at.isoformat(),
        updated_at=task.updated_at.isoformat()
    )

    return {"message": f"Görev {task_id} güncellendi"}


@app.delete("/api/tasks/{task_id}")
async def delete_task(
    task_id: int,
    rate_guard: None = Depends(rate_limit_dependency),
    db: Session = Depends(get_db),
):
    """Delete a task permanently"""
    task = db.query(Task).filter(Task.id == task_id).first()
    if not task:
        raise HTTPException(status_code=404, detail="Görev bulunamadı")

    db.delete(task)
    db.commit()

    return {"message": f"Görev {task_id} silindi"}

# ==================== SHOPPING LIST ENDPOINTS ====================

@app.get("/api/shopping-list", response_model=List[ShoppingItemResponse])
def list_shopping_items(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
    scope: Literal["global", "personal"] = Query("global"),
):
    items = (
        db.query(ShoppingItem)
        .order_by(ShoppingItem.planned_date.asc(), ShoppingItem.id.asc())
        .all()
    )
    if scope == "personal":
        items = [item for item in items if _shopping_item_visible_to_user(item, current_user)]
    return [serialize_shopping_item(item) for item in items]

@app.post("/api/shopping-list", response_model=ShoppingItemResponse)
def create_shopping_item(
    payload: ShoppingItemCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    item_name = payload.item.strip()
    if not item_name:
        raise HTTPException(status_code=400, detail="Shopping item adı boş olamaz")

    shopping_item = ShoppingItem(
        planned_date=payload.date,
        assigned_to=normalize_optional_text(payload.assigned),
        item_name=item_name,
        amount=normalize_optional_text(payload.amount),
        note=normalize_optional_text(payload.note),
        is_done=payload.done,
        attachment=_dump_attachment_blob(payload.attachment),
        created_by=current_user.id,
        updated_by=current_user.id,
    )
    db.add(shopping_item)
    db.commit()
    db.refresh(shopping_item)

    record_activity(
        db,
        actor=current_user,
        action="shopping_item_created",
        description=f"Shopping kalemi eklendi: {shopping_item.item_name}",
        entity_type="shopping_item",
        entity_id=shopping_item.id,
        metadata={"date": shopping_item.planned_date.isoformat()},
    )

    return serialize_shopping_item(shopping_item)

@app.patch("/api/shopping-list/{item_id}", response_model=ShoppingItemResponse)
def update_shopping_item(
    item_id: int,
    payload: ShoppingItemUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    shopping_item = db.query(ShoppingItem).filter(ShoppingItem.id == item_id).first()
    if not shopping_item:
        raise HTTPException(status_code=404, detail="Shopping kaydı bulunamadı")

    if payload.date is not None:
        shopping_item.planned_date = payload.date
    if payload.assigned is not None:
        shopping_item.assigned_to = normalize_optional_text(payload.assigned)
    if payload.item is not None:
        normalized_name = payload.item.strip()
        if not normalized_name:
            raise HTTPException(status_code=400, detail="Shopping item adı boş olamaz")
        shopping_item.item_name = normalized_name
    if payload.amount is not None:
        shopping_item.amount = normalize_optional_text(payload.amount)
    if payload.note is not None:
        shopping_item.note = payload.note.strip()
    if payload.done is not None:
        shopping_item.is_done = payload.done
    if payload.attachment is not None:
        if not payload.attachment:
            shopping_item.attachment = None
        else:
            shopping_item.attachment = _dump_attachment_blob(payload.attachment)

    shopping_item.updated_by = current_user.id
    db.commit()
    db.refresh(shopping_item)

    record_activity(
        db,
        actor=current_user,
        action="shopping_item_updated",
        description=f"Shopping kalemi güncellendi: {shopping_item.item_name}",
        entity_type="shopping_item",
        entity_id=shopping_item.id,
        metadata={"done": shopping_item.is_done},
    )

    return serialize_shopping_item(shopping_item)

# ==================== FINANCE ENDPOINTS ====================

def ensure_admin(current_user: User):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Bu işlem yalnızca admin kullanıcılar içindir")

@app.get("/api/finance")
def list_finance_records(
    limit: int = Query(default=500, ge=1, le=2000),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    ensure_admin(current_user)
    records = (
        db.query(FinanceRecord)
        .order_by(FinanceRecord.created_at.desc())
        .limit(limit)
        .all()
    )
    columns = (
        finance_columns_cache[:] if finance_columns_cache else
        (list(json.loads(records[0].row_data).keys()) if records else [])
    )
    return {
        "columns": columns,
        "records": [serialize_finance_record(record) for record in records],
        "last_sync": last_finance_sync.isoformat() if last_finance_sync else None
    }

@app.post("/api/finance/sync")
def trigger_finance_sync(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    ensure_admin(current_user)
    result = synchronize_finance_records(db)
    return {
        "message": "Finance sheet senkronize edildi",
        "added": result.get("added", 0),
        "total": result.get("total", 0),
        "columns": result.get("columns", []),
        "last_sync": last_finance_sync.isoformat() if last_finance_sync else None
    }

@app.put("/api/finance/{record_id}")
def update_finance_record(
    record_id: int,
    payload: FinanceUpdatePayload,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    ensure_admin(current_user)
    record = (
        db.query(FinanceRecord)
        .filter(FinanceRecord.id == record_id)
        .first()
    )
    if not record:
        raise HTTPException(status_code=404, detail="Finance kaydı bulunamadı")

    allowed = set(FINANCE_EXTRA_COLUMNS)
    normalized_updates: Dict[str, str] = {}
    for key, value in (payload.updates or {}).items():
        if key in allowed:
            normalized_updates[key] = (value or "").strip()

    if not normalized_updates:
        raise HTTPException(status_code=400, detail="Geçerli bir alan güncellenmedi")

    try:
        row_payload = json.loads(record.row_data)
    except Exception:
        row_payload = {}

    changed = False
    for key, value in normalized_updates.items():
        if row_payload.get(key, "") != value:
            row_payload[key] = value
            changed = True

    if not changed:
        return serialize_finance_record(record)

    record.row_data = json.dumps(row_payload, ensure_ascii=False)
    db.add(record)
    db.commit()
    db.refresh(record)
    return serialize_finance_record(record)


@app.get("/api/returns")
def list_return_records(
    limit: int = Query(default=200, ge=1, le=1000),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    records = (
        db.query(ReturnRecord)
        .order_by(ReturnRecord.refund_date.desc(), ReturnRecord.created_at.desc())
        .limit(limit)
        .all()
    )
    global returns_last_sync
    if returns_last_sync is None and records:
        returns_last_sync = max(
            (record.updated_at or record.created_at or datetime.utcnow()) for record in records
        )
    return {
        "records": [serialize_return_record(record) for record in records],
        "last_sync": returns_last_sync.isoformat() if returns_last_sync else None,
    }


@app.post("/api/returns/sync")
def trigger_return_sync(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if current_user.role != "admin":
        raise HTTPException(status_code=403, detail="Only admins can sync return records")
    result = synchronize_return_records(db)
    return {
        "message": "Return sheet senkronize edildi",
        "added": result.get("added", 0),
        "total": result.get("total", 0),
        "last_sync": returns_last_sync.isoformat() if returns_last_sync else None,
    }


@app.post("/api/returns/sync-cron")
def cron_return_sync(
    request: Request,
    db: Session = Depends(get_db),
):
    ensure_local_cron_access(request)
    result = synchronize_return_records(db)
    return {
        "message": "Return sheet cron sync completed",
        "added": result.get("added", 0),
        "total": result.get("total", 0),
        "last_sync": returns_last_sync.isoformat() if returns_last_sync else None,
    }


@app.get("/api/precious-prices")
def get_precious_price_snapshot(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    snapshot = (
        db.query(PreciousPriceSnapshot)
        .order_by(PreciousPriceSnapshot.fetched_at.desc())
        .first()
    )
    if not snapshot:
        raise HTTPException(status_code=404, detail="Fiyat bilgisi bulunamadı")
    return serialize_precious_snapshot(snapshot)


@app.post("/api/precious-prices/sync")
def trigger_precious_price_sync(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    ensure_admin(current_user)
    snapshot = synchronize_precious_price(db)
    if not snapshot:
        raise HTTPException(status_code=500, detail="Fiyat alınamadı")
    return serialize_precious_snapshot(snapshot)

# ==================== WEEKLY PLANNER ENDPOINTS ====================

def _resolve_assigned_user(db: Session, identifier: Optional[Union[int, str]]) -> Tuple[Optional[int], Optional[str]]:
    if identifier is None:
        return None, None
    user = None
    if isinstance(identifier, int):
        user = db.query(User).filter(User.id == identifier).first()
    elif isinstance(identifier, str):
        normalized = identifier.strip()
        if normalized.lower() == 'null' or normalized == '':
            return None, None
        if normalized.startswith('@'):
            normalized = normalized[1:]
        lower_value = normalized.lower()
        user = (
            db.query(User)
            .filter(func.lower(User.username) == lower_value)
            .first()
        )
        if not user:
            user = (
                db.query(User)
                .filter(func.lower(User.full_name).like(f"%{lower_value}%"))
                .first()
            )
    if not user:
        raise HTTPException(status_code=404, detail="Assigned user not found")
    return user.id, (user.full_name or user.username or "User")

def _get_week_bounds(week_start: Optional[str]) -> Tuple[datetime, datetime]:
    if week_start:
        start = parse_iso_datetime(week_start)
    else:
        start = datetime.utcnow()
    start = start.replace(hour=0, minute=0, second=0, microsecond=0)
    start -= timedelta(days=start.weekday())
    end = start + timedelta(days=7)
    return start, end

def _weekly_entry_visible_to_user(entry: WeeklyPlannerEntry, user_id: int) -> bool:
    return bool(entry.created_by == user_id or (entry.assigned_to and entry.assigned_to == user_id))

@app.get("/api/weekly-planner", response_model=List[WeeklyPlannerEntryResponse])
def list_weekly_entries(
    week_start: Optional[str] = None,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
    scope: Literal["global", "personal"] = Query("global"),
):
    start, end = _get_week_bounds(week_start)
    entries = (
        db.query(WeeklyPlannerEntry)
        .filter(
            WeeklyPlannerEntry.date >= start,
            WeeklyPlannerEntry.date < end
        )
        .order_by(WeeklyPlannerEntry.date.asc())
        .all()
    )
    if scope == "personal":
        entries = [entry for entry in entries if _weekly_entry_visible_to_user(entry, current_user.id)]
    return [serialize_weekly_entry(entry) for entry in entries]

@app.post("/api/weekly-planner", response_model=WeeklyPlannerEntryResponse)
def create_weekly_entry(
    payload: WeeklyPlannerEntryCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    entry_date = parse_iso_datetime(payload.date)
    assigned_identifier = payload.assigned_to if payload.assigned_to is not None else payload.assigned_username
    assigned_to, assigned_name = _resolve_assigned_user(db, assigned_identifier)

    entry = WeeklyPlannerEntry(
        text=payload.text or "",
        date=entry_date,
        assigned_to=assigned_to,
        assigned_name=assigned_name,
        created_by=current_user.id,
    )
    db.add(entry)
    db.commit()
    db.refresh(entry)

    if entry.assigned_to and entry.assigned_to != current_user.id:
        notification = Notification(
            user_id=entry.assigned_to,
            title="Weekly Planner görevi",
            message=f"{entry.assigned_name or 'Bir kullanıcı'} sizin için haftalık plana görev ekledi",
            type="weekly_entry_assigned",
            related_id=entry.id,
        )
        db.add(notification)
        db.commit()

    record_activity(
        db,
        actor=current_user,
        action="weekly_note_created",
        description=f"Weekly entry created for {entry.date.date()}",
        entity_type="weekly_entry",
        entity_id=entry.id,
        metadata={"text": entry.text},
    )

    return serialize_weekly_entry(entry)

@app.put("/api/weekly-planner/{entry_id}", response_model=WeeklyPlannerEntryResponse)
def update_weekly_entry(
    entry_id: int,
    payload: WeeklyPlannerEntryUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    entry = db.query(WeeklyPlannerEntry).filter(WeeklyPlannerEntry.id == entry_id).first()
    if not entry:
        raise HTTPException(status_code=404, detail="Weekly entry not found")

    if entry.created_by != current_user.id and current_user.role != "admin":
        raise HTTPException(status_code=403, detail="You cannot edit this entry")

    changed_fields: Dict[str, Any] = {}
    previous_assigned = entry.assigned_to

    if payload.text is not None:
        entry.text = payload.text
        changed_fields["text"] = payload.text

    assigned_identifier = payload.assigned_to if payload.assigned_to is not None else payload.assigned_username
    if assigned_identifier is not None:
        assigned_to, assigned_name = _resolve_assigned_user(db, assigned_identifier)
        entry.assigned_to = assigned_to
        entry.assigned_name = assigned_name
        changed_fields["assigned_to"] = assigned_to

    entry.updated_at = datetime.utcnow()
    db.add(entry)
    db.commit()
    db.refresh(entry)

    if changed_fields:
        record_activity(
            db,
            actor=current_user,
            action="weekly_note_updated",
            description=f"Weekly entry {entry_id} updated",
            entity_type="weekly_entry",
            entity_id=entry.id,
            metadata=changed_fields,
        )

    if (
        entry.assigned_to
        and entry.assigned_to != previous_assigned
        and entry.assigned_to != current_user.id
    ):
        notification = Notification(
            user_id=entry.assigned_to,
            title="Weekly Planner görevi",
            message=f"{entry.assigned_name or 'Bir kullanıcı'} size yeni bir weekly planner girdisi atadı",
            type="weekly_entry_assigned",
            related_id=entry.id,
        )
        db.add(notification)
        db.commit()

    return serialize_weekly_entry(entry)

@app.delete("/api/weekly-planner/{entry_id}")
def delete_weekly_entry(
    entry_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    entry = db.query(WeeklyPlannerEntry).filter(WeeklyPlannerEntry.id == entry_id).first()
    if not entry:
        raise HTTPException(status_code=404, detail="Weekly entry not found")

    if entry.created_by != current_user.id and current_user.role != "admin":
        raise HTTPException(status_code=403, detail="You cannot delete this entry")

    db.delete(entry)
    db.commit()

    record_activity(
        db,
        actor=current_user,
        action="weekly_note_deleted",
        description=f"Weekly entry {entry_id} deleted",
        entity_type="weekly_entry",
        entity_id=entry_id,
    )

    return {"detail": "Entry deleted"}

@app.delete("/api/shopping-list/{item_id}")
def delete_shopping_item(
    item_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    shopping_item = db.query(ShoppingItem).filter(ShoppingItem.id == item_id).first()
    if not shopping_item:
        raise HTTPException(status_code=404, detail="Shopping kaydı bulunamadı")

    db.delete(shopping_item)
    db.commit()

    record_activity(
        db,
        actor=current_user,
        action="shopping_item_deleted",
        description=f"Shopping kalemi silindi: {shopping_item.item_name}",
        entity_type="shopping_item",
        entity_id=item_id,
    )

    return {"detail": "Shopping item deleted"}

# ==================== CALENDAR EVENTS ENDPOINTS ====================

@app.post("/api/calendar/events", response_model=CalendarEventResponse)
async def create_calendar_event(event: CalendarEventCreate, db: Session = Depends(get_db)):
    """Create a new calendar event/note and notify assigned user if assigned"""
    # Get current user (for now, simplified - get first user)
    current_user = db.query(User).first()
    if not current_user:
        raise HTTPException(status_code=401, detail="Kullanıcı bulunamadı")

    # Parse event date
    try:
        event_date = datetime.fromisoformat(event.event_date.replace('Z', '+00:00'))
    except Exception:
        raise HTTPException(status_code=400, detail="Geçersiz tarih formatı")

    # Create event
    db_event = CalendarEvent(
        title=event.title,
        description=event.description,
        event_date=event_date,
        assigned_to=event.assigned_to,
        type=event.type,
        priority=event.priority,
        recurrence=event.recurrence,
        reminder=event.reminder,
        color=event.color,
        created_by=current_user.id
    )

    db.add(db_event)
    db.commit()
    db.refresh(db_event)

    # Create notification if event is assigned to another user
    if event.assigned_to and event.assigned_to != current_user.id:
        notification = Notification(
            user_id=event.assigned_to,
            title="Yeni etkinlik eklendi",
            message=f"'{event.title}' etkinliği takviminize eklendi",
            type="event_assigned",
            related_id=db_event.id
        )
        db.add(notification)
        db.commit()

    return CalendarEventResponse(
        id=db_event.id,
        title=db_event.title,
        description=db_event.description,
        event_date=db_event.event_date.isoformat(),
        assigned_to=db_event.assigned_to,
        type=db_event.type,
        priority=db_event.priority,
        recurrence=db_event.recurrence,
        reminder=db_event.reminder,
        color=db_event.color,
        created_by=db_event.created_by,
        created_at=db_event.created_at.isoformat(),
        updated_at=db_event.updated_at.isoformat()
    )

@app.get("/api/calendar/events", response_model=List[CalendarEventResponse])
async def get_calendar_events(db: Session = Depends(get_db)):
    """Get all calendar events"""
    events = db.query(CalendarEvent).order_by(CalendarEvent.event_date.desc()).all()
    return [
        CalendarEventResponse(
            id=event.id,
            title=event.title,
            description=event.description,
            event_date=event.event_date.isoformat(),
            assigned_to=event.assigned_to,
            type=event.type,
            priority=event.priority,
            recurrence=event.recurrence,
            reminder=event.reminder,
            color=event.color,
            created_by=event.created_by,
            created_at=event.created_at.isoformat(),
            updated_at=event.updated_at.isoformat()
        )
        for event in events
    ]

# ==================== CHAT ENDPOINTS ====================

from pathlib import Path
import json

# Chat data persistence
CHAT_DATA_DIR = Path(__file__).parent / "data"
CHAT_FILE = CHAT_DATA_DIR / "chat_messages.json"

# Ensure data directory exists
CHAT_DATA_DIR.mkdir(exist_ok=True)

def load_chat_messages():
    """Load chat messages from JSON file"""
    try:
        if CHAT_FILE.exists():
            with open(CHAT_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        return []
    except Exception as e:
        print(f"Error loading chat messages: {e}")
        return []

def save_chat_messages(messages):
    """Save chat messages to JSON file"""
    try:
        with open(CHAT_FILE, "w", encoding="utf-8") as f:
            json.dump(messages, f, indent=2, ensure_ascii=False, default=str)
        return True
    except Exception as e:
        print(f"Error saving chat messages: {e}")
        return False

# Initialize chat messages from file
chat_messages = load_chat_messages()

def _parse_attachment_blob(value: Any) -> Optional[Dict[str, Any]]:
    if not value:
        return None
    if isinstance(value, dict):
        return value
    if isinstance(value, str):
        try:
            return json.loads(value)
        except Exception:
            return None
    return None

def _dump_attachment_blob(value: Optional[Dict[str, Any]]) -> Optional[str]:
    if not value:
        return None
    try:
        return json.dumps(value)
    except Exception:
        return None

def _serialize_chat_message(entry: dict) -> Dict[str, Any]:
    return {
        "id": entry.get("id"),
        "sender": entry.get("sender"),
        "sender_id": entry.get("sender_id"),
        "recipient_id": entry.get("recipient_id"),
        "text": entry.get("text"),
        "time": entry.get("time"),
        "is_direct": bool(entry.get("recipient_id")),
        "isOwn": entry.get("isOwn", False),
        "image_url": entry.get("image_url"),
        "attachment_type": entry.get("attachment_type"),
        "attachment_name": entry.get("attachment_name"),
    }


@app.post("/api/chat/messages")
async def send_chat_message(
    message: dict,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Add a new chat message (general & direct)"""
    global chat_messages
    recipient_id = message.get("recipient_id")
    msg = {
        "id": len(chat_messages),
        "sender": current_user.username,
        "sender_id": current_user.id,
        "recipient_id": recipient_id,
        "text": message.get("text", ""),
        "time": message.get("time", ""),
        "isOwn": True
    }
    chat_messages.append(msg)
    save_chat_messages(chat_messages)

    if recipient_id and recipient_id != current_user.id:
        notification = Notification(
            user_id=recipient_id,
            title="Yeni mesaj",
            message=f"{current_user.full_name or current_user.username} size mesaj gönderdi",
            type="chat_message",
            related_id=msg["id"],
            data=json.dumps({
                "sender_id": current_user.id,
                "sender": current_user.username,
                "recipient_id": recipient_id
            })
        )
        db.add(notification)
        db.commit()

    return {"success": True, "message_id": msg["id"]}


@app.get("/api/chat/messages")
async def get_chat_messages(
    recipient_id: Optional[int] = Query(None),
    limit: Optional[int] = Query(None, ge=1, le=500),
    offset: int = Query(0, ge=0),
    current_user: User = Depends(get_current_user)
):
    """Get chat messages (general or direct)"""
    global chat_messages
    chat_messages = load_chat_messages()

    def matches(entry):
        if recipient_id is None:
            return entry.get("recipient_id") is None
        sender_matches = entry.get("sender_id") == current_user.id and entry.get("recipient_id") == recipient_id
        recipient_matches = entry.get("recipient_id") == current_user.id and entry.get("sender_id") == recipient_id
        return sender_matches or recipient_matches

    filtered = [msg for msg in chat_messages if matches(msg)]
    filtered.sort(key=lambda entry: entry.get("id") or 0)

    if limit is not None:
        total = len(filtered)
        if total == 0:
            return []
        effective_limit = max(1, min(limit, 500))
        effective_offset = max(0, min(offset, total))
        start_index = max(total - effective_offset - effective_limit, 0)
        end_index = max(total - effective_offset, 0)
        sliced = filtered[start_index:end_index]
    else:
        sliced = filtered

    return [_serialize_chat_message(entry) for entry in sliced]

@app.delete("/api/chat/messages")
async def clear_chat_messages():
    """Clear all chat messages"""
    global chat_messages
    chat_messages.clear()
    # Save empty list to file
    save_chat_messages(chat_messages)
    return {"success": True}

@app.post("/api/chat/upload-image")
async def upload_chat_image(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user)
):
    """Upload image for chat messages"""
    global chat_messages

    # Validate file type
    if not file.content_type in ["image/jpeg", "image/jpg", "image/png"]:
        raise HTTPException(status_code=400, detail="Only JPEG, JPG and PNG files are allowed")

    # Generate unique filename
    file_extension = Path(file.filename or "image.jpg").suffix.lower()
    if not file_extension:
        file_extension = ".jpg"

    file_hash = hashlib.md5(f"{datetime.now().isoformat()}{file.filename}".encode()).hexdigest()
    filename = f"{file_hash}{file_extension}"

    # Save file to chat images directory
    file_path = chat_images_dir / filename

    try:
        # Read file content
        file_content = await file.read()
        if len(file_content) > 10 * 1024 * 1024:  # 10MB limit
            raise HTTPException(status_code=400, detail="File size too large (max 10MB)")

        # Write to file
        with open(file_path, "wb") as buffer:
            buffer.write(file_content)

        image_url = f"/chat-images/{filename}"

        # Create image message with reference to uploader
        message_time = datetime.now().strftime('%H:%M')
        image_message = {
            "id": len(chat_messages),
            "sender": current_user.username,
            "sender_id": current_user.id,
            "text": f"{file.filename or 'uploaded image'}",
            "time": message_time,
            "isOwn": True,
            "image_url": image_url,
            "attachment_type": file.content_type,
            "attachment_name": file.filename or filename,
        }

        chat_messages.append(image_message)
        save_chat_messages(chat_messages)

        return {
            "success": True,
            "image_url": image_url,
            "message_id": image_message["id"]
        }

    except Exception as e:
        print(f"Error uploading image: {e}")
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")


@app.post("/api/uploads/image")
async def upload_generic_image(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user)
):
    """General purpose uploader for attachments (tasks, shopping, etc.)"""
    allowed_types = {
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/svg+xml",
        "application/pdf",
        "application/zip",
        "application/x-zip-compressed",
        "application/x-rar-compressed",
        "application/vnd.rar",
        "application/octet-stream",
    }
    if file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Supported dosya tipleri: JPG, PNG, SVG, PDF, ZIP/RAR")

    file_extension = Path(file.filename or "upload.jpg").suffix.lower() or ".jpg"
    file_hash = hashlib.md5(f"{datetime.utcnow().isoformat()}{file.filename}".encode()).hexdigest()
    filename = f"{file_hash}{file_extension}"
    file_path = attachments_dir / filename

    try:
        file_content = await file.read()
        if len(file_content) > 8 * 1024 * 1024:
            raise HTTPException(status_code=400, detail="File size too large (max 8MB)")
        with open(file_path, "wb") as buffer:
            buffer.write(file_content)
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Upload failed: {exc}") from exc

    public_url = f"/attachments/{filename}"
    payload = {
        "name": file.filename or filename,
        "type": file.content_type,
        "size": len(file_content),
        "url": public_url,
        "thumbnail_url": public_url,
        "uploaded_at": datetime.utcnow().isoformat(),
    }
    return {"attachment": payload}

# ==================== CALENDAR NOTES ENDPOINTS ====================

# Calendar notes data persistence
CALENDAR_NOTES_DIR = Path(__file__).parent / "data"
CALENDAR_NOTES_FILE = CALENDAR_NOTES_DIR / "calendar_notes.json"

def _normalize_calendar_notes(raw: Any) -> Dict[str, Dict[str, Any]]:
    normalized = {"global": {}, "users": {}}
    if isinstance(raw, dict):
        if "global" in raw and isinstance(raw["global"], dict) and "users" in raw and isinstance(raw["users"], dict):
            normalized["global"] = raw["global"] or {}
            normalized["users"] = {
                str(key): value or {}
                for key, value in raw["users"].items()
                if isinstance(key, (str, int)) and isinstance(value, dict)
            }
        else:
            normalized["global"] = {k: v for k, v in raw.items() if isinstance(k, str)}
    return normalized

# Ensure data directory exists
CALENDAR_NOTES_DIR.mkdir(exist_ok=True)

def load_calendar_notes():
    """Load calendar notes from JSON file"""
    try:
        if CALENDAR_NOTES_FILE.exists():
            with open(CALENDAR_NOTES_FILE, "r", encoding="utf-8") as f:
                return _normalize_calendar_notes(json.load(f))
        return _normalize_calendar_notes({})
    except Exception as e:
        print(f"Error loading calendar notes: {e}")
        return _normalize_calendar_notes({})

def save_calendar_notes(notes):
    """Save calendar notes to JSON file"""
    try:
        normalized = _normalize_calendar_notes(notes)
        with open(CALENDAR_NOTES_FILE, "w", encoding="utf-8") as f:
            json.dump(normalized, f, indent=2, ensure_ascii=False, default=str)
        return True
    except Exception as e:
        print(f"Error saving calendar notes: {e}")
        return False

# Initialize calendar notes from file
calendar_notes = load_calendar_notes()

@app.get("/api/calendar/notes")
async def get_calendar_notes(
    scope: Literal["global", "personal"] = Query("global"),
    current_user: Optional[User] = Depends(get_optional_user),
):
    """Get calendar notes according to the requested scope"""
    global calendar_notes
    calendar_notes = load_calendar_notes()
    if scope == "personal":
        if not current_user:
            raise HTTPException(status_code=401, detail="Kişisel notları görüntülemek için giriş yapmalısınız")
        return calendar_notes["users"].get(str(current_user.id), {})
    return calendar_notes["global"]

@app.post("/api/calendar/notes")
async def save_calendar_note(
    note_data: dict,
    scope: Literal["global", "personal"] = Query("global"),
    current_user: Optional[User] = Depends(get_optional_user),
):
    """Save a calendar note for a specific date"""
    global calendar_notes

    date_key = note_data.get("date")
    note = note_data.get("note", {})

    if date_key:
        if scope == "personal":
            if not current_user:
                raise HTTPException(status_code=401, detail="Kişisel notları düzenlemek için giriş yapmalısınız")
            user_key = str(current_user.id)
            calendar_notes.setdefault("users", {})
            user_notes = calendar_notes["users"].setdefault(user_key, {})
            user_notes[date_key] = note
        else:
            calendar_notes.setdefault("global", {})
            calendar_notes["global"][date_key] = note
        # Save to file
        if save_calendar_notes(calendar_notes):
            return {"success": True, "message": f"Note saved for {date_key}"}
        else:
            raise HTTPException(status_code=500, detail="Failed to save note")
    else:
        raise HTTPException(status_code=400, detail="Date is required")

# ==================== ACTIVITY FEED ENDPOINTS ====================

@app.get("/api/activity-feed", response_model=List[ActivityEntryResponse])
def get_activity_feed(
    limit: int = 30,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    safe_limit = max(1, min(limit, 100))
    entries = (
        db.query(ActivityEntry)
        .order_by(ActivityEntry.created_at.desc())
        .limit(safe_limit)
        .all()
    )
    return [serialize_activity_entry(entry) for entry in entries]

# ==================== CLIENT LOG INGEST ====================

@app.post("/api/client-logs", status_code=204)
async def ingest_client_logs(payload: ClientLogPayload, request: Request):
    """Store client-side error logs for troubleshooting."""
    log_entry = payload.dict()
    log_entry["timestamp"] = datetime.utcnow().isoformat()
    if request.client:
        log_entry["ip"] = request.client.host

    try:
        with CLIENT_LOG_FILE.open("a", encoding="utf-8") as fh:
            fh.write(json.dumps(log_entry, ensure_ascii=False) + "\n")
    except Exception as exc:
        logger.warning(f"Failed to persist client log: {exc}")
        raise HTTPException(status_code=500, detail="Log store unavailable")

    return Response(status_code=204)

# ==================== DASHBOARD NOTIFICATIONS ENDPOINTS ====================

@app.get("/api/notifications", response_model=List[NotificationResponse])
async def get_user_notifications(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Get notifications for current user (dashboard)"""

    notifications = db.query(Notification).filter(
        Notification.user_id == current_user.id
    ).order_by(Notification.created_at.desc()).limit(20).all()

    return [
        NotificationResponse(
            id=n.id,
            user_id=n.user_id,
            title=n.title,
            message=n.message,
            type=n.type,
            related_id=n.related_id,
            data=n.data,
            is_read=n.is_read,
            created_at=n.created_at.isoformat()
        )
        for n in notifications
    ]

@app.put("/api/notifications/{notification_id}/read")
async def mark_notification_read(
    notification_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Mark notification as read"""

    notification = db.query(Notification).filter(
        Notification.id == notification_id,
        Notification.user_id == current_user.id
    ).first()

    if not notification:
        raise HTTPException(status_code=404, detail="Bildirim bulunamadı")

    notification.is_read = True
    db.commit()

    return {"message": "Bildirim okundu olarak işaretlendi"}

@app.get("/api/dashboard/summary")
async def get_dashboard_summary(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Get dashboard summary for current user"""

    # Get counts
    unread_notifications = db.query(Notification).filter(
        Notification.user_id == current_user.id,
        Notification.is_read == False
    ).count()

    assigned_tasks = db.query(Task).filter(Task.assigned_to == current_user.id).count()
    pending_tasks = db.query(Task).filter(
        Task.assigned_to == current_user.id,
        Task.status == "todo"
    ).count()

    upcoming_events = db.query(CalendarEvent).filter(
        CalendarEvent.assigned_to == current_user.id,
        CalendarEvent.event_date >= datetime.now()
    ).count()

    return {
        "user": UserResponse.from_orm(current_user),
        "unread_notifications": unread_notifications,
        "assigned_tasks": assigned_tasks,
        "pending_tasks": pending_tasks,
        "upcoming_events": upcoming_events,
        "orders_count": len(orders_cache),
        "timestamp": str(datetime.now())
    }

# Ensure admin user exists
db = SessionLocal()
try:
    ensure_admin_user(db)
finally:
    db.close()

# DISABLED BACKGROUND SYNCS TO PREVENT BLOCKING STARTUP
# Startup event to force update cache - DISABLED!
# @app.on_event("startup")
# async def startup_force_update():
#     """Force update cache on startup for fresh data"""
#     try:
#         print("[STARTUP] 🔄 Force updating Google Sheets data...")
#         update_cache()
#         print("[STARTUP] ✅ Cache updated with fresh data")
#     except Exception as e:
#         print(f"[STARTUP ERROR] Cache update failed: {str(e)}")


# DISABLE ALL BACKGROUND SYNC SCHEDULERS FOR FAST STARTUP
# schedule_updates() # DISABLED
# schedule_quick_sync() # DISABLED
# schedule_finance_sync() # DISABLED
# schedule_returns_sync() # DISABLED
# schedule_precious_price_sync() # DISABLED

print("[STARTUP] 🚫 ALL BACKGROUND SYNC SCHEDULERS DISABLED FOR FAST STARTUP")
print("[STARTUP] 🔧 Background syncs can be triggered manually via API endpoints when needed")

@app.post("/api/orders/manual")
async def create_manual_order(
    payload: dict = Body(default={}),
    current_user: Optional[User] = Depends(get_optional_user)
):
    """Create a manual order entry that is shared across all users"""
    order = build_manual_order(payload or {})
    manual_orders[:] = [entry for entry in manual_orders if entry.get("__manualId") != order["__manualId"]]
    manual_orders.append(order)
    save_manual_orders()
    update_order_completion_tracking(order, order.get("transaction"))
    return order

@app.put("/api/orders/manual/{manual_id}")
async def update_manual_order(
    manual_id: str,
    updates: dict,
    current_user: User = Depends(get_current_user)
):
    order = find_manual_by_id(manual_id)
    if not order:
        raise HTTPException(status_code=404, detail="Manual order not found")

    previous_identifier = get_order_identifier(order)
    for field, value in updates.items():
        if field not in MANUAL_ORDER_FIELDS:
            continue
        if field in ("Produce", "Ready", "Shipped"):
            if isinstance(value, str):
                normalized = value.strip().lower()
                order[field] = 'TRUE' if normalized in ('true', '1', 'yes') else 'FALSE'
            else:
                order[field] = 'TRUE' if value else 'FALSE'
        else:
            order[field] = value if value is not None else ""
    order["_sortKey"] = determine_sort_key(order)
    save_manual_orders()
    update_order_completion_tracking(order, order.get("transaction"))
    new_identifier = get_order_identifier(order)
    if previous_identifier and new_identifier and previous_identifier != new_identifier:
        remove_order_completion_entry(previous_identifier)
    return order

@app.delete("/api/orders/manual/{manual_id}")
async def delete_manual_order(
    manual_id: str,
    current_user: User = Depends(get_current_user)
):
    if (current_user.role or "").lower() != "admin":
        raise HTTPException(status_code=403, detail="Manual kayıtları sadece admin kullanıcılar silebilir.")
    global manual_orders
    removed_order = None
    remaining: List[Dict[str, Any]] = []
    for order in manual_orders:
        if order.get("__manualId") == manual_id and removed_order is None:
            removed_order = order
            continue
        remaining.append(order)
    if not removed_order:
        raise HTTPException(status_code=404, detail="Manual order not found")
    manual_orders = remaining
    save_manual_orders()
    identifier = get_order_identifier(removed_order)
    remove_order_completion_entry(identifier)
    remove_order_completion_entry(manual_id)
    return {"success": True}

@app.get("/api/orders/sequence")
async def get_order_sequence_endpoint(current_user: User = Depends(get_current_user)):
    return {"sequence": order_sequence}

@app.put("/api/orders/sequence")
async def update_order_sequence_endpoint(
    payload: Dict[str, Any],
    current_user: User = Depends(get_current_user)
):
    if current_user.email.lower() not in PRIVILEGED_ROW_ORDER_EMAILS:
        raise HTTPException(status_code=403, detail="Bu işlem için yetkiniz yok")
    sequence = payload.get("sequence")
    if not isinstance(sequence, list):
        raise HTTPException(status_code=400, detail="Sequence must be a list")
    global order_sequence
    order_sequence = [str(item) for item in sequence if item]
    save_order_sequence()
    return {"sequence": order_sequence}

if __name__ == "__main__":
    import uvicorn
    import sys

    # Parse command line arguments for host and port
    host = "0.0.0.0"  # Default to all interfaces
    port = 8080       # Default port

    # Check for --host and --port arguments
    if "--host" in sys.argv:
        try:
            host_idx = sys.argv.index("--host")
            if host_idx + 1 < len(sys.argv):
                host = sys.argv[host_idx + 1]
        except:
            pass

    if "--port" in sys.argv:
        try:
            port_idx = sys.argv.index("--port")
            if port_idx + 1 < len(sys.argv):
                port = int(sys.argv[port_idx + 1])
        except:
            pass

    print(f"[STARTUP] Starting server on {host}:{port}")
    print("[STARTUP] Access locally: http://localhost:8080")
    if host == "0.0.0.0":
        print("[STARTUP] Access from local network: http://[your-ip]:8080")
    uvicorn.run(fastapi_app, host=host, port=port)
