'use strict';
import React from 'react';
import './Product.css';

const Product = (props) => { 
    return (
        <li className="Product">
            <img className="Product__image" src={props.cover}/>
            <h5 className="Product__title">{props.title}</h5>
            <h6 className="Product__author">{props.author}</h6>
            <p className="Product__description">{props.description}</p>
            <span className="Product__year">{props.year}</span>
            <span className="Product__price">{props.price}</span>
            <button className="Product__addToButton" onClick={props.click}>Add to the Basket</button> 
        </li> 
    ); 
};
   
export default Product;