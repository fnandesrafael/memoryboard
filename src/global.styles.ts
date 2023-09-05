import styled, { createGlobalStyle } from 'styled-components';

export const Overall = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
  }

  body {
    background-color: #131313;
    color: #B3B0AA;
  }
`;

export const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
