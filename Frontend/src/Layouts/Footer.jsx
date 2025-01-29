import "../styles/Footer.css"
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { MdPets } from "react-icons/md";
function Footer() {
    return (
        <>
            <footer>
                <div className="info proyect">
                    <h2>Mascota Feliz {<MdPets className="icon-pets"/>}</h2>
                    <p>Copyright © 2025 © Cje-Tecnology inc. Todos los derechos reservados </p>
                </div>
                <div className="info authors">
                    <h2>Authors</h2>
                    <ul >
                        <li>Junior Herrera</li>
                        <li>Camilo Ospina</li>
                        <li>Edier Guerra</li>
                    </ul>
                </div>
                <div className="info redes">
                    <h2>Redes sociales</h2>
                    <ul>
                        <li className="link tiktok"><a href="#">{<FaTiktok className="icon tiktok" />}</a></li>
                        <li className="link github"><a href="#">{<GrGithub className="icon github"/>}</a></li>
                        <li className="link facebook"><a href="#">{<FaFacebookF className="icon facebook"/>}</a></li>
                        <li className="link whatsaap"><a href="#">{<FaWhatsapp  className="icon whatsaap"/>}</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer