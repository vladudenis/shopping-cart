import React from "react";
import Ada from "../assets/ada.svg";
import Btc from "../assets/btc.svg";
import Doge from "../assets/doge.svg";
import Eth from "../assets/eth.svg";
import Ltc from "../assets/ltc.svg";
import Xrp from "../assets/xrp.svg";
import Eos from "../assets/eos.svg";
import Neo from "../assets/neo.svg";
import Tron from "../assets/tron.svg";
import Usdc from "../assets/usdc.svg";
import Usdt from "../assets/usdt.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ShopItem from "./ShopItem";

const Shop = () => {
  return(
    <ShopWrapper>
      <ShopItemWrapper>
        <Link to={{
                pathname: "/shop/ada",
                state: {
                  src: Ada,
                  name: "Cardano"
                }
        }}>
          <ShopItem src={Ada} name={"Cardano"} itemDetail={false} />
        </Link>

        <Link to="/shop/btc">
          <ShopItem src={Btc} name={"Bitcoin"} />
        </Link>

        <Link to="/shop/doge">
          <ShopItem src={Doge} name={"Doge"} />
        </Link>

        <Link to="/shop/eth">
          <ShopItem src={Eth} name={"Ethereum"} />
        </Link>

        <Link to="/shop/ltc">
          <ShopItem src={Ltc} name={"Litecoin"} />
        </Link>

        <Link to="/shop/xrp">
          <ShopItem src={Xrp} name={"Ripple"} />
        </Link>

        <Link to="/shop/eos">
          <ShopItem src={Eos} name={"EOS"} />
        </Link>

        <Link to="/shop/neo">
          <ShopItem src={Neo} name={"NEO"} />
        </Link>

        <Link to="/shop/tron">
          <ShopItem src={Tron} name={"Tron"} />
        </Link>

        <Link to="/shop/usdc">
          <ShopItem src={Usdc} name={"USDC"} />
        </Link>

        <Link to="/shop/usdt">
          <ShopItem src={Usdt} name={"Tether"} />
        </Link>
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
`;

export default Shop;