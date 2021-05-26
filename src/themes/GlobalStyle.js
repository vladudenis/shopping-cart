import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }
  html {
    font-size: 62.5%;
    line-height: 1.5;
  }
  body {
    font-family: "Nunito", sans-serif;
    font-size: 1.6rem;
  }
  header {
    font-size: 2.4rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }
  a {
    text-decoration: none;
    color: black;
  }
  img {
    display: block;
    width: 150px;
  }
  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;