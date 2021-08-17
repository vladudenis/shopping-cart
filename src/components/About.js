import React from "react";
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

function About(){
    return(
        <Container>
            <AboutWrapper>
                <LargeParagraph>Our Mission</LargeParagraph>
                <Paragraph>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Paragraph>
                <Paragraph>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</Paragraph>
            </AboutWrapper>

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
}

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 140vh;
  overflow: hidden;
`;

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: beige;
    width: 100%;
    min-height: 90vh;
    padding: 5rem 20rem;
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

const LargeParagraph = styled(Paragraph)`
  font-size: 40px;
  font-family: "Copperplate", "fantasy";
`;

const SmallParagraph = styled(Paragraph)`
  font-size: 12px;
  margin-top: 1rem;
`;