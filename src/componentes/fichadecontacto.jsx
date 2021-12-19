import React from 'react';
import PropTypes from 'prop-types';
import { Contactos } from '../clases/contactos';

const Fichadecontacto = ({ficha}) => {
    
    
    return (
        <div>
            <p>{ficha.nombre}</p>
            <p>{ficha.apellido}</p>
            <p>{ficha.correo}</p>
            <p>{ficha.conectado?'online':'offline'}</p>
        </div>
    );
};


Fichadecontacto.propTypes = {
    ficha : PropTypes.instanceOf(Contactos)
};

export default Fichadecontacto;
