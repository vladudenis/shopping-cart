import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = ({ cartItems, removeFromCart, changeQuantity }) => {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.qty * item.price;
  });
  if(cartItems.length === 0){
    return(
      <div>test</div>
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
                  changeQuantity={changeQuantity} 
                />
              );
            })
          }
        </CartItemWrapper>
        <Footer>
          <h1>Total: ${total}</h1>
          <LargeButton>Buy Coins</LargeButton>
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
  color: white;
  background-color: black;
  margin: 10px 5px;
  border-radius: 10px;
`;

const LargeButton = styled(Button)`
  width: 100px;
  height: 25px;
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