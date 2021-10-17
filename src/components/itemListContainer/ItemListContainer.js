import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemList } from "./ItemList";


export const ItemListContainer = ({titulo}) => {

    const [items, setItems] = useState ([])
    const [loading, setLoading] = useState(false)

    
    const {categoryId} = useParams()



    useEffect(()=>{
        // MOCK LLAMANDO A LA API
        setLoading(true)

        pedirProductos()
            .then((res) => {
                if(categoryId){
                    setItems( res.filter(items => items.category === categoryId))
                }
                else{
                    setItems( res )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return(
        
            <section className="container my-5">
                <h1>{titulo}</h1> 
                {loading 
                    ? <h2>Cargando...</h2>
                    : <ItemList items={items}/>
                }
            </section>
        
        
    ) 
    
        
}

