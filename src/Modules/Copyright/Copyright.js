'use strict';
import React from 'react';
import './Copyright.css';

const Copyright = (props) => { 
    const year = new Date().getFullYear();
    return (
        <p className="Copyright">Copyright &copy; {year}</p>
    ); 
};
   
export default Copyright;