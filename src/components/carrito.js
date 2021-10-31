import { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import { CartContext } from './context/CartContext';
import runaway from './img/runaway5.png';

export const Carrito = () =>{

    const {calcularCantidad} = useContext(CartContext)

    return(
        <div style={{
            display: calcularCantidad() === 0 ? "none" : "block"
        }}>
            <FaShoppingCart className="icon"/>
            <span>{calcularCantidad()}</span>
        </div>
        
    )
    
}
export const Logo = () =>{
    return(
        <img src= {runaway} alt="Logo de pagina" height="80px" width="220px"/>
    )
}