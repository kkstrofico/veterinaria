from typing import List, Optional
from pydantic import BaseModel,EmailStr

class Pet(BaseModel):
    name: str
    type: str  # Ejemplo: "dog", "cat", "parrot"
    age: int

class User(BaseModel):
    name: str
    email: EmailStr
    age: int
    city: str
    pets: Optional[List[Pet]] = []  # Lista de mascotas, puede estar vacía