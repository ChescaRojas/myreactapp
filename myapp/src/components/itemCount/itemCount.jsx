import React from "react";
import { useState } from "react";
import "./itemCount.scss"

export default function ItemCount({ stock, numero, subtractToCart, sumToCart, addToCart }) {

    return (
    <div className="counter">
        {numero > 1 && <button onClick={subtractToCart}>-</button>}
        <div className="number">
            <span>{numero}</span>
        </div>
        {numero < stock && <button onClick={sumToCart}>+</button>}
        <div>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    </div>)


}