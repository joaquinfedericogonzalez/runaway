import React from 'react'
import { Item } from './Item'
export const ItemList = ( {items = []} ) => {
    return(
        <div>
            <div>
                            {items.map((item) => <Item item={item} key={item.id} /> )}
            </div>
        </div>
    )

}