import React from "react";
import CartItemComponent from "../cartItemComponent/cartItemComponent";
import "./cartListComponent.scss"

export default function CartListComponent({items, Plus, Less}) {
  
      return (<div className="cartMapList">{items.map(item =>
        <CartItemComponent id={item.id} item={item} Less={Less} Plus={Plus}/>
      )}</div>)
        
}