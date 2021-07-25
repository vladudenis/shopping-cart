import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";

const Nav = ({cartItems = 0}) => {
    return(
        <NavWrapper>
            <Link to="/shopping-cart">
                <h3>Crypto Kiosk</h3>
            </Link>
            <ListWrapper>
                <Link to="#">
                    <FiSearch />
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart ({cartItems})</li>
                </Link>
            </ListWrapper>
        </NavWrapper>
    );
}

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 10vh;
    padding: 4rem 2rem;
`;

const ListWrapper = styled.ul`
    display: flex;
    list-style-type: none;
    & > a{
        padding: 0 5rem;
    }
`;

export default Nav;