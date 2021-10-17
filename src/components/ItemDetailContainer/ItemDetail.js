import React from "react";
import { Card, Button } from "react-bootstrap";

export const ItemDetail = ({item}) =>{
    return(
        <div>
            <Card className="card" border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.detail}</Card.Text>
                        <Card.Text>Precio: ${item.price}</Card.Text>
                        <Button variant="primary">Agregar al carrito</Button>
                    </Card.Body>
            </Card>
        </div>
    )
}