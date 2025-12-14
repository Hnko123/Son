from sqlmodel import SQLModel, Field, Relationship
from datetime import datetime
from typing import Optional, List

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(unique=True, index=True)
    email: str = Field(unique=True, index=True)
    full_name: str
    hashed_password: str
    is_active: bool = Field(default=True)
    role: str = Field(default="user")  # Options: admin, manager, user
    avatar: str = Field(default="")  # URL to avatar image
    skills: str = Field(default="")  # Comma-separated skills
    phone: str = Field(default="")
    table_density: str = Field(default="normal")  # Options: compact, normal, spacious
    created_at: datetime = Field(default_factory=datetime.utcnow)

    # Relationships
    assigned_tasks: List["Task"] = Relationship(back_populates="assigned_user")
    created_tasks: List["Task"] = Relationship(back_populates="created_by_user")
    calendar_events: List["CalendarEvent"] = Relationship(back_populates="created_by_user")
    orders: List["Order"] = Relationship(back_populates="assigned_user")

class Task(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str
    status: str = Field(default="todo")  # todo, in-progress, done
    assigned_to: Optional[int] = Field(default=None, foreign_key="user.id", index=True)
    priority: str = Field(default="medium")  # low, medium, high
    start_date: datetime = Field(default_factory=datetime.utcnow)
    deadline: Optional[datetime] = None
    completed_at: Optional[datetime] = None  # Completion timestamp
    attachment: Optional[str] = None  # JSON string for file attachments
    created_by: int = Field(foreign_key="user.id", index=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    # Relationships
    assigned_user: Optional[User] = Relationship(back_populates="assigned_tasks")
    created_by_user: User = Relationship(back_populates="created_tasks")

class CalendarEvent(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: str
    event_date: datetime
    assigned_to: Optional[int] = Field(default=None, foreign_key="user.id", index=True)
    type: str = Field(default="event")  # event, note, reminder
    priority: str = Field(default="medium")  # low, medium, high
    recurrence: Optional[str] = None  # daily, weekly, monthly
    reminder: Optional[int] = None  # minutes before
    color: str = Field(default="#667eea")  # hex color
    created_by: int = Field(foreign_key="user.id", index=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    # Relationships
    assigned_user: Optional[User] = Relationship(back_populates="calendar_events")
    created_by_user: User = Relationship(back_populates="calendar_events")

class Notification(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id", index=True)
    title: str
    message: str
    type: str  # task_assigned, event_assigned, reminder
    related_id: Optional[int] = None  # ID of task/event
    data: Optional[str] = None  # JSON string for additional data
    is_read: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Order(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    transaction_id: Optional[int] = Field(default=None, unique=True, index=True)
    order_date: str
    status: str = Field(default="pending")
    product_name: str
    image_url: Optional[str] = None
    material_size: Optional[str] = None
    chain_length: Optional[str] = None
    personalization: Optional[str] = None
    quantity: Optional[int] = None
    customer_name: Optional[str] = None
    customer_email: Optional[str] = None
    customer_address: Optional[str] = None
    customer_note: Optional[str] = None
    item_price: Optional[float] = None
    discount: Optional[float] = None
    sales_tax: Optional[float] = None
    order_total: Optional[float] = None
    shop_name: Optional[str] = None
    ioss_number: Optional[str] = None
    vat_collected: Optional[str] = None
    vat_id: Optional[str] = None
    vat_paid_chf: Optional[str] = None
    cut: bool = Field(default=False)
    ready: bool = Field(default=False)
    shipped: bool = Field(default=False)
    tracking_number: Optional[str] = None
    shipping_date: Optional[str] = None
    notes: Optional[str] = Field(default="")
    importantnote: str = Field(default="")
    assigned_to_user_id: Optional[int] = Field(default=None, foreign_key="user.id", index=True)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
