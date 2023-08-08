import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
     box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
    border: 0;
  }
  
  html,
  body {
    background: #FFF;
    min-height: 100vh;
    color: #000;
  }
  `;