import React, { useContext } from "react";
import "./cartSidebarContainer.scss"


export default function CartSidebarContainer({priceContext}) {
  return (<div className="bagSidebar">
    <p>Precio total:</p>
    {priceContext}
  </div>)

}