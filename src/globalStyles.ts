import { createGlobalStyle, DefaultTheme } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }

  body {
    font-family: system-ui, Helvetica, Sans-Serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background 0.2s ease-in, color 0.2s ease-in, border 0.2s ease-in;
  }
`;

export const lightTheme: DefaultTheme = {
  colors: {
    background: "white",
    text: "black",
    borderColor: "black",
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: "black",
    text: "white",
    borderColor: "white",
  },
};

export default GlobalStyle;
