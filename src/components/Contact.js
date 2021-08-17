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

function Contact(){
    return(
        <Container>
            <ContactWrapper>
                <ContactBlock>
                    <LargeParagraph>Contact Us</LargeParagraph>
                    <ContactDetails>
                        <div>
                            <span><SmallParagraph>For general inquiries</SmallParagraph></span>
                            <SmallParagraph>contact@cryptokiosk.com</SmallParagraph>
                        </div>

                        <div>
                            <span><SmallParagraph>Phone number</SmallParagraph></span>
                            <SmallParagraph>0398 367541</SmallParagraph>
                        </div>

                        <div>
                            <span><SmallParagraph>Working hours</SmallParagraph></span>
                            <SmallParagraph>Monday – Friday, 9am – 6pm GMT</SmallParagraph>
                        </div>
                    </ContactDetails>
                </ContactBlock>
                <Form>
                    <Paragraph>Send Us A Message</Paragraph>
                    <Input placeholder="Name" />
                    <Input placeholder="E-Mail Address" />
                    <TextInput placeholder="Message" />
                    <LargeButton>Send</LargeButton>
                </Form>
            </ContactWrapper>

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

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 140vh;
  overflow: hidden;
`;

const ContactWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: beige;
    width: 100%;
    min-height: 90vh;
    padding: 5rem 20rem;
`;

const ContactBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7%;
`;

const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    & > div > p{
        font-weight: bold;
        margin-bottom: 3rem;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 8%;
    & > p{
        margin-bottom: 5rem;
    }
    & > input, textarea{
        margin-bottom: 3rem;
    }
`;

const Input = styled.input`
    width: 600px;
    height: 60px;
    padding: 5px 15px;
    font-size: 22px;
    background-color: #fff8e7;
`;

const TextInput = styled.textarea`
    width: 600px;
    height: 200px;
    padding: 5px 15px;
    font-size: 22px;
    background-color: #fff8e7;
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
  margin-bottom: 3rem;
`;

const SmallParagraph = styled(Paragraph)`
  font-size: 12px;
  margin-top: 1rem;
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