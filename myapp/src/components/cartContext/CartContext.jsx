import React, { useState } from "react";
import { ProductsContext } from "./ProductsContext";

export default function CartContext({ children }) {
    const [cartContext, setCartContext] = useState([]);

    function bag(item){
      const aux = cartContext.findIndex(producto => producto.id == item.id)

      if(aux >= 0 ){
        cartContext[aux].quantity = cartContext[aux].quantity + item.quantity;
        setCartContext(cartContext)
      }
      else
        setCartContext([...cartContext,item])
      console.log("bolsa de compra:  ", cartContext)
    }
    
    return (<ProductsContext.Provider value={{cartContext, bag}}>
        {children}
    </ProductsContext.Provider>)
  
  }