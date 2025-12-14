from sqlmodel import SQLModel, Field, Session, create_engine
import os
from pathlib import Path

def get_database_url():
    # Use env var if set, otherwise default to SQLite
    return os.getenv("DATABASE_URL", "sqlite:///./orders.db")

engine = create_engine(get_database_url(), echo=False)

def init_db():
    SQLModel.metadata.create_all(engine)

# Provide session context manager
class SessionContext:
    def __init__(self):
        self.session = Session(engine)
    def __enter__(self):
        return self.session
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is None:
            self.session.commit()
        else:
            self.session.rollback()
        self.session.close()

# FastAPI dependency for getting database session
def get_db():
    with SessionContext() as session:
        yield session
