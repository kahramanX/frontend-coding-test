import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }

  body {
    font-family: system-ui, Open-Sans, Helvetica, Sans-Serif;
  }


`;

export default GlobalStyle;
