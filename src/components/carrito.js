import {FaShoppingCart} from 'react-icons/fa';
import runaway from './img/runaway2.png';

export const Carrito = ({ImgCarrito}) =>{
    return(
        <FaShoppingCart className="icon"/>
    )
    
}
export const Logo = ({}) =>{
    return(
        <img src= {runaway} alt="Logo de pagina" height="60px" width="280px"/>
    )
}