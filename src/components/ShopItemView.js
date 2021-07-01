import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShopItem from "./ShopItem";

const ShopItemView = ({item, addToCart, changeQuantity}) => {
  const inputElement = useRef(null);

  const thisAddToCart = () => {
    addToCart(item);
  }

  const decrementQuantity = () => {
    if(item.qty > 1){
      inputElement.current.value--;
    }
    changeQuantity(item, inputElement.current.value);
  }

  const incrementQuantity = () => {
    inputElement.current.value++;
    changeQuantity(item, inputElement.current.value);
  }

  return(
      <ShopItemViewWrapper>
        <ShopItemWrapper>
          <ItemWrapper>
            <ShopItem src={item.src} name={item.name} shorthand={item.shorthand} />

            <span>
                <SmallButton onClick={decrementQuantity}>-</SmallButton>
                <Input 
                  defaultValue={item.qty}
                  ref={inputElement}
                />
                <SmallButton onClick={incrementQuantity}>+</SmallButton>
            </span>

            <LargeButton onClick={thisAddToCart}>Add to cart</LargeButton>
          </ItemWrapper>

          <Description>
            <h3>About {item.name}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.</p>
          </Description>

          <Link to="/shop">
            <LargeButton>Go back</LargeButton>
          </Link>
        </ShopItemWrapper>
      </ShopItemViewWrapper>
  );
}

const ShopItemViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: beige;
  min-height: 90vh;
`;

const ShopItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;
  padding-top: 5rem;
  background-color: white;
  border-radius: 10px;
  width: 80%;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 300px;
  & > p{
    text-align: justify;
    hyphens: auto;
  }
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

const SmallButton = styled(Button)`
  width: 30px;
  height: 25px;
`;

const Input = styled.input`
  max-width: 40px;
  text-align: center;
`;

export default ShopItemView;