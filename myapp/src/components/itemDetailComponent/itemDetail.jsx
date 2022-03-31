import React from "react";
import { useState } from "react";
import ItemCount from "../itemCount/itemCount";
import "./itemDetail.scss"

export default function ItemDetail({ item }) {
  const [numero, setNumero] = useState(1);

    function sumToCart() {
        if (numero < item.stock)
          setNumero(numero + 1)
    }
    function subtractToCart() {
        if (numero > 1)
          setNumero(numero - 1)
    }

  const addToCart = (item) => {
      console.log(item)
    }

  return (<div className="itemDetails">
    <img className="itemDetails__image" src={item.url} />
    <div className="itemDetails__card">
      <span  className="itemDetails__card__name" >{item.name}</span>
      <span  className="itemDetails__card__description" >{item.description}</span>
      <span  className="itemDetails__card__price" >{item.price}</span>
    </div>
    <div className="itemDetails__count">
    <ItemCount numero={numero} stock={item.stock} sumToCart={sumToCart} subtractToCart={subtractToCart} addToCart={addToCart}/>
    </div>
  </div>)

}