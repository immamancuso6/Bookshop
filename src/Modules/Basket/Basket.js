'use strict';
import React from 'react';
import './Basket.css';
import Image from '../Image/Image';

const Basket = (props) => { 
    return (
        <div className="Basket">
            <Image 
                src={props.src} 
                alt={'Basket'} />
            <span>{props.basketCount}</span>
        </div>
    ); 
};
   
export default Basket;