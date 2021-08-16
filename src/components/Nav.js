import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { RiShoppingCartLine } from "react-icons/ri";

const Nav = ({ cartItems = 0 }) => {
    return(
        <NavWrapper>
            <Link to="/">
                <H3>CRYPTO KIOSK</H3>
            </Link>
            <ListWrapper>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
                <Link to="/cart">
                    <li>
                        <RiShoppingCartLine size={20} />
                        <Counter>{cartItems}</Counter>
                    </li>
                </Link>
            </ListWrapper>
        </NavWrapper>
    );
}

const H3 = styled.h3`
    border-bottom: 4px solid white;
    display: inline;
`;

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 10vh;
    padding: 3.5rem 6rem;
`;

const ListWrapper = styled.ul`
    display: flex;
    list-style-type: none;
    & > a{
        padding: 0 2rem;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        overflow: hidden;
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            right: 100%;
            bottom: 0;
            background: #d9b382;
            height: 4px;
            -webkit-transition-property: right;
            transition-property: right;
            -webkit-transition-duration: 0.2s;
            transition-duration: 0.2s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before {
            right: 0;
        }
        &:hover{
            color: #d9b382;
        }
    }
`;

const Counter = styled.span`
    width: 20px;
    height: 20px;
    font-size: 15px;
    font-weight: bold;
    position: absolute;
    top: 0%;
    right: 0%;
    border-radius: 80px;
`;

export default Nav;