import React from "react";
import { FaEnvelope, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="PrincipalFooter">
            <div>
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
                </ul>
            </div>
            <p>&copy; {new Date().getFullYear()} Casa Rural El Chorro - <Link to="/terms" className="underline">Términos y Condiciones</Link></p>
        </footer>
    );
}

export default Footer;
