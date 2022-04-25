import React, { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export default function CartContext({ children }) {
  const [cartContext, setCartContext] = useState([]);
  const [countContext, setCountContext] = useState(0);
  const [priceContext, setPriceContext] = useState(0);

  function bag(item) {
    let auxUno = findItem(item.id)
    if (auxUno < 0) {
      const aux = [...cartContext]
      aux[auxUno].quantity += item.quantity;
      setCartContext(aux)
    }
    else
      setCartContext([...cartContext, item])
  }

  function Less(item) {
    let auxUno = findItem(item.id)
    if (auxUno < 0) {
      const aux = [...cartContext]
      if (aux[auxUno].quantity - 1 === 0) {
        aux.splice(auxUno, 1);
      }
      else
        aux[auxUno].quantity -= 1;
      setCartContext(aux)
    }
  }

  function Plus(item) {
    let auxUno = findItem(item.id)
    if (auxUno < 0) {
      const aux = [...cartContext]
      aux[auxUno].quantity += 1;
      setCartContext(aux)
    }
  }

  const findItem = (itemId) => cartContext.findIndex(product => product.id == itemId)
  useEffect(() => {
    let elementsCount = 0
    let totalPrice = 0
    if (cartContext.length > 0)
      cartContext.forEach(product => {
        elementsCount += product.quantity
        totalPrice += product.priceContext * product.quantity
      })
    setCountContext(elementsCount)
    setPriceContext(totalPrice)
  }, [cartContext]);

  return (<ProductsContext.Provider value={{ cartContext, countContext, priceContext, bag, Less, Plus }}>
    {children}
  </ProductsContext.Provider>)

}