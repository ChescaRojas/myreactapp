import React from "react";
import './navBarComponent.scss';
import  CartWidget from '../cartWidget/cartWidget'
export default function NavBarComponent({intemsInCart}){
      return( <div className="navBar">
        <a className="selectMenu">
          <h1>LOGO</h1>
          </a>
        <a className="selectMenu">Inicio</a>
        <a className="selectMenu">Flores</a>
        <a className="selectMenu">Contactanos</a>
        <a className="selectMenu">Servicio</a>
        <CartWidget number={intemsInCart}/>
      </div>)
}