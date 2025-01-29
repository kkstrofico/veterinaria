import { useState,useEffect } from 'react'
import '../../styles/Login-Register/Register.css'
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
            if (response.data.message === "User created and validated successfully" ){
                alert("Has sido registrado exitosamente")
                alert("mira el token bro: " +response.data.token)
                const infoUser = response.data.userData;
                const infoPets = infoUser.pets[0];

                alert("Mira tus pinches datos "+ infoUser.name + " edad: " + infoUser.age + " Tienes un "+ infoPets.type + " y se llama " + infoPets.name);
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