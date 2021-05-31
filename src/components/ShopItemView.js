import React, { useRef } from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";

const ShopItemView = ({src, name, shorthand, addToCart}) => {
  const inputElement = useRef(null);

  const decrementQuantity = () => {
    if(inputElement.current.value != 0){
      inputElement.current.value--;
    }
  };

  const incrementQuantity = () => {
    inputElement.current.value++;
  };

  return(
      <ShopItemViewWrapper>
        <ShopItemWrapper>
          <Item>
            <ShopItem src={src} name={name} shorthand={shorthand} />

            <span>
                <SmallButton onClick={decrementQuantity}>-</SmallButton>
                <Input 
                  defaultValue="1" 
                  ref={inputElement}
                />
                <SmallButton onClick={incrementQuantity}>+</SmallButton>
            </span>

            <LargeButton onClick={addToCart}>Add to cart</LargeButton>
          </Item>

          <Description>
            <h3>About {name}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et odio porro numquam laboriosam consectetur optio. Magni est quam vero error harum commodi quos doloremque possimus. Accusantium laboriosam sed vero.</p>
          </Description>

          <LargeButton>Go back</LargeButton>
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

const Item = styled.div`
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