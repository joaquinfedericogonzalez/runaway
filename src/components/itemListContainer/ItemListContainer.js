import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/config";
import { ItemList } from "./ItemList";


export const ItemListContainer = ({titulo}) => {

    const [items, setItems] = useState ([])
    const [loading, setLoading] = useState(false)

    
    const {categoryId} = useParams()



    useEffect(()=>{
        setLoading(true)
    
        const db = getFirestore()
        const productos = categoryId 
                                        ? db.collection('productos').where('category', '==', categoryId)
                                        : db.collection('productos')


            productos.get()
            .then((Response) =>{
                const newItems = Response.docs.map((doc) =>{
                    return {id: doc.id, ...doc.data()}

                })
                console.log(newItems)
                setItems(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)})


        


    }, [categoryId, setLoading])

    return(
        
            <section className="container my-5">
                <h1>{titulo}</h1> 
                {loading 
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={items}/>
                }
            </section>
        
        
    ) 
    
        
}

