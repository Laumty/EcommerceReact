import React from 'react'
import Item from '../Item/Item'

const ItemList = ( {items} ) => {
  return (
    <div style={ {
        backgroundColor: "white",
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        border:"solid 1px black",
        gap:"5px",
        marginTop:"1rem"
    } } >

        {
            items.map( (element)=>{
                return <Item key={element.id} element={element} />
            } )
        }

    </div>
  )
}

export default ItemList