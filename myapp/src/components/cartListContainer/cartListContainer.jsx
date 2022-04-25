import React, { useContext } from "react";
import CartListComponent from "../cartListComponent/cartListComponent";
import CartSidebarContainer from "../cartSidebarContainer/cartSidebarContainer";
import "./cartListContainer.scss"
import { ProductsContext } from '../cartContext/ProductsContext'


export default function CartListContainer() {
  const {cartContext , priceContext, Less, Plus} = useContext(ProductsContext)
  return (<div className="cartView">
    {cartContext.length > 0 ? (
    <div className="cartItemList">
      <CartListComponent items={cartContext} Less={Less} Plus={Plus} /> 
      <CartSidebarContainer priceContext={priceContext}/>
    </div> 
    ) : <div>Empty</div>}
  </div>)

}