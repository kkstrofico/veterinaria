/* import {useState} from 'react'
import { Navigate } from 'react-router-dom';

// Funcion que verifica si se encuentra logueado
export function VerificacionLogin(state=false) {
    const [login, setLogin]=useState(state);
        return login
}

//Funcion que se encarga de ejecutar las acciones que se deben de realizar segun el estado anterior

export const RequireAuth =({VerificacionLogin,children})=>{
    if(VerificacionLogin){
        return <Navigate to={"/login"} />
    }
    return childrena
} */