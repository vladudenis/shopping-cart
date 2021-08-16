import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { 
        FaInstagram, 
        FaPinterestSquare, 
        FaFacebookSquare,
        FaTwitter,
        FaPaypal,
        FaCcVisa,
        FaCcMastercard,
        FaCcDinersClub,
        FaCcAmazonPay,
        FaCcApplePay
      } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


const Home = () => {
  return(
    <Container>

      <Welcome>
        <Paragraph>Welcome to the</Paragraph>
        <H1>CRYPTO KIOSK</H1>
        <Link to="/shop">
          <LargeButton>SHOP NOW</LargeButton>
        </Link>
      </Welcome>

      <Teaser>
        <TeaserMessage>
          <span><LargeParagraph>Why not join the hype?</LargeParagraph></span>
          <span><Paragraph>
            Our platform enables you to buy cryptocurrencies from an arsenal of 20 available cryptos, and with much more well on the way.
            You can make your purchases with credit card, Amazon Pay, Apple Pay or PayPal and immediately start trading -- or, if you prefer, HODLing.
          </Paragraph></span>
          <span><Paragraph>Don't miss out on the most exciting revolution of this century!</Paragraph></span>
          <Link to="/contact">
            <LargeButton>LEARN MORE</LargeButton>
          </Link>
        </TeaserMessage>
        <CoinTiles>
          <Paragraph>ADA BTC DOGE EOS ETH LTC NEO TRON USDC USDT XRP</Paragraph>
        </CoinTiles>
      </Teaser>

      <Newsletter>
        <span>
          <Paragraph>Subscribe To Our Newsletter</Paragraph>
          <SmallParagraph>
            Stay up to date by signing up to our newsletter!
          </SmallParagraph>
        </span>
        <SearchBarWrapper >
          <SearchBar placeholder="E-Mail Address" />
          <LargeButton>SUBSCRIBE</LargeButton>
        </SearchBarWrapper>
      </Newsletter>

      <Footer>
        <Paragraph>Social Links</Paragraph>
        <BlockSpan>
          <IconContext.Provider value={{ color: "white"}}>
            <a href="#">
              <FaFacebookSquare size={30} />
            </a>
            <a href="#">
              <FaTwitter size={30} />
            </a>
            <a href="#">
              <FaInstagram size={30} />
            </a>
            <a href="#">
              <FaPinterestSquare size={30} />
            </a>
            <a href="#">
              <FiMail size={30} />
            </a>
          </IconContext.Provider>
        </BlockSpan>
        <Paragraph>Supported Payment Methods</Paragraph>
        <BlockSpan>
          <IconContext.Provider value={{ color: "white"}}>
            <FaPaypal size={30} />
            <FaCcVisa size={30}  />
            <FaCcMastercard size={30}  />
            <FaCcDinersClub size={30}  />
            <FaCcAmazonPay size={30}  />
            <FaCcApplePay size={30}  />
          </IconContext.Provider>
        </BlockSpan>
        <SmallParagraph>Copyright © 2021 Crypto Kiosk GmbH, Austria</SmallParagraph>
      </Footer>

    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 290vh;
  overflow: hidden;
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  background-color: beige;
  & > p{
    margin-bottom: 3rem;
  }
`;

const Teaser = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 4fr 1fr;
`;

const TeaserMessage = styled.div`
  margin: 5rem 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & > p{
    font-size: 20px;
    font-family: "Garamond", "serif";
  }
  & > span{
    margin-bottom: 1rem;
    margin: 3rem 0;
  }
  & button{
    border: 1px solid black;
  }
`;

const CoinTiles = styled.span`
  display: flex;
  justify-content: center;
`;

const Newsletter = styled.div`
  height: 50vh;
  width: 100%;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SearchBarWrapper = styled.div`
  margin-bottom: 5rem;
  & button{
    margin: 0;
  }
`;

const SearchBar = styled.input`
  padding: 5px 15px;
  font-size: 22px;
  background-color: #fff8e7;
  width: 600px;
  height: 60px;
`;

const Footer = styled.div`
  height: 50vh;
  width: 100%;
  padding: 2rem 12rem;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & p{
    color: white;
  }
  & p:last-of-type{
    text-align: center;
  }
`;

const BlockSpan = styled.span`
  & > *{
    margin: 2px 0.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-family: "Monaco", "monospace";
`;

const SmallParagraph = styled(Paragraph)`
  font-size: 12px;
  margin-top: 1rem;
`;

const LargeParagraph = styled(Paragraph)`
  font-size: 40px;
`;

const H1 = styled.h1`
  font-size: 60px;
  letter-spacing: 10px;
  margin-bottom: 3rem;
  font-family: "Copperplate", "fantasy";
`;

const Button = styled.button`
  color: black;
  background-color: white;
  margin: 10px 5px;
  background-image: linear-gradient(white, white 50%, #d9b382 50%, #d9b382);
  background-size: 100% 200%;
  transition: background-position .3s;
  &:hover{
    background-position: 0 -100%
  }
`;

const LargeButton = styled(Button)`
  width: 150px;
  height: 60px;
  font-size: 16px;
`;