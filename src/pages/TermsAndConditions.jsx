import React from 'react';
import Footer from "../components/Footer";
import "./TermsAndConditions.css";

function TermsAndConditions({ language }) {
    const content = {
        es: {
            title: "Términos y Condiciones",
            welcome: "Bienvenido a Casa Rural El Chorro. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Casa Rural El Chorro.",
            accept: "Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes usando el sitio web de Casa Rural El Chorro si no aceptas todos los términos y condiciones establecidos en esta página.",
            cookies: "Empleamos el uso de cookies. Al utilizar el sitio web de Casa Rural El Chorro, aceptas el uso de cookies de acuerdo con la política de privacidad de Casa Rural El Chorro.",
            license: "A menos que se indique lo contrario, Casa Rural El Chorro y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Casa Rural El Chorro. Todos los derechos de propiedad intelectual están reservados. Puedes ver y/o imprimir páginas de https://www.casaruralelchorro.com para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.",
            hyperlink: "Las siguientes organizaciones pueden enlazar a nuestro sitio web sin aprobación previa por escrito:",
            organizations: [
                "Agencias gubernamentales;",
                "Motores de búsqueda;",
                "Organizaciones de noticias;",
                "Distribuidores de directorios en línea cuando nos listan en el directorio pueden enlazar a nuestro sitio web de la misma manera que hacen hipervínculos a los sitios web de otras empresas listadas; y",
                "Empresas acreditadas en todo el sistema, excepto organizaciones sin fines de lucro, centros comerciales de caridad y grupos de recaudación de fondos de caridad que no pueden hacer hipervínculo a nuestro sitio web."
            ],
            removeLinks: "Nos reservamos el derecho de solicitar que elimines todos los enlaces o cualquier enlace en particular a nuestro sitio web. Apruebas eliminar de inmediato todos los enlaces a nuestro sitio web a solicitud.",
            reserveRights: "Nos reservamos el derecho de solicitar que elimines todos los enlaces o cualquier enlace en particular a nuestro sitio web. Apruebas eliminar de inmediato todos los enlaces a nuestro sitio web a solicitud."
        },
        en: {
            title: "Terms and Conditions",
            welcome: "Welcome to Casa Rural El Chorro. These terms and conditions outline the rules and regulations for the use of Casa Rural El Chorro's website.",
            accept: "By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Casa Rural El Chorro's website if you do not accept all of the terms and conditions stated on this page.",
            cookies: "We employ the use of cookies. By using Casa Rural El Chorro's website, you consent to the use of cookies in accordance with Casa Rural El Chorro's privacy policy.",
            license: "Unless otherwise stated, Casa Rural El Chorro and/or its licensors own the intellectual property rights for all material on Casa Rural El Chorro. All intellectual property rights are reserved. You may view and/or print pages from https://www.casaruralelchorro.com for your own personal use subject to restrictions set in these terms and conditions.",
            hyperlink: "The following organizations may link to our website without prior written approval:",
            organizations: [
                "Government agencies;",
                "Search engines;",
                "News organizations;",
                "Online directory distributors when they list us in the directory may link to our website in the same manner as they hyperlink to the websites of other listed businesses; and",
                "Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our website."
            ],
            removeLinks: "We reserve the right to request that you remove all links or any particular link to our website. You approve to immediately remove all links to our website upon request.",
            reserveRights: "We reserve the right to request that you remove all links or any particular link to our website. You approve to immediately remove all links to our website upon request."
        }
    };

    const text = content[language];

    return (
        <div className="terms-container">
            <h1>{text.title}</h1>
            <p>{text.welcome}</p>
            <p>{text.accept}</p>
            <h2>Cookies</h2>
            <p>{text.cookies}</p>
            <h2>License</h2>
            <p>{text.license}</p>
            <h2>Hyperlinking to our Content</h2>
            <p>{text.hyperlink}</p>
            <ul>
                {text.organizations.map((org, index) => (
                    <li key={index}>{org}</li>
                ))}
            </ul>
            <p>{text.removeLinks}</p>
            <h2>Reservation of Rights</h2>
            <p>{text.reserveRights}</p>
            <Footer />
        </div>
    );
}

export default TermsAndConditions;
