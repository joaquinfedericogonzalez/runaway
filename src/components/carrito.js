import { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { CartContext } from './context/CartContext';
import runaway from './img/runaway2.png';

export const Carrito = () =>{

    const {calcularCantidad} = useContext(CartContext)

    return(
        <div>
            <FaShoppingCart className="icon"/>
            <span>{calcularCantidad()}</span>
        </div>
        
    )
    
}
export const Logo = () =>{
    return(
        <img src= {runaway} alt="Logo de pagina" height="60px" width="280px"/>
    )
}