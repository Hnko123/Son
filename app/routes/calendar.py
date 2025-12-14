from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from typing import Dict, Any, List
from datetime import datetime, timezone
from pydantic import BaseModel

from ..db import SessionContext
from ..models import CalendarEvent, User
from ..auth_utils import get_current_active_user

def get_session():
    with SessionContext() as session:
        yield session

router = APIRouter()

class CalendarNote(BaseModel):
    date: str
    note: Dict[str, Any]

class CalendarNoteUpdate(BaseModel):
    note: str

@router.get("/notes")
async def get_calendar_notes(
    session: Session = Depends(get_session)
):
    """Get all calendar notes"""
    # For now, we'll simulate the notes endpoint by converting CalendarEvents to a date-keyed format
    # This matches what the frontend expects: { "2025-01-28": { "note": "content" } }
    try:
        events = session.exec(select(CalendarEvent)).all()

        # Convert to the format frontend expects
        notes = {}
        for event in events:
            date_key = event.event_date.strftime('%Y-%m-%d')
            notes[date_key] = {
                "note": event.title + (f"\n\n{event.description}" if event.description else ""),
                "userId": event.created_by
            }

        return notes
    except Exception as e:
        print(f"Error getting calendar notes: {e}")
        return {}

@router.post("/notes")
async def save_calendar_note(
    note_data: CalendarNote,
    session: Session = Depends(get_session)
):
    """Save a calendar note for a specific date"""
    try:
        date_str = note_data.date
        note_content = note_data.note.get('note', '')

        # Parse the date
        try:
            event_date = datetime.strptime(date_str, '%Y-%m-%d').replace(tzinfo=timezone.utc)
        except ValueError:
            raise HTTPException(status_code=400, detail="Invalid date format. Use YYYY-MM-DD")

        # For simplicity, we'll create a CalendarEvent
        # In a full implementation, you'd want to handle updates to existing events
        existing_event = session.exec(
            select(CalendarEvent).where(
                CalendarEvent.event_date == event_date,
                CalendarEvent.title == note_content[:50]  # Rough matching
            )
        ).first()

        if existing_event:
            # Update existing event
            existing_event.description = note_content
            existing_event.updated_at = datetime.now(timezone.utc)
            session.commit()
        else:
            # Create new event
            # Get first user as default creator (should be from auth)
            first_user = session.exec(select(User)).first()
            if not first_user:
                raise HTTPException(status_code=400, detail="No users found")

            event = CalendarEvent(
                title=note_content[:50] if note_content else "Note",
                description=note_content,
                event_date=event_date,
                created_by=first_user.id,
                type="note"
            )
            session.add(event)

        session.commit()
        return {"success": True, "message": f"Note saved for {date_str}"}

    except Exception as e:
        print(f"Error saving calendar note: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/events")
async def get_calendar_events(
    session: Session = Depends(get_session)
):
    """Get all calendar events"""
    try:
        events = session.exec(select(CalendarEvent)).all()
        return events
    except Exception as e:
        print(f"Error getting calendar events: {e}")
        raise HTTPException(status_code=500, detail=str(e))
