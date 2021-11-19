
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
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
                    
                        <h2>Resumen de mi compra</h2>
                        <hr/>
                        {
                            carrito.map( (prod) => (
                                <div className="carro">
                                    <img className="tamaño" src={prod.image} alt="imagen producto"/>
                                    <h4>{prod.name}</h4>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio:{prod.price * prod.cantidad}</p>
                                    <Button  className="btn btn-danger" onClick={() => removeItem (prod.id) }>
                                        <BsFillTrashFill/>
                                    </Button>
                                </div>
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