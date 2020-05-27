import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #f9f2e3;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #route-home {
    max-width: 1366px;
    height: 100%;
    margin: 0 auto;
    padding: 40px 10px;
  }
  #login {
    margin-top: 80px;
  }
`;
