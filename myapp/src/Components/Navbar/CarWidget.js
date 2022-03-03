import React from 'react'
import {
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import { FaShoppingCart } from 'react-icons/fa';

const CarWidget = () => {
    return (
        <div>
            <NavBtn>
                <NavBtnLink to="/signin">
                    <FaShoppingCart/>
                </NavBtnLink>
            </NavBtn>
        </div>
    )
}

export default CarWidget
