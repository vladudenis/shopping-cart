import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Nav = () => {
  return(
      <nav>
          <h3>Logo Placeholder</h3>
          <ListWrapper>
              <Link to="/shop">
                  <li>Shop</li>
              </Link>
              <Link to="/cart">
                  <li>Cart</li>
              </Link>
          </ListWrapper>
      </nav>
  );
}

const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 15vh;
`;

export default Nav;