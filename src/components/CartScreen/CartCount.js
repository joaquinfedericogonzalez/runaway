import React from "react";


export const CartCounter = ({cant, modify, max}) => {

    const handleRestar = () =>{
        if (cant > 0){
            modify(cant - 1)
        }
        
    }

    const handleSumar = () =>{
        if (cant < max){
            modify(cant + 1)
        }
    }

    return(

        <div>
            <button onClick={handleRestar} className="btn mx-3">
                -
            </button>

            <span>{cant}</span>

            <button onClick={handleSumar} className="btn mx-3">
                +
            </button>

        </div>

    )


}