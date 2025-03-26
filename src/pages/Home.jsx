import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import "./home.css";
import PhotoGallery from "../components/PhotoGallery";

function Home({ language }) {
    const content = {
        es: {
            welcome: "Bienvenidos a Casa Rural El Chorro",
            enjoy: "Disfruta de una experiencia única en un entorno natural.",
            bookNow: "Reserva Ahora",
            discover: "Conoce el Entorno",
            imagine: "Imagina un rincón único de Tenerife donde la naturaleza se muestra en su forma más vibrante y auténtica. Los carrizales son joyas ecológicas, situadas en barrancos y áreas húmedas, donde el verde de los carrizos y otras plantas se entrelaza con el murmullo del agua que fluye lentamente.",
            find: "Que encontrarás",
            guidedActivities: "Actividades guiadas",
            explore: "¿Listo para explorar y conectar con la naturaleza como nunca antes? Nuestras actividades guiadas te llevarán a descubrir los secretos mejor guardados de la zona.",
            connectNature: "Conectar con la naturaleza",
            peace: "Déjate envolver por la paz y la belleza del entorno con nuestras actividades guiadas.",
            intimatePlace: "Tu lugar íntimo",
            retreat: "Descubre un refugio perfecto para desconectar y disfrutar de momentos únicos."
        },
        en: {
            welcome: "Welcome to Casa Rural El Chorro",
            enjoy: "Enjoy a unique experience in a natural setting.",
            bookNow: "Book Now",
            discover: "Discover the Surroundings",
            imagine: "Imagine a unique corner of Tenerife where nature is at its most vibrant and authentic. The reed beds are ecological gems, located in ravines and wet areas, where the green of the reeds and other plants intertwines with the murmur of the slowly flowing water.",
            find: "What you'll find",
            guidedActivities: "Guided activities",
            explore: "Ready to explore and connect with nature like never before? Our guided activities will take you to discover the best-kept secrets of the area.",
            connectNature: "Connect with nature",
            peace: "Let yourself be enveloped by the peace and beauty of the surroundings with our guided activities.",
            intimatePlace: "Your intimate place",
            retreat: "Discover a perfect retreat to disconnect and enjoy unique moments."
        }
    };

    const text = content[language];

    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>{text.welcome}</h1>
                    <p>{text.enjoy}</p>
                    <Link to="/contact" className="btn">{text.bookNow}</Link>
                </div>
            </div>

            <section id="us">
                <div className="container">
                    <div className="img-container"></div>
                    <div className="text">
                        <h2>{text.discover}</h2>
                        <p>{text.imagine}</p>
                    </div>
                </div>
            </section>

            <section id="around">
                <div className="containera">
                    <h2>{text.find}</h2>
                    <div className="carts">
                        <div className="carta">
                            <h3>{text.guidedActivities}</h3>
                            <p>{text.explore}</p>
                            <a href="https://www.civitatis.com/es/tenerife/?srsltid=AfmBOooHOID5z7yolZAHuwz_Yn38DJ_Yd_Xvod5yNXj0__s_8zA5vcar"
                                target="_blank" rel="noopener noreferrer">
                                <button>+ info</button>
                            </a>
                        </div>
                        <div className="carta">
                            <h3>{text.connectNature}</h3>
                            <p>{text.peace}</p>
                            <button>+ info</button>
                        </div>
                        <div className="carta">
                            <h3>{text.intimatePlace}</h3>
                            <p>{text.retreat}</p>
                            <button>+ info</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery">
                <div className="container">
                    <h2>Galería de fotos</h2>
                    <PhotoGallery />
                </div>
            </section>

            <Footer />
        </>
    );
}
export default Home;
