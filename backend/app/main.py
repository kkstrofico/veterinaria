from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Lista de orígenes permitidos (React suele correr en localhost:3000 durante el desarrollo)
origins = [
    "http://localhost:5173",  # Origen del frontend en desarrollo
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

@app.post("/users/")
def message_user(users_data:UserSchema):
    print(users_data)
    return {"message":"Son estos los datos","datos":users_data}