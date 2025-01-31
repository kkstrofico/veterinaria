import { useState,useEffect } from 'react'
import '../../styles/Login-Register/Register.css'
import {sendDataRegister} from '../../apis'
function Register() {
    const [correo, setCorreo]= useState("");
    const [password1, setPassword1]= useState("");
    const [password2, setPassword2]= useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password1!==password2){
            setPassword1("");
            setPassword2("");
            alert("Error, Las Contraseñas no Coinciden")
            

        }else{
            //LLAMAR FUNCION QUE LLAMA API Y PASA
            //  DATOS
            sendDataRegister();
        }

    }

        
    return (
        <form className='formRegister' onSubmit={handleSubmit}>
            <h2 className='titleRegister'>Register</h2>
            <input className='input'  type="text" placeholder='Ingresa tu correo Electronico' id='correo' onChange={(e)=>{
                setCorreo(e.target.value)

            }} />

            <input className='input'   type="password" placeholder='Ingresa una contraseña' id='password1' onChange={(e)=>{
                setPassword1(e.target.value)
                
            }} />

            <input className='input'  type="password" placeholder='Confirma la contraseña' id='password2' onChange={(e)=>{
                setPassword2(e.target.value)
            }} />

            <button className='btn-register'>Register</button>

        </form>
    )
}

export default Register