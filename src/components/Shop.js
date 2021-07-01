import React from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";

const Shop = ({ coins }) => {
  return(
    <Background>
      <ShopItemWrapper>
        {
          coins.map((coin) => {
            return(
              <ShopItem 
                name={coin.name} 
                shorthand={coin.shorthand}
                src={coin.src}
                price={coin.price}
                qty={coin.qty} 
              />
            )
          })
        }
      </ShopItemWrapper>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  background-color: beige;
  min-height: 90vh;
`;

const ShopItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
  padding-top: 3rem;
  background-color: white;
  border-radius: 10px;
  max-width: 80%;
`;

export default Shop;