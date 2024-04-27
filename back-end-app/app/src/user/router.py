# Endpoints for user
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


@router.post("/register/", response_model=schemas.User, status_code=201)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = service.get_user_by_email(db, user_email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    db_user_name = service.get_user_by_name(db, user_name=user.username)
    if db_user_name:
        raise HTTPException(status_code=400, detail="Username already registered")
    return service.create_user(db=db, user=user)


@router.post("/login/", response_model=schemas.User)
def login_user(user: schemas.UserLogin, db: Session = Depends(get_db)):
    db_user = service.get_user_by_email(db, user_email=user.email)
    if not db_user or not service.verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return service.get_user_by_email(db=db, user_email=user.email)
