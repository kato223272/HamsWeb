import React, { useState } from 'react';
import '../Style/Navbar.css';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const hideNavbar = ['/inicioCliente', '/comidaCliente', '/camaraCliente'].includes(location.pathname);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    if (hideNavbar) {
      return null;
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Logo</div>
            <ul className="nav-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="">Acerca de nosotros</a></li>
                <li className="dropdown">
                <button className="dropbtn" onClick={toggleDropdown}>Iniciar sesión</button>
                    <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                        <form>
                            <input type="email" placeholder="Correo electrónico" />
                            <input type="password" placeholder="Contraseña" />
                            <button className='IniciarSesion' type="submit">Iniciar sesión</button>
                        </form>
                        <a href="#">Registrarse</a>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
