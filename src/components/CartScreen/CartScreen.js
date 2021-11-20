import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import ProductCard from './ProductCard';
import './CartScreen.css'


export const CartScreen = () =>{

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)


    return(
        <div className="container my-5">

            {
                carrito.length === 0
                ? <>
                    <h2>¡Tu carrito esta vacio!</h2>
                    <Link to="/">
                    <Button className="btn">
                        Volver al home
                    </Button>
                    </Link>                
                
                </>
                :
                    <>
                    
                        <h2>Resumen de compra</h2>
                        <hr/>
                        {
                            carrito.map( (prod, index) => (
                                <ProductCard prod={prod} onClick={() => removeItem (prod.id)} key={ index + prod.id}/>
                            ) )
                        }
                        <hr/>
                        <h3 className="my-3">Precio total: $ {calcularTotal()}</h3>
                        <Button className="btn btn-danger" onClick={vaciarCarrito}>
                            Vaciar carrito
                        </Button>
                        
                        <Link to="/checkout" className="btn mx-3">
                            Finalizar compra
                        </Link>
                    </>
            }


            
        </div>
    )
}