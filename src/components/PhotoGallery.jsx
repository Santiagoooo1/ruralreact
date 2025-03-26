import React from 'react';
import "./PhotoGallery.css";
import vistas from "../assets/images/vistas.jpg";
import cocina from "../assets/images/cocina.jpg";
import salon from "../assets/images/salon.jpg";
import dormitorio from "../assets/images/porche.jpg";
import bano from "../assets/images/baño.jpg";

const photos = [
    { title: "Las Vistas", description: "Impresionantes vistas de la naturaleza.", image: vistas },
    { title: "La Cocina", description: "Cocina completamente equipada.", image: cocina },
    { title: "El Salón", description: "Acogedor salón para relajarse.", image: salon },
    { title: "El Porche", description: "Lugar ideal donde disfrutar de la tranquilidad del entorno, con barbacoa incluida, fantástico para una reunión de amigos mientras disfrutan de la naturaleza.", image: dormitorio },
    { title: "El Baño", description: "Baño con todas las comodidades modernas.", image: bano }
];

function PhotoGallery() {
    return (
        <div className="photo-gallery">
            {photos.map((photo, index) => (
                <div key={index} className="photo-item">
                    <img src={photo.image} alt={photo.title} />
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                </div>
            ))}
        </div>
    );
}

export default PhotoGallery;
