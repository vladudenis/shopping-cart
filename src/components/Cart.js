import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = ({ cartItems, removeFromCart, findCoin, changeQuantity }) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.qty * item.price;
  });

  if(cartItems.length === 0){
    return(
      <Background>
        <CartItemWrapper>
          <h1>Your Cart Is Empty!</h1>
        </CartItemWrapper>
      </Background>
    );
  }else if(cartItems.length > 0){
    return(
      <Background>
        <CartItemWrapper>
          {
            cartItems.map((item) => {
              return(
                <CartItem
                  item={item}
                  removeFromCart={removeFromCart} 
                  findCoin={findCoin}
                  changeQuantity={changeQuantity} 
                />
              );
            })
          }
        </CartItemWrapper>
        <Footer>
          <h1>Total: ${total}</h1>
          <Button>Buy Coins</Button>
        </Footer>
      </Background>
    );
  }
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  background-color: beige;
  min-height: 90vh;
`;

const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
  margin-bottom: 10rem;
  padding-top: 3rem;
  background-color: white;
  border-radius: 10px;
  width: 80%;
`;

const Button = styled.button`
  color: black;
  background-color: white;
  margin: 3rem 0;
  background-image: linear-gradient(white, white 50%, #999999 50%, #999999);
  background-size: 100% 200%;
  transition: background-position .3s;
  width: 100px;
  height: 40px;
  font-size: 14px;
  border: 1px solid black;
  &:hover{
    background-position: 0 -100%
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7rem;
`;

export default Cart;