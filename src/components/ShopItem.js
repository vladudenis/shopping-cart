import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShopItem = ({ name, shorthand, src, price, qty }) => {
  return(
    <Link to={{
      pathname: `/shop/${shorthand}`,
      state: {
        name: name,
        shorthand: shorthand,
        src: src,
        price: price,
        qty: qty
      }
    }}>
      <Item>
        <img src={src} alt={name + " Logo"}></img>
        <div>
          <h4>{name}</h4>
          <p>Price: ${price}</p>
        </div>
      </Item>
    </Link>
  );
};

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  margin: 0 10px;
  margin-bottom: -40px;
  grid-gap: 10px;
  max-height: 250px;
  & div{
    text-align: center;
  }
`;

export default ShopItem;