from jose import jwt
import os
from dotenv import load_dotenv
from datetime import timedelta, datetime

load_dotenv()
SECRET_KEY = os.getenv("TOKEN_KEY")
EXPIRE_TOKEN = timedelta(hours=1) + datetime.utcnow()
ALGORITHM_TOKEN = "HS256"

def encode_token(payload:dict):
    data = payload.copy()
    data.update({"exp":EXPIRE_TOKEN})
    token = jwt.encode(payload,key = SECRET_KEY,algorithm = ALGORITHM_TOKEN)
    return token