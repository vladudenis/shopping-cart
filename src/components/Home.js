import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return(
      <Welcome>
        <Paragraph>Welcome to the</Paragraph>
        <H1>Crypto Kiosk</H1>
        <Link to="/shop">
          <LargeButton>To Shop</LargeButton>
        </Link>
      </Welcome>
  );
};

export default Home;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
  background-color: beige;
`;

const Paragraph = styled.p`
  font-size: 60px;
`;

const H1 = styled.h1`
  font-size: 60px;
  margin: 2rem 0;
`;

const Button = styled.button`
  color: white;
  background-color: black;
  margin: 10px 5px;
  border-radius: 10px;
`;

const LargeButton = styled(Button)`
  width: 200px;
  height: 40px;
  font-size: 25px;
`;