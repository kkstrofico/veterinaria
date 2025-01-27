import { useState } from 'react'
//Se usara react-router-dom para la manipulacion de rutas y reutilizacion del Navbar
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import NavBar from './Layouts/Navbar'
import About from './Components/About'
import Inicio from './Components/Inicio'
import Register from './Components/Login-Register/Register'


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

        </Routes>
      </div>
    </Router>



    
    </>
  )
}

export default App
