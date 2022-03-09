import React from 'react';
import CarWidget from './CarWidget';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about">
                        Acerca de
                    </NavLink>
                    <NavLink to="/services">
                        Servicio
                    </NavLink>
                    <NavLink to="/contact-us">
                        Contactanos
                    </NavLink>
                    <NavLink to="/sign-up">
                        Sign up
                    </NavLink>
                </NavMenu>

                <CarWidget />

            </Nav>
        </>
    )
}

export default Navbar;