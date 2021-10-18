import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({item}) =>{
    console.log(item)
    return(
            <div  >
                <Card className="card" border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={item.image}/>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>Precio: ${item.price}</Card.Text>
                        <Link to={`/detail/${item.id}`}>
                            <Button variant="dark">Ver mas</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        
    )
}