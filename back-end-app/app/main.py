#FastAPI app
from fastapi import FastAPI

from app.core.db_config import Base, engine
from app.src.user import router

app = FastAPI()

Base.metadata.create_all(bind=engine)  # Create the database tables

app.include_router(router.router, prefix='/user')

@app.get("/ping")
async def ping():
    return {"message": "pong"}