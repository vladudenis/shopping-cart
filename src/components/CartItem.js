import React from "react";
import styled from "styled-components";

const CartItem = ({item, removeFromCart, findCoin, changeQuantity}) => {
    return(
        <Item>
          <img src={item.src} alt={item.name + " Logo"}></img>
          <div>
            <h4>{item.name} ({item.shorthand})</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.qty}</p>
          </div>
          <Input type="number" placeholder="Quantity" value={item.qty} onChange={(e) => changeQuantity(findCoin(item.shorthand), e.target.value)} />
          <Button onClick={() => removeFromCart(item)}>Remove</Button>
        </Item>
    )
}

const Item = styled.div`
  min-width: 350px;
  min-height: 300px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px 10px;
  grid-gap: 50px;
  border: 1px solid black;
  & img{
    margin-top: 3rem;
  }
  & div{
    text-align: center;
  }
`;

const Input = styled.input`
  display: block;
  width: 130px;
  height: 30px;
  padding: 5px 15px;
  font-size: 14px;
  background-color: #fff8e7;
`;

const Button = styled.button`
  color: black;
  background-color: white;
  margin-bottom: 3rem;
  background-image: linear-gradient(white, white 50%, #d9b382 50%, #d9b382);
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

export default CartItem;