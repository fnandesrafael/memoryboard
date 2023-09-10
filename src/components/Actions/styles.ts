import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Action = styled(motion.button)`
  background-color: #0a0a0a;
  border: none;
  border-radius: 100%;
  height: 2.5rem;
  outline: none;
  transition: 0.2s background-color;
  width: 2.5rem;
  z-index: 1000;

  &:hover {
    cursor: pointer;
    background-color: #1a1a1a;
    transition: 0.2s background-color;
  }

  svg,
  path {
    font-size: 1rem;
    color: #b0b3aa;
    stroke: #b0b3aa;
  }
`;

export const Toggle = styled(motion.button)`
  background-color: #0a0a0a;
  border: none;
  border-radius: 100%;
  height: 4rem;
  outline: none;
  padding: 1rem;
  transition: 0.2s background-color;
  width: 4rem;
  z-index: calc(infinity);

  &:hover {
    cursor: pointer;
    background-color: #1a1a1a;
    transition: 0.2s background-color;
  }

  .toggle-icon {
    font-size: 2rem;

    path {
      stroke: #b0b3aa;
    }
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  bottom: 2rem;
  display: flex;
  flex-flow: column-reverse;
  gap: 1rem;
  position: fixed;
  right: 2rem;
`;
