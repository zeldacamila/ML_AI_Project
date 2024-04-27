#Models for users
from uuid import uuid4

from sqlalchemy import Column, String
from sqlalchemy.orm import relationship

from app.core.db_config import Base


class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, default=str(uuid4()))
    username = Column(String(25), unique=True, nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    password = Column(String, nullable=False)
    recommendations = relationship("Recommendation", back_populates="user")