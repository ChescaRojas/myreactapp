import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import "./cartWidget.scss"

export default function CartWidget({number}) {

      return (<button>
          <FaShoppingBag/>
          <p>{number}</p>
        </button>)
        
}