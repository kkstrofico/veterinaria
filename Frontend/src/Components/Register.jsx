import { useState,useEffect } from 'react'
function Register() {
    const [correo, setCorreo]= useState("")
    const [password1, setPassword1]= useState("")
    const [password2, setPassword2]= useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password1!==password2){
            const password1=document.getElementById("password1");
            const password2=document.getElementById("password2");
            password1.value="";
            password2.value="";
            password2.placeholder="las contraseñas no coinciden";

        }
        else{
            //LLAMAR A API Y PASAR DATOS

        }


    }


    return (
        <form onSubmit={handleSubmit} className='py-4'>
            <input className='bg-neutral-600 rounded-md p-1 text-green-200 mr-3'  type="text" placeholder='Ingresa tu correo' id='correo' onChange={(e)=>{
                setCorreo(e.target.value)

            }} />

            <input className='bg-neutral-600 rounded-md p-1 text-green-200 mr-3'  type="password" placeholder='Ingresa una contraseña' id='password1' onChange={(e)=>{
                setPassword1(e.target.value)
                
            }} />

            <input className='bg-neutral-600 rounded-md p-1 text-green-200 mr-3'  type="password" placeholder='Confirma la contraseña' id='password2' onChange={(e)=>{
                setPassword2(e.target.value)
            }} />

            <button className='bg-green-700 ml-4 p-1.5 rounded-md text-green-950 font-bold hover:bg-green-300 cursor-pointer'>Send</button>

        </form>
    )
}

export default Register