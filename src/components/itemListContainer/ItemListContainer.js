import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router";
import { Loader } from "../Loader/Loader";
import { getFirestore } from "../../firebase/config";
import { ItemList } from "./ItemList";
import { UIContext } from "../context/UIContext";



export const ItemListContainer = ({titulo}) => {

    const [items, setItems] = useState ([])
    const {loading, setLoading} = useContext(UIContext)

    
    const {categoryId} = useParams()



    useEffect(()=>{
        setLoading(true)
    
        const db = getFirestore()
        const productos = categoryId 
                                        ? db.collection('productos').where('category', '==', categoryId)
                                        : db.collection('productos')


            productos.get()
            .then((response) =>{
                const newItems = response.docs.map((doc) =>{
                    return {id: doc.id, ...doc.data()}

                })
                setItems(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)}
            )


        


    }, [categoryId, setLoading])

    return(
        
            <section className="container my-5">
                <h1>{titulo}</h1> 
                {loading 
                    ? <Loader/>
                    : <ItemList productos={items}/>
                }
            </section>
        
        
    ) 
    
        
}

