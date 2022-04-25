import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import "./itemCount.scss"
import { ProductsContext } from '../cartContext/ProductsContext'

export default function ItemCount({ item, numero, subtractToCart, sumToCart }) {
    const context = useContext(ProductsContext)
    const [additional, setadditional] = useState(false)

    function addToCart() {
        let itemToSend = {... item}
        itemToSend["quantity"] =  numero
        setadditional(true)
        context.onAdd(itemToSend)
    }

    return (additional ? 
        <Link to="/bag"><div className="bag" onClick={addToCart}>Ver bolsa</div></Link> :
     <div className="itemButtons">
        <div className="counter">
            <button disabled={numero <= 1} onClick={subtractToCart}>-</button>
            <div className="number">
                <span>{numero}</span>
            </div>
            <button disabled={numero >= item.stock} onClick={sumToCart}>+</button>
        </div>
        <div className="bag" onClick={addToCart}>Agregar a la bolsa</div>
    </div>)


}