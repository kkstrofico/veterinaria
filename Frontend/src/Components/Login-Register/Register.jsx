import { useState,useEffect } from 'react'
import '../../styles/Register.css'
import axios from 'axios'; //Libreria que permite realizar solicitudees HTTP

function Register() {
    const [correo, setCorreo]= useState("");
    const [password1, setPassword1]= useState("");
    const [password2, setPassword2]= useState("");

    // Funcion que realiza peticiones a la api
    const sendData=async()=>{
        try{
            const response = await axios.post("http://localhost:3000/register",{
                username:correo,
                password:password1
            },{
                headers:{
                    'Content-Type':'application/json'
                }
            });
            console.log(response)//obtener respuesta de api
            if (response.data.message === "User created successfully" ){
                alert("Has sido registrado exitosamente")
                alert("mira el token bro: " +response.data.token)
            }
        }catch(error){
            console.log('Error: ',error);
        }
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password1!==password2){
            setPassword1("");
            setPassword2("");
            alert("Error, Las Contraseñas no Coinciden")
            

        }else{
            //LLAMAR FUNCION QUE LLAMA API Y PASA
            //  DATOS
            sendData();
        }

    }

        
    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" placeholder='Ingresa tu correo Electronico' id='correo' onChange={(e)=>{
                setCorreo(e.target.value)

            }} />

            <input type="password" placeholder='Ingresa una contraseña' id='password1' onChange={(e)=>{
                setPassword1(e.target.value)
                
            }} />

            <input type="password" placeholder='Confirma la contraseña' id='password2' onChange={(e)=>{
                setPassword2(e.target.value)
            }} />

            <button>Send</button>

        </form>
    )
}

export default Register