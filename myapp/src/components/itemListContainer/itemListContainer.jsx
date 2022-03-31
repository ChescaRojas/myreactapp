import React, { useState } from "react";
import ItemList from "../itemListComponent/itemList";
import "./itemListContainer.scss"

export default function ItemListContainer({setItemDetail}) {
  const [products, setProducts] = useState([]);
  const mockProducts = [
    {
      id: "1",
      name: "Tulipan",
      price: "$" + 250,
      stock: 5,
      description: "Ramos de tulipanes",
      url: "https://m.media-amazon.com/images/I/71bU-SlZtGL._AC_SL1500_.jpg"
    },
    {
      id: "2",
      name: "Girasoles",
      price: "$" + 350,
      stock: 5,
      description: "Ramos de girasoles",
      url: "https://cdn.domestika.org/c_fit,dpr_1.0,f_auto,t_base_params,w_820/v1597989013/content-items/005/559/398/IMG_6129_2-original.jpg?1597989013"
    },
    {
      id: "3",
      name: "Rosa",
      price: "$" + 500,
      stock: 5,
      description: "Ramos de rosas",
      url: "https://png.pngtree.com/png-clipart/20210309/original/pngtree-two-blooming-red-roses-flower-photography-picture-png-image_5809549.jpg"
    },
    {
      id: "4",
      name: "Cala",
      price: "$" + 750,
      stock: 5,
      description: "Ramos de Cala",
      url: "https://1.bp.blogspot.com/-nAQ5i1R0sSM/XmDeUYGPOTI/AAAAAAAA7P8/_PiEcA2Vw-QoO6sLwUKb9Hf_zbL6CtDywCLcBGAsYHQ/s1600/cala.jpg"
    },
  ]

  const aux = new Promise((res) => {
    setTimeout(()=>{
      res(setProducts(mockProducts))
    }, 1000)
  })

  return (<div className="itemList">
    {products.length ? <ItemList items={products} setItemDetail={setItemDetail} /> : "Cargando..."}
  </div>)

}