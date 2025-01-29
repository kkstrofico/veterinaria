import '../styles/NavBar.css'
import {Link} from 'react-router-dom' //Esto sirve para agregar los apartados de la pagina
function Navbar() {
    return (
        <nav>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/about"}>Sobre nosotros</Link>
            <Link to={"/contact"}>contacto</Link>
        </nav>
    
        
    )
}

export default Navbar