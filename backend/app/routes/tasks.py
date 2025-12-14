from fastapi import APIRouter, Depends, HTTPException, Query
from sqlmodel import Session, select, update
from typing import Dict, Any, List
from datetime import datetime, timezone
from sqlalchemy import func
from pydantic import BaseModel

from ..db import SessionContext
from ..models import Task, User
from ..auth_utils import get_current_active_user

def get_session():
    with SessionContext() as session:
        yield session

router = APIRouter()

class TaskCreate(BaseModel):
    title: str
    description: str = ""
    assigned_to: int = None
    deadline: datetime = None
    status: str = "todo"

class TaskUpdate(BaseModel):
    status: str


# Task CRUD endpoints
@router.get("/", response_model=List[Task])
async def get_tasks(
    session: Session = Depends(get_session)
):
    """Get all tasks"""
    tasks = session.exec(select(Task)).all()
    return tasks

@router.get("/users")
async def get_users():
    """Get all users for task assignment"""
    # Use raw SQLAlchemy to avoid relationship issues
    from sqlalchemy import text
    with SessionContext() as session:
        # Execute raw SQL to avoid relationship configuration issues
        result = session.execute(text("SELECT id, username, email, full_name FROM user"))
        users = []
        for row in result:
            users.append({
                "id": row[0],
                "username": row[1],
                "email": row[2],
                "full_name": row[3]
            })
        return users

@router.post("/seed-users")
async def seed_users():
    """Seed some test users - TEMPORARY ENDPOINT"""
    from sqlalchemy import text
    with SessionContext() as session:
        # Clear existing users first
        session.execute(text("DELETE FROM user"))

        # Create test users
        users_data = [
            ("admin", "admin@example.com", "Admin User", "placeholder", "admin"),
            ("worker1", "worker1@example.com", "Worker One", "placeholder", "user"),
            ("worker2", "worker2@example.com", "Worker Two", "placeholder", "user")
        ]

        for username, email, full_name, hashed_password, role in users_data:
            session.execute(text("""
                INSERT INTO user (username, email, full_name, hashed_password, role, avatar, skills, phone, table_density, is_active, created_at)
                VALUES (:username, :email, :full_name, :hashed_password, :role, '', '', '', 'normal', 1, datetime('now'))
            """), {
                "username": username,
                "email": email,
                "full_name": full_name,
                "hashed_password": hashed_password,
                "role": role
            })

        session.commit()
        return {"message": "Users seeded successfully"}

@router.post("/", response_model=Task)
async def create_task(
    task: TaskCreate,
    session: Session = Depends(get_session)
):
    """Create a new task"""
    db_task = Task(**task.model_dump())
    db_task.start_date = datetime.now(timezone.utc)
    db_task.created_at = datetime.now(timezone.utc)

    session.add(db_task)
    session.commit()
    session.refresh(db_task)
    return db_task

@router.patch("/{task_id}/status", response_model=Task)
async def update_task_status(
    task_id: int,
    task_update: TaskUpdate,
    session: Session = Depends(get_session)
):
    """Update task status"""
    task = session.get(Task, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    task.status = task_update.status
    if task_update.status == "done":
        task.completed_at = datetime.now(timezone.utc)
    else:
        task.completed_at = None

    task.updated_at = datetime.now(timezone.utc)
    session.commit()
    session.refresh(task)
    return task
