import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/config";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    console.log(itemId)
    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()  
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
            .then((doc) =>{
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [itemId, setLoading])

    return(
        <div>
            {
                loading ? <h3>Cargando...</h3>
                : <ItemDetail {...item}/>
            }


        </div>
    )
}