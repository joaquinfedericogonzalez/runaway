import React from "react";
import { Card, Button } from "react-bootstrap";

export const Item = ({item}) =>{
    console.log(item)
    return(
            <div className="card" >
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.detalle}</Card.Text>
                        <Card.Text>Precio: ${item.precio}</Card.Text>
                        <Button variant="primary">Agregar al carrito por ${item.precio}</Button>
                    </Card.Body>
                </Card>
            </div>
        
    )
}