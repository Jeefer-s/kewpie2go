import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    padding: 30px 40px;
    min-height: 100vh;
    position: relative;

@media screen and (max-width: 800px){
    padding: 10px;
}

  }
  
  h2 {
    color: darkslategrey;
  }
  
  h3 {
    color: darkslategrey;
  }

  * {
      box-sizing: border-box;
  }
  
  a {
    text-decoration: none❯;
  }
  
`;

export const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;
