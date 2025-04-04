import React from 'react';
import Footer from "../../components/footer/Footer";
import "./Contact.css";

function Contact({ language }) {
    const content = {
        es: {
            title: "Contáctanos",
            intro: "Nos encantaría saber de ti. Por favor, completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.",
            name: "Nombre",
            email: "Correo Electrónico",
            message: "Mensaje",
            send: "Enviar"
        },
        en: {
            title: "Contact Us",
            intro: "We would love to hear from you. Please fill out the form below and we will get in touch with you as soon as possible.",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send"
        }
    };

    const text = content[language];

    return (
        <>
            <div className="contact-container">
                <h1>{text.title}</h1>
                <p>{text.intro}</p>
                <form className="contact-form">
                    <label htmlFor="name">{text.name}</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">{text.email}</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">{text.message}</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit">{text.send}</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Contact;