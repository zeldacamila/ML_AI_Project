<<<<<<< HEAD
from datetime import datetime
from uuid import uuid4

from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.core.db_config import Base


# Models for User
class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, default=str(uuid4()))
    username = Column(String(25), unique=True, nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    password = Column(String, nullable=False)
    recommendations = relationship("Recommendation", back_populates="user")


# Model for Recommendation
class Recommendation(Base):
    __tablename__ = "recommendations"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(50), nullable=False)
    description = Column(String, nullable=False)
    creation_date = Column(DateTime, default=datetime.now())
    user_id = Column(String, ForeignKey("users.id"))

    user = relationship("User", back_populates="recommendations")
=======
from datetime import datetime
from uuid import uuid4

from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.core.db_config import Base


# Models for User
class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, default=lambda: str(uuid4()))
    username = Column(String(25), unique=True, nullable=False)
    email = Column(String(50), unique=True, nullable=False)
    password = Column(String, nullable=False)
    recommendations = relationship("Recommendation", back_populates="user")


# Model for Recommendation
class Recommendation(Base):
    __tablename__ = "recommendations"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(50), nullable=False)
    description = Column(String, nullable=False)
    creation_date = Column(DateTime, default=datetime.now)
    user_id = Column(String, ForeignKey("users.id"))

    user = relationship("User", back_populates="recommendations")
>>>>>>> e4a591835e664d41e74be759051ca20ad26575b0
