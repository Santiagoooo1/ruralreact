import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";

const links = {
    es: [
        { path: "/", label: "Inicio" },
        { path: "/activities", label: "Actividades" },
        { path: "/about", label: "Acerca de nosotros" },
        { path: "/contact", label: "Contacto" },
        { path: "/reviews", label: "Reseñas" }
    ],
    en: [
        { path: "/", label: "Home" },
        { path: "/activities", label: "Activities" },
        { path: "/about", label: "About Us" },
        { path: "/contact", label: "Contact" },
        { path: "/reviews", label: "Reviews" }
    ]
};

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
                {links[currentLanguage].map((link, index) => (
                    <li key={index}>
                        <Link to={link.path} onClick={closeMenu}>
                            {link.label}
                        </Link>
                    </li>
                ))}
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

