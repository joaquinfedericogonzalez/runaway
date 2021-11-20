import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs'
import {Button} from 'react-bootstrap';
import './CartScreen.css'




export default function ProductCard( {prod, onClick}) {
    return(
        <div className="carro">
            <img className="tamaño" src={prod.image} alt="imagen producto"/>
            <h4>{prod.name}</h4>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio:{prod.price * prod.cantidad}</p>
            <Button  className="btn btn-danger" onClick={ onClick }>
                <BsFillTrashFill/>
            </Button>
        </div>
    )
    
}