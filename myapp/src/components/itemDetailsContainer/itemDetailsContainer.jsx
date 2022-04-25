import React from "react";
import ItemDetail from "../itemDetailComponent/itemDetail";
import "./itemDetailsContainer.scss"

export default function ItemDetailsContainer({item}) {

  return (<div className="container">
    {item && <ItemDetail item={item}/>}
  </div>)

}