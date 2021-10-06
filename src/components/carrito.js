import React from 'react';
import carro from './img/compras.png';

export const Carrito = ({imgCarrito}) =>{
    return(
        <img src= {carro} alt="carrito de compras" height="40px" width="40px"/>
    )
}