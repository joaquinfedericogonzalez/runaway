import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    console.log(itemId)
    useEffect(()=>{
        setLoading(true)


        pedirProductos()
            .then( res =>{
                setItem( res.find( item => item.id === Number(itemId) ) )
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [itemId])

    return(
        <div>
            {
                loading ? <h3>Cargando...</h3>
                : <ItemDetail {...item}/>
            }


        </div>
    )
}