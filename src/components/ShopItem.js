import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShopItem = ({ src, name, shorthand, price = 0 }) => {
  return(
    <Link to={{
      pathname: `/shop/${shorthand}`,
      state: {
        src: src,
        name: name,
        shorthand: shorthand
      }
    }}>
      <Card>
        <img src={src} alt={name + " Logo"}></img>
        <div>
          <h4>{name}</h4>
          <p>Price: {price}</p>
        </div>
      </Card>
    </Link>
  );
};

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  margin: 0 10px;
  grid-gap: 10px;
  max-height: 250px;
  & div{
    text-align: center;
  }
`;

export default ShopItem;