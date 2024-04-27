#Endpoints for user
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.db_config import SessionLocal

from . import schemas, service

router = APIRouter()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

    
@router.post("/register/", response_model=schemas.User)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = service.get_user_by_email(db, user_email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return service.create_user(db=db, user=user)

@router.post('login')
def login_user(user):
    pass