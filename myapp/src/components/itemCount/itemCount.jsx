import React from "react";
import { useContext } from "react";
import "./itemCount.scss"
import { ProductsContext } from '../cartContext/ProductsContext'

export default function ItemCount({ item, numero, subtractToCart, sumToCart }) {
    const context = useContext(ProductsContext)

    function addToCart() {
        let adding = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: numero,
        }
        context.bag(adding)
    }

    return (
    <div className="counter">
        {numero > 1 && <button onClick={subtractToCart}>-</button>}
        <div className="number">
            <span>{numero}</span>
        </div>
        {numero < item.stock && <button onClick={sumToCart}>+</button>}
        <div>
            <button onClick={addToCart}>Agregar a la bolsa</button>
        </div>
    </div>)


}