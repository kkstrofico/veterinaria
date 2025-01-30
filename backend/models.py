from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String
""" 
Veterinarios:
Nota: El veterinario tiene un método para registrar visitar
Id_Veterinario
Nombres_Veterinario
Apellidos_Veterinario
Dirección_Veterinario
Teléfono Veterinario
Tarjeta_Profesional_Veterinario

"""
class Base(DeclarativeBase):
    pass

class Veterinario(Base):
    __tablename__ = "veterinarios"
    id:Mapped[int] = mapped_column(Integer,primary_key=True,autoincrement=True,nullable=False)
    username:Mapped[str] = mapped_column(String(50),unique=True,nullable=False)
    password:Mapped[str] = mapped_column(String(250),unique=False, nullable=False)
    nombres:Mapped[str] = mapped_column(String(50),nullable=False)
    apellidos:Mapped[str] = mapped_column(String(50),nullable=False)
    dirección:Mapped[str] = mapped_column(String(20),nullable=True)
    teléfono:Mapped[str] = mapped_column(String(10),nullable=True)


