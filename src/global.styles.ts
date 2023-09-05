import styled, { createGlobalStyle } from 'styled-components';
import grunge from '@assets/textures/grunge.png';
import grid from '@assets/textures/grid.png';

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

    &::after {
      background-image: ${`url(${grunge})`};
      background-size: cover;
      content: '';
      height: 100%;
      left: 0;
      mix-blend-mode: luminosity;
      opacity: 0.5;
      pointer-events: none;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 10;
    }
  }
`;

export const AppWrapper = styled.div`
  height: 100%;
  width: 100%;

  &::after {
    background-image: ${`url(${grid})`};
    background-size: cover;
    content: '';
    height: 100%;
    left: 0;
    mix-blend-mode: luminosity;
    opacity: 0.75;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }
`;
