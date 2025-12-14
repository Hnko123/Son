from fastapi import APIRouter, Depends
from sqlmodel import Session, select
from typing import Dict, Any
from datetime import datetime, timezone

from ..db import SessionContext
from ..models import Task, User
from ..auth_utils import get_current_active_user


def get_session():
    with SessionContext() as session:
        yield session


router = APIRouter()

@router.get("/me/dashboard-stats", response_model=Dict[str, Any])
async def get_dashboard_stats(
    current_user: User = Depends(get_current_active_user),
    session: Session = Depends(get_session)
) -> Dict[str, Any]:
    """
    Kullanıcıya atanmış görevlerin istatistiklerini döndürür.
    Statistics for tasks assigned to the current user.
    """

    # Kullanıcıya atanmış tüm görevleri al
    tasks = session.exec(
        select(Task).where(Task.assigned_to == current_user.id)
    ).all()

    total_assigned = len(tasks)

    # Tamamlanan görevlerin sayısı
    completed_tasks = [task for task in tasks if task.status == "done"]
    completed_count = len(completed_tasks)

    # Zamanında tamamlanan görevler (deadline varsa ve deadline'den önce veya eşit tamamlanmış)
    completed_on_time = 0
    overdue_count = 0
    current_time = datetime.now(timezone.utc)

    for task in completed_tasks:
        if task.deadline:
            if task.completed_at:
                # completed_at varsa onu kullan, yoksa updated_at kullan
                if isinstance(task.completed_at, datetime):
                    completion_time = task.completed_at
                else:
                    completion_time = task.updated_at
                if completion_time.replace(tzinfo=timezone.utc) <= task.deadline.replace(tzinfo=timezone.utc):
                    completed_on_time += 1
                else:
                    overdue_count += 1
            else:
                # completed_at yoksa ama status done ise overdue say
                overdue_count += 1
        else:
            # deadline yoksa tamamlanan sayılır
            completed_on_time += 1

    # Devam eden görevler
    in_progress_tasks = [task for task in tasks if task.status == "in-progress"]
    in_progress_count = len(in_progress_tasks)

    # Gecikmiş devam eden görevler
    overdue_in_progress = 0
    for task in in_progress_tasks:
        if task.deadline and task.deadline.replace(tzinfo=timezone.utc) < current_time:
            overdue_in_progress += 1

    return {
        "total_assigned": total_assigned,
        "completed": completed_count,
        "completed_on_time": completed_on_time,
        "overdue_completed": overdue_count,
        "in_progress": in_progress_count,
        "overdue_in_progress": overdue_in_progress,
        "overdue_total": overdue_count + overdue_in_progress
    }

@router.get("/me/preferences", response_model=Dict[str, Any])
async def get_user_preferences(
    current_user: User = Depends(get_current_active_user),
) -> Dict[str, Any]:
    """Get current user's preferences"""
    return {
        "user_id": current_user.id,
        "table_density": current_user.table_density or "normal",
        "preferences": {
            "table_density": current_user.table_density or "normal"
        }
    }

@router.put("/me/preferences")
async def update_user_preferences(
    preferences: Dict[str, Any],
    current_user: User = Depends(get_current_active_user),
    session: Session = Depends(get_session)
):
    """Update current user's preferences"""
    current_user.table_density = preferences.get("table_density", current_user.table_density or "normal")

    session.add(current_user)
    session.commit()
    session.refresh(current_user)

    return {
        "message": "Preferences updated successfully",
        "preferences": {
            "table_density": current_user.table_density
        }
    }
