import React, { useContext } from "react";
import "./itemCount.scss"
import { ProductsContext } from '../cartContext/ProductsContext'

export default function ItemCount({ item, numero, subtractToCart, sumToCart }) {
   
    const context = useContext(ProductsContext)

    function addingToBag() {
        let itemAdded = { ...item }
        itemAdded["quantity"] = numero
        context.onAdd(itemAdded)
    }

    return (
        <div className="itemButtons">
            <div className="addbag" onClick={addingToBag}>Comprar</div>
            <div className="counter">
                <button disabled={numero <= 1} onClick={subtractToCart}>-</button>
                <div className="number">
                    <span>{numero}</span>
                </div>
                <button disabled={numero >= item.stock} onClick={sumToCart}>+</button>
            </div>
        </div>)

}