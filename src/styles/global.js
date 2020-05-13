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
    
 
    background: ${({ theme }) => theme.colors.gradient};
    
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
