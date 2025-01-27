from fastapi import FastAPI, HTTPException,status 
import requests 
from fastapi.middleware.cors import CORSMiddleware
from .models import User,Pet

app = FastAPI()

fake_db = {
    "Edier": {
        "name":"Edier Andres",
        "email": "edier@example.com",
        "age": 28,
        "city": "Bogotá",
        "pets": [
            {"name": "Firulais", "type": "dog", "age": 3},
            {"name": "Michi", "type": "cat", "age": 2}
        ]
    },
    "Maria": {
        "name":"Maria Alejandra",
        "email": "maria@example.com",
        "age": 34,
        "city": "Medellín",
        "pets": [
            {"name": "Rex", "type": "dog", "age": 5}
        ]
    },
    "Carlos": {
        "name":"Carlos",
        "email": "carlos@example.com",
        "age": 25,
        "city": "Cali",
        "pets": []
    },
    "Lucia": {
        "name":"Lucia",
        "email": "lucia@example.com",
        "age": 30,
        "city": "Cartagena",
        "pets": [
            {"name": "Kira", "type": "parrot", "age": 1}
        ]
    }
}


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



@app.get("/")
def root():
    return "Hola, FastAPI"

@app.get("/api/v1/users")
def get_users():
    # Simulando algunos datos
    users_data = [
        {"id": 1, "name": "Juan", "lastName": "Pérez"},
        {"id": 2, "name": "Ana", "lastName": "García"},
        {"id": 3, "name": "Luis", "lastName": "Sánchez"},
    ]
    return {"message": "Usuarios obtenidos correctamente", "data": users_data}

@app.get("/api/v1/get-user/{name_user}",response_model=User)
def valid_user(name_user:str):
    user_db = fake_db.get(name_user)
    if not user_db: 
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not fount")
    return user_db