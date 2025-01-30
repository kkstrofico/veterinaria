import { useState } from 'react'
//Se usara react-router-dom para la manipulacion de rutas y reutilizacion del Navbar
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import NavBar from './Layouts/Navbar'
import Footer from './Layouts/Footer'
//OPCIONES
import Inicio from './Components/Inicio'
import About from './Components/About'
import Register from './Components/Login-Register/Register'
import Login from './Components/Login-Register/Login'
// FUNCIONES PROTECCION DE RUTAS
//OPCIONES VETERINARIO
import Mascota from './Components/Apartado-Veterinario/Mascota'


function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/mascota' element={<Mascota/>}/>


        </Routes>
      </div>

      <Footer/>
    </Router>



    
    </>
  )
}

export default App
