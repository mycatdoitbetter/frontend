import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%
  }

  body {
    background-image: linear-gradient(#4169E1, #9AC2C9, #6E7E85);
    -webkit-font-smoothing: antialiased !important;
    
  }

  body, input, button {
    color: #333;
    font-size: 14px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }

  button {
    cursor: pointer;
  }
`;
