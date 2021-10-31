import Button from '@restart/ui/esm/Button';
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { CartCounter } from './CartCount';


export const CartScreen = ({id,name,detail,price,category,image,stock}) =>{

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)

    const [cant, setCant] = useState (0)

    const addItem = () => {
        const newItem = {
            id, 
            name,
            detail,
            price,
            category,
            image,
            stock
        }
    }

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
                                    <img className="tamaño" src={prod.image}/>
                                    <h4>{prod.name}</h4>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio:{prod.price * prod.cantidad}</p>
                                    <CartCounter cant={cant} modify={setCant} max={stock}/>
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
                    
                    </>
            }


            
        </div>
    )
}