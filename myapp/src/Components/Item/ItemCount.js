import React, { useState } from 'react'

function ItemCount({inicial, stock}) {
    const [number, setNumber] = useState(inicial);

    function subtrackToCart() {
        if (number > 0) {
            setNumber(number -1)
        }
    }

    function addToCart() {
        if (number <= stock) {
            setNumber(number + 1)
        }
    }

    return (
        <div>
            <button onClick={subtrackToCart}>-</button>
            <p>{number}</p> 
            <button onClick={addToCart}>+</button>
        </div>
      )
}


export default ItemCount
