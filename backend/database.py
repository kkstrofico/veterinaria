from fastapi import HTTPException, status 
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv
from models import Base

load_dotenv()

URL_DB = f"mysql+pymysql://{os.getenv("MySQL_USER")}:{os.getenv("MySQL_PASSWORD")}@{os.getenv("MySQL_HOST")}:3306/{os.getenv("MySQL_DB")}"

engine = create_engine(url = URL_DB, echo = True)

SessionLocal = sessionmaker(engine)

def create_db():
    try:
        Base.metadata.create_all(engine)
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,detail=f"Error inesperado: {e}")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally: 
        db.close()