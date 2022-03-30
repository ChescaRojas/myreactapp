import React from "react";
import './navBarComponent.scss';
import  CartWidget from '../cartWidget/cartWidget'
import { Link } from 'react-router-dom'

export default function NavBarComponent({intemsInCart}){
      return( <nav className="navBar">
        <Link to="/"><a><h1>LOGO</h1></a></Link>
        <Link to="/"><a>Inicio</a></Link>
        <Link to="/"><a>Productos</a></Link>
        <Link to="/"><a>Nosotros</a></Link>
        <CartWidget number={intemsInCart}/>
      </nav>)
}