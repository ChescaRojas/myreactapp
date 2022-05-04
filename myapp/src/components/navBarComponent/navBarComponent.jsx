import React, { useContext } from "react";
import './navBarComponent.scss';
import  CartWidget from '../cartWidget/cartWidget'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../cartContext/ProductsContext'


export default function NavBarComponent(){
  const bag = useContext(ProductsContext)
      return( <nav className="navBar">
        <Link to="/"><a><h1>TULIPAN</h1></a></Link>
        <Link to="/"><a>Nosotros</a></Link>
        <Link to="/"><a>Ocasiones</a></Link>
        <Link to="/bag"><CartWidget number={bag.countContext}/></Link>
      </nav>)
}