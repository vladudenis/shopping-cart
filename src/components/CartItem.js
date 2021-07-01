import React, { useRef } from "react";
import styled from "styled-components";

const CartItem = ({item, removeFromCart, changeQuantity}) => {
    const inputElement = useRef(null);
  
    const decrementQuantity = () => {
      if(inputElement.current.value > 1){
        inputElement.current.value--;
        changeQuantity(item, inputElement.current.value);
      }
    }
  
    const incrementQuantity = () => {
      inputElement.current.value++;
      changeQuantity(item, inputElement.current.value);
    }

    const newQuantity = () => {
      changeQuantity(item, inputElement.current.value);
    }

    const removeItem = () => {
        removeFromCart(item);
    }

    return(
        <Item>
          <img src={item.src} alt={item.name + " Logo"}></img>
          <div>
              <h4>{item.name}</h4>
              <p>Price: ${item.price * item.qty}</p>
          </div>
          <span>
              <SmallButton onClick={decrementQuantity}>-</SmallButton>
              <Input 
                defaultValue={item.qty}
                onChange={newQuantity}
                ref={inputElement}
              />
              <SmallButton onClick={incrementQuantity}>+</SmallButton>
          </span>
          <LargeButton onClick={removeItem}>Remove</LargeButton>
        </Item>
    )
}

const Item = styled.div`
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

const Button = styled.button`
  color: white;
  background-color: black;
  margin: 10px 5px;
  border-radius: 10px;
`;

const SmallButton = styled(Button)`
  width: 30px;
  height: 25px;
`;

const LargeButton = styled(Button)`
  width: 100px;
  height: 25px;
`;

const Input = styled.input`
  max-width: 40px;
  text-align: center;
`;

export default CartItem;