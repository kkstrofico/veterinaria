from fastapi import FastAPI
import requests 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Lista de orígenes permitidos (React suele correr en localhost:3000 durante el desarrollo)
origins = [
    "http://localhost:5174",  # Origen del frontend en desarrollo
]

# Agregar el middleware de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Lista de orígenes permitidos
    allow_credentials=True,  # Permitir cookies y credenciales
    allow_methods=["*"],  # Permitir todos los métodos HTTP (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Permitir todos los headers
)

class UserSchema(BaseModel):
    id:int
    name:str
    lastName:str

@app.get("/")
def root():
    return "Hola, FastAPI"

@app.get("/users/")
def get_users():
    # Simulando algunos datos
    users_data = [
        {"id": 1, "name": "Juan", "lastName": "Pérez"},
        {"id": 2, "name": "Ana", "lastName": "García"},
        {"id": 3, "name": "Luis", "lastName": "Sánchez"},
    ]
    return {"message": "Usuarios obtenidos correctamente", "data": users_data}

@app.get("/api/v1/node-users")
def get_users_node():
    response = requests.get("http://localhost:3000/api/usuarios")

    response.raise_for_status()

    users = response.json()

    return {"message":"GET users from node","users_node":users}