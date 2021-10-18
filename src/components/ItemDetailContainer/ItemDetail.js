import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";

export const ItemDetail = (item) =>{

    const {goBack} =  useHistory()

    return(
        <div className="container">
            <div className="row">
                <Card className="card" border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.detail}</Card.Text>
                        <Card.Text>Precio: ${item.price}</Card.Text>
                        <Button variant="dark">Agregar al carrito</Button>
                        <Button variant="dark" onClick={()=> goBack()}>Volver</Button>
                    </Card.Body>
            </Card>
            </div>
        </div>
    )
}