import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import "./cartWidget.scss"

export default function CartWidget({numero}) {

      return (<button>
          <FaShoppingBag/>
          <p>{numero}</p>
        </button>)
        
}