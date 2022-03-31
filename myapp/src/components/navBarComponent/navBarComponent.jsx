import React from "react";
import './navBarComponent.scss';
import  CartWidget from '../cartWidget/cartWidget'
import { Link } from 'react-router-dom'

export default function NavBarComponent({intemsInCart}){
      return( <nav className="navBar">
        <Link to="/"><a><h1>TULIPAN</h1></a></Link>
        <Link to="/"><a>Inicio</a></Link>
        <Link to="/"><a>Nosotros</a></Link>
        <Link to="/"><a>Ocasiones</a></Link>
        <CartWidget number={intemsInCart}/>
      </nav>)
}