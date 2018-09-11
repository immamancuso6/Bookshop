'use strict';
import React from 'react';
import './Logo.css';
import Image from '../Image/Image';

const Logo = (props) => { 
    return (
        <div className="Logo">
            <Image className="Logo__image" src={props.src} alt={props.alt} />
            <h2 className="Logo__text">{props.logoTagline}</h2>
        </div>
    ); 
};
   
export default Logo;