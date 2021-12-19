import React from 'react';
import { Contactos } from '../clases/contactos';
import Fichadecontacto from './fichadecontacto';


const Listacontactos = () => {

    const ficha = new Contactos('jose','espinosa','owen@gmail.com',true)

    return (
        <div>
            <Fichadecontacto ficha={ficha}></Fichadecontacto>
        </div>
    );
};

export default Listacontactos;
