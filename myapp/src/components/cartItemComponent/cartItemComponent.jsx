import React from "react";
import "./cartItemComponent.scss"

export default function CartItemComponent({ item, Less, Plus}) {

  return (
      <div className="cartCard">
        <div className="cartCard__img">
          <img className="image" src={item.url} />
        </div>
        <div className="">
          <p className="cartCard__span">{item.name}</p>
          <div className="cartCard__counter">
            <button disabled={item.quantity <= 1} onClick={() => Less(item)}>-</button>
            <div className="cartCard__counter__quantity">
                <span>{item.quantity}</span>
            </div>
            <button disabled={item.quantity >= item.stock} onClick={() => Plus(item)}>+</button>
        </div>
          <p className="cartCard__span">{item.price}</p>
        </div>
      </div>)

}