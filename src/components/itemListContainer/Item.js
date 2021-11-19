import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Item.css'

export const Item = ({id,image,name,price}) =>{
    return(
            <div  >
                <Card className="card" border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={image}/>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>Precio: ${price}</Card.Text>
                        <Link to={`/detail/${id}`}>
                            <Button variant="dark">Ver mas</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        
    )
}