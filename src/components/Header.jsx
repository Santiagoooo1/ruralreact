import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";
import logo from "../assets/images/logo.png";

function Header({ currentLanguage, onLanguageChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/" onClick={closeMenu}>
                    <img src={logo} alt="El Chorro Logo" className="logo" />
                </Link>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
                <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
                <li><Link to="/activities" onClick={closeMenu}>Actividades</Link></li>
                <li><Link to="/about" onClick={closeMenu}>Acerca de nosotros</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contacto</Link></li>
                <li><Link to="/reviews" onClick={closeMenu}>Reseñas</Link></li>
                <li className="language-switcher">
                    <button
                        className={currentLanguage === 'es' ? 'active' : ''}
                        onClick={() => { onLanguageChange('es'); closeMenu(); }}
                    >
                        ES
                    </button>
                    <button
                        className={currentLanguage === 'en' ? 'active' : ''}
                        onClick={() => { onLanguageChange('en'); closeMenu(); }}
                    >
                        EN
                    </button>
                </li>
            </ul>
        </header>
    );
}

export default Header;

