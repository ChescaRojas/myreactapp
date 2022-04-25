import React from "react";
import { Link } from 'react-router-dom'
import "./item.scss"

export default function Item({ item, setItemDetail }) {
  function selectItem() {
    setItemDetail(item)
  }
  return (
    <Link to={`/item/${item.id}`}>
      <div onClick={selectItem} className="bag">
      <div className="">
           <p className="bag__span">{item.price}</p>
          <p className="bag__span">{item.name}</p>
        </div>
        <div className="bag__img">
          <img className="image" src={item.url} />
        </div>
      </div>
    </Link>)

}