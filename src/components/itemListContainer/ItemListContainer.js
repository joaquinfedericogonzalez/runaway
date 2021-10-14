import React, {useEffect, useState} from "react";
import { pedirProductos } from "../../helpers/pedirProductos";
import { ItemList } from "./ItemList";


export const ItemListContainer = ({titulo}) => {

    const [items, setItems] = useState ([])
    const [loading, setLoading] = useState(false)

    console.log(items)
    
    useEffect(()=>{
        // MOCK LLAMANDO A LA API
        setLoading(true)

        pedirProductos()
            .then((res) => {
                setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
                console.log("Fin del llamado")
            })
    }, [])

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

