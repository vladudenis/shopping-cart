import ada from "../assets/ada.svg";
import btc from "../assets/btc.svg";
import doge from "../assets/doge.svg";
import eth from "../assets/eth.svg";
import ltc from "../assets/ltc.svg";
import xrp from "../assets/xrp.svg";
import eos from "../assets/eos.svg";
import neo from "../assets/neo.svg";
import tron from "../assets/tron.svg";
import usdc from "../assets/usdc.svg";
import usdt from "../assets/usdt.svg";
import React from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";

const Shop = () => {
  return(
    <ShopWrapper>
      <ShopItemWrapper>
        <ShopItem src={ada} name={"Cardano"} shorthand={"ADA"} />

        <ShopItem src={btc} name={"Bitcoin"} shorthand={"BTC"}  />

        <ShopItem src={doge} name={"Doge"} shorthand={"DOGE"}  />

        <ShopItem src={eth} name={"Ethereum"} shorthand={"ETH"}  />

        <ShopItem src={ltc} name={"Litecoin"} shorthand={"LTC"}  />

        <ShopItem src={xrp} name={"Ripple"} shorthand={"XRP"}  />

        <ShopItem src={eos} name={"EOS"} shorthand={"EOS"}  />

        <ShopItem src={neo} name={"NEO"} shorthand={"NEO"}  />

        <ShopItem src={tron} name={"Tron"} shorthand={"TRON"}  />

        <ShopItem src={usdc} name={"USDC"} shorthand={"USDC"}  />

        <ShopItem src={usdt} name={"Tether"} shorthand={"USDT"}  />
      </ShopItemWrapper>
    </ShopWrapper>
  );
};

const ShopWrapper = styled.div`
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