import React from "react";
import styled from "styled-components";

const ShopItem = ({ src, name, itemDetail }) => {
  if(itemDetail){
    return(
      <CardWrapper>
        <Card>
          <img src={src} alt={name + " Logo"}></img>
          <div>
            <h5>{name}</h5>
            <p>Price: $--</p>
          </div>
        </Card>

        <Description>
          <h5>{name}</h5>
          <p>Description</p>
        </Description>
      </CardWrapper>
    );
  }else{
    return(
      <Card>
        <img src={src} alt={name + " Logo"}></img>
        <div>
          <h5>{name}</h5>
          <p>Price: $--</p>
        </div>
      </Card>
    );
  }
};

const Card = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 10px;
padding: 0px 10px;
margin: 0px 10px;
max-height: 230px;
& div{
   text-align: center;
}
`;

const Description = styled.div`
  background-color: beige;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
`;

export default ShopItem;