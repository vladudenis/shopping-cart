import React, { useState } from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";
import { FiSearch } from "react-icons/fi";

const Shop = ({ coins }) => {
  const [searchFor, setSearchFor] = useState(false);
  
  const searchForItem = (e) => {
    e.preventDefault();
    if(e.target.value === ""){
      setSearchFor(false);
    }else{
      setSearchFor(e.target.value);
    }
  }

  const hasSimilarity = (item1, item2) => {
    item1 = item1.toUpperCase();
    item2 = item2.toUpperCase();
    if(item1 === item2.substring(0, item1.length)){
      return true;
    }else{
      return false;
    }
  }

  if(searchFor === false){
    return(
      <Background>
        <ShopWrapper>
          <ShopHeader>
            <SearchBarWrapper>
              <SearchBar placeholder="Looking for something specific?" onChange={searchForItem} />
              <SearchButton>
                <FiSearch />
              </SearchButton>
            </SearchBarWrapper>
          </ShopHeader>
          <ShopItems>
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
          </ShopItems>
          <ShopFooter>
            <TextWrapper>
              <SmallText>Copyright © 2021 Crypto Kiosk GmbH, Austria</SmallText>
            </TextWrapper>
          </ShopFooter>
        </ShopWrapper>
      </Background>
    );
  }else{
    return(
      <Background>
        <ShopWrapper>
          <ShopHeader>
            <SearchBarWrapper>
              <SearchBar placeholder="Looking for something specific?" onChange={searchForItem} />
              <SearchButton>
                <FiSearch />
              </SearchButton>
            </SearchBarWrapper>
          </ShopHeader>
          <ShopItems>
            {
              coins.map((coin) => {
                if(hasSimilarity(searchFor, coin.name)){
                  return(
                    <ShopItem 
                      name={coin.name} 
                      shorthand={coin.shorthand}
                      src={coin.src}
                      price={coin.price}
                      qty={coin.qty} 
                    />
                  )
                }
              })
            }
          </ShopItems>
          <ShopFooter>
            <TextWrapper>
              <SmallText>Copyright © 2021 Crypto Kiosk GmbH, Austria</SmallText>
            </TextWrapper>
          </ShopFooter>
        </ShopWrapper>
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

const ShopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShopHeader = styled.div`
  display: block;
  justify-content: center;
`;

const ShopItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
  padding-top: 3rem;
  border-radius: 10px;
  max-width: 80%;
`;

const ShopFooter = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;

const SearchBar = styled.input`
  width: 350px;
  height: 40px;
  padding: 5px 15px;
  font-size: 22px;
`;

const SearchButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: white;
`;

const TextWrapper = styled.div`
  display: block;
  margin: 6rem 0;
  text-align: center;
`;

const BigText = styled.h1`
  font-size: 30px;
`;

const MediumText = styled.p`
  font-size: 16px;
`;

const SmallText = styled.p`
  font-size: 12px;
`;

export default Shop;