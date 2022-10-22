import React from 'react';



const ContactoF = ({contacto, conectado}) => {

    return (
        <div>
            <h1>
                nombre: { contacto.nombre }
            </h1>
            <h2>
                apellido: { contacto.apellido }
            </h2>
            <h3>
                email: { contacto.email }
            </h3>
            <h4>
                conectado: { conectado ? "Contacto En Línea" : "Contacto No Disponible"}
            </h4>
        </div>
    );
};



export default ContactoF;
