import React, { useState } from "react";
import { FaEnvelope, FaInstagram, FaYoutube, FaGithub, FaRss } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

    const toggleSocialDropdown = () => {
        setIsSocialDropdownOpen(!isSocialDropdownOpen);
    };

    const toggleContactDropdown = () => {
        setIsContactDropdownOpen(!isContactDropdownOpen);
    };

    return (
        <footer className="PrincipalFooter">
            <div className="desktop-only">
                <ul>
                    <li>
                        <a href="palitotorremolinos@hotmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="/rss/rss.xml" target="_blank" rel="noopener noreferrer">
                            <FaRss size={30} />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="dropdown-container mobile-only">
                <button className="dropdown-toggle" onClick={toggleSocialDropdown}>
                    Redes Sociales
                </button>
                {isSocialDropdownOpen && (
                    <div className="dropdown-content">
                        <ul>
                            <li>
                                <a href="palitotorremolinos@hotmail.com" target="_blank" rel="noopener noreferrer">
                                    <FaEnvelope size={30} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={30} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube size={30} />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={30} />
                                </a>
                            </li>
                            <li>
                                <a href="/rss/rss.xml" target="_blank" rel="noopener noreferrer">
                                    <FaRss size={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="dropdown-container mobile-only">
                <button className="dropdown-toggle" onClick={toggleContactDropdown}>
                    Contactos
                </button>
                {isContactDropdownOpen && (
                    <div className="dropdown-content">
                        <p>Email: palitotorremolinos@hotmail.com</p>
                        <p>Teléfono: +34 692431803</p>
                        <p>Dirección: El Carrizal, El Chorro, España</p>
                    </div>
                )}
            </div>
            <p>&copy; {new Date().getFullYear()} Casa Rural El Chorro - <Link to="/terms" className="underline">Términos y Condiciones</Link></p>
        </footer>
    );
}

export default Footer;
