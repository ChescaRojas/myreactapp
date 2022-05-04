import React, { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export default function CartContext({ children }) {
  const [cartContext, setCartContext] = useState([]);
  const [countContext, setCountContext] = useState(0);
  const [price, setPrice] = useState(0);
  let totalToPay = 0;

  function onAdd(item) {
    let auxUno = findItem(item.id)
    if (auxUno != -1) {
      const aux = [...cartContext]
      aux[auxUno].quantity += item.quantity;
      setCartContext(aux)
      console.log('entre en el if')
    }
    else
      setCartContext([...cartContext, item])
      console.log('entre en el else')
  }

  function Less(item) {
    let auxUno = findItem(item.id)
    if (auxUno != -1) {
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
    if (auxUno != -1) {
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
        totalPrice += product.price * product.quantity
      })
    setCountContext(elementsCount)
    setPrice(totalPrice)
  }, [cartContext]);

  return (<ProductsContext.Provider value={{ cartContext, countContext, price, onAdd, Less, Plus }}>
    {children}
  </ProductsContext.Provider>)

}