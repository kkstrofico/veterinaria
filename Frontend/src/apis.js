//Archivo que se encargara de realizar la conexion con las APIS necesarias
import axios from 'axios'; //Libreria que permite realizar solicitudees HTTP
//Importar archivo que habilita el acceso a las funcionalidades
// Funcion que realiza peticiones a la api
export const sendDataRegister=async(correo,password1)=>{
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
            alert("mira el token bro: " + response.data.token)
            const infoUser = response.data.userData;
            const infoPets = infoUser.pets[0];

            alert("Mira tus pinches datos "+ infoUser.name + " edad: " + infoUser.age + " Tienes un "+ infoPets.type + " y se llama " + infoPets.name);
        }
    }catch(error){
        console.log('Error: ',error);
    }
};
export const sendDataLogin= async (userName, password)=>{
    try{
        const response = await axios.post("http://127.0.0.1:8000/api/v1/veterinario",{
            username:userName,
            password:password
        },{
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(response)
        if(response.data.message !== "Usuario no encontrado o contraseña invalida"){
            alert("Veterinario Existente")
            console.log((response.data))
            // FALTA OBTENER TOKEN ALMACENARLO EN LOCALSTORAGE. HABILITAR OPCIONES
        }else{
            alert("Veterinario no encontrado ")
        } 
    }catch(error){
        console.log('error',error);
    }
};

