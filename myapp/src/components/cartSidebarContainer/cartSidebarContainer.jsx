import React from "react";
import "./cartSidebarContainer.scss"


export default function CartSidebarContainer({price}) {
  return (<div className="bagSidebar">
    <p>Total a pagar:</p>
    {'$ '+ price}
  </div>)
  
}