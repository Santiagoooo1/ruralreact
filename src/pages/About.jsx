import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./About.css";
import vistas from "../assets/images/vistas.jpg";
import cocina from "../assets/images/cocina.jpg";
import salon from "../assets/images/salon.jpg";
import porche from "../assets/images/porche.jpg";
import bano from "../assets/images/baño.jpg";

function About({ language }) {
    const content = {
        es: {
            title: "Acerca de Casa Rural El Chorro",
            intro: "Descubre las diferentes partes de nuestra casa rural.",
            sections: [
                {
                    title: "Las Vistas",
                    description: "Disfruta de unas vistas impresionantes de la naturaleza que rodea nuestra casa rural.",
                    image: vistas
                },
                {
                    title: "La Cocina",
                    description: "Nuestra cocina está completamente equipada con todo lo necesario para preparar deliciosas comidas.",
                    image: cocina
                },
                {
                    title: "El Salón",
                    description: "Relájate en nuestro acogedor salón, perfecto para descansar después de un día de actividades.",
                    image: salon
                },
                {
                    title: "El Porche",
                    description: "Lugar ideal donde disfrutar de la tranquilidad del entorno, con barbacoa incluida, fantástico para una reunión de amigos mientras disfrutan de la naturaleza.",
                    image: porche
                },
                {
                    title: "El Baño",
                    description: "Nuestro baño está equipado con todas las comodidades modernas para tu conveniencia.",
                    image: bano
                }
            ]
        },
        en: {
            title: "About Casa Rural El Chorro",
            intro: "Discover the different parts of our rural house.",
            sections: [
                {
                    title: "The Views",
                    description: "Enjoy stunning views of the nature surrounding our rural house.",
                    image: vistas
                },
                {
                    title: "The Kitchen",
                    description: "Our kitchen is fully equipped with everything you need to prepare delicious meals.",
                    image: cocina
                },
                {
                    title: "The Living Room",
                    description: "Relax in our cozy living room, perfect for unwinding after a day of activities.",
                    image: salon
                },
                {
                    title: "The Porch",
                    description: "An ideal place to enjoy the tranquility of the surroundings, with a barbecue included, fantastic for a gathering of friends while enjoying nature.",
                    image: porche
                },
                {
                    title: "The Bathroom",
                    description: "Our bathroom is equipped with all modern amenities for your convenience.",
                    image: bano
                }
            ]
        }
    };

    const text = content[language];

    return (
        <>
            <div className="about-container">
                <h1>{text.title}</h1>
                <p>{text.intro}</p>
                <div className="sections">
                    {text.sections.map((section, index) => (
                        <div key={index} className="section">
                            <img src={section.image} alt={section.title} />
                            <div className="section-content">
                                <h2>{section.title}</h2>
                                <p>{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;