from pydantic import BaseModel

class VeterinarioLogin(BaseModel):
    username:str
    password:str 

class VeterinarioSchema(BaseModel):
    nombres:str
    apellidos:str

    class Config:
        from_attributes = True