import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import "./cartWidget.scss"

export default function CartWidget({cantidad}) {

      return (<button>
          <FaShoppingBag/>
          <p>{cantidad}</p>
        </button>)
        
}