import React from "react";
import {Button} from "react-bootstrap"


export const ItemCount = ({cantidad, modify, max}) =>{

    const handleRestar = () => {
        if (cantidad > 1){
            modify(cantidad -1)
        }
        
    }


    const handleSumar = () => {
        if (cantidad < max){
            modify(cantidad +1)
        }
        
    }


    return(
        <div>
            <Button onClick={handleRestar} variant="dark" className="btn btn-primary mx-3 my-3">-</Button>
            
                <span>{cantidad}</span>

            <Button onClick={handleSumar} variant="dark" className="btn btn-primary mx-3 my-3">+</Button>

            

        </div>
    )
    
}