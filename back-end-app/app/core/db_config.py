import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm.session import sessionmaker

load_dotenv()

# DB_USERNAME = os.getenv("DB_USERNAME")
# DB_PASSWORD = os.getenv("DB_PASSWORD")
# DB_HOST = os.getenv("DB_HOST")
# DB_NAME = os.getenv("DB_NAME")

DB_USERNAME = "mlgp4"
DB_PASSWORD = "Homgr4AI"
DB_HOST = "ml-project-db.ctwkw4c0kcg3.sa-east-1.rds.amazonaws.com"
DB_NAME = "mlproject"

DATABASE_URL = f"postgresql://{DB_USERNAME}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"

engine = create_engine(DATABASE_URL, echo=True)

SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()
