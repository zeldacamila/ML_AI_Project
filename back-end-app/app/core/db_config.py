from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm.session import sessionmaker

DATABASE_URL = "postgresql://postgres:postgres@localhost/postgres"
# DATABASE_URL = "postgresql://postgres:123456@localhost/postgres"


engine = create_engine(DATABASE_URL, echo=True)

SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()
