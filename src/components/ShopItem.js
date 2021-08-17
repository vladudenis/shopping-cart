import React from "react";
import styled from "styled-components";

const ShopItem = ({ name, shorthand, src, price, qty }) => {
  return(
    <Item>
      <img src={src} alt={name + " Logo"}></img>
      <div>
        <h4>{name} ({shorthand})</h4>
        <p>Price: ${price}</p>
      </div>
    </Item>
  );
};

const Item = styled.div`
  width: 350px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  margin: 10px 10px;
  grid-gap: 50px;
  & img{
    margin-top: 30px;
  }
  & div{
    text-align: center;
  }
`;

export default ShopItem;