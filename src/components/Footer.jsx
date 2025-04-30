import { Link } from 'react-router-dom';
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white pt-8 pb-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
            
            <div>
                <h2 className="text-lg font-semibold mb-4">EcoMarket & BancoSimple</h2>
            </div>

            <div>
                <Link to="/quienes-somos" className="text-lg font-semibold mb-4 hover:underline">Quienes somos</Link>
                <ul className="space-y-2">
                    <li>Nuestra historia y mision</li>
                    <li>Equipo GitJav Refactor</li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Ayuda</h3>
                <ul className="space-y-2">
                    <li>Compra y delivery</li>
                    <li>Contáctanos</li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Síguenos en redes sociales</h3>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-300"><FaFacebookF size={24} /></a>
                    <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
                    <a href="#" className="hover:text-gray-300"><FaLinkedinIn size={24} /></a>
                    <a href="#" className="hover:text-gray-300"><FaTwitter size={24} /></a>
                </div>
            </div>
            </div>

            <hr className="my-6 border-gray-400" />

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-sm">
                <p>© 2025 EcoMarket. Todos los derechos reservados</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <p>Política de privacidad</p>
                    <p>Términos de servicio</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;