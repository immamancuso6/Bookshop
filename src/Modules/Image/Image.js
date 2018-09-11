'use strict';
import React from 'react';
import './Image.css';

const Image = (props) => { 
    return (
        <img className="Image" src={props.src} alt={props.alt}/>
    ); 
};
   
export default Image;