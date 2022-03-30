import React from "react";
import { useState } from "react";
import ItemCount from "../itemCount/itemCount";
import "./itemDetail.scss"

export default function ItemDetail({ item }) {
  const [cantidad, setCantidad] = useState(1);

    function addToCart() {
        if (cantidad < item.stock)
            setCantidad(cantidad + 1)
    }
    function subtractToCart() {
        if (cantidad > 1)
            setCantidad(cantidad - 1)
    }
  return (<div className="itemDetails">
    <img className="itemDetails__image" src={item.url} />
    <div className="itemDetails__card">
      <span  className="itemDetails__card__name" >{item.name}</span>
      <span  className="itemDetails__card__description" >{item.description}</span>
      <span  className="itemDetails__card__price" >{'$'+item.price}</span>
    </div>
    <div className="itemDetails__count">
    <ItemCount cantidad={cantidad} stock={item.stock} addToCart={addToCart} subtractToCart={subtractToCart} />
    </div>
  </div>)

}