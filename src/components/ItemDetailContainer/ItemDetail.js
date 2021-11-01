import React, { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ItemCount } from "../../components/ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({id,name,detail,price,category,image,stock}) =>{

    const {goBack} =  useHistory()

    const {addToCart, IsInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () =>{
        const newItem = {
            id,
            image,
            name,
            price,
            category,
            cantidad
        }
        if (cantidad > 0){
            addToCart(newItem)
        }
        
    }

    return(
        <div className="container">
            <div className="row">
                <Card className="card" border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img src={image} alt="imagen del producto" />
                        <ItemCount cantidad={cantidad} modify={setCantidad} max={stock}/>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{detail}</Card.Text>
                        <Card.Text>Precio: ${price}</Card.Text>
                        {IsInCart(id)
                        ? <Link to="/carrito" className="btn"><Button variant="dark">Terminar Compra</Button></Link>
                        :<Button variant="dark" onClick={handleAgregar}>Agregar al carrito</Button>
                        }
                        <Button variant="dark" onClick={()=> goBack()}>Volver</Button>
                        
                    </Card.Body>
            </Card>
            
            </div>
        </div>
    )
}