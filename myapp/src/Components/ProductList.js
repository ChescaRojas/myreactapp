import React, { useState } from 'react'

function ProductList() {
    const[flowers, setFlowers]= useState([
        {id:1, name:"cala", price:"250"},
        {id:2, name:"girasoles", price:"270"},
        {id:3, name:"tulipan", price:"200"}
    ])


  return (
    <ul>
        <br></br>
      {flowers.map((elemento, i)=><li key={i}>{elemento.name}</li>)}
      <br></br>
      {flowers.map(elemento=><li key={elemento.id}>{elemento.price}</li>)}
    </ul>
  )
}

export default ProductList
