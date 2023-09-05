import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
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
    overflow: hidden;

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

export const SmokeElement = styled(motion.img)`
  bottom: -12rem;
  height: 64rem;
  left: -16rem;
  mix-blend-mode: lighten;
  opacity: 0.25;
  position: absolute;
`;
