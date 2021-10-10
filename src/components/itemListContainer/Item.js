import React from "react";
import { Card, Button } from "react-bootstrap";

export const Item = ({item}) =>{
    console.log(item)
    return(
        <div className="col-xl-4">
            <Card style={{ width: '18rem' }} className="col-xl-6">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.detalle}</Card.Text>
                    <Card.Text>Precio: ${item.precio}</Card.Text>
                    <Button variant="primary">Ver Mas</Button>
                </Card.Body>
            </Card>
        </div>
    )
}