import styled from 'styled-components';
import { motion } from 'framer-motion';

type TooltipProps = {
  $left: string;
};

export const Action = styled(motion.button)`
  background-color: #0a0a0a;
  border: none;
  border-radius: 100%;
  height: 3rem;
  outline: none;
  position: relative;
  transition: 0.2s background-color;
  width: 3rem;
  z-index: 1000;

  &:hover {
    background-color: #1a1a1a;
    cursor: pointer;
    transition: 0.2s background-color;

    p {
      visibility: visible;
    }
  }

  svg,
  path {
    color: #b0b3aa;
    font-size: 1.25rem;
    stroke: #b0b3aa;
  }
`;

export const Toggle = styled(motion.button)`
  background-color: #0a0a0a;
  border: none;
  border-radius: 100%;
  height: 4.5rem;
  outline: none;
  padding: 1rem;
  transition: 0.2s background-color;
  width: 4.5rem;
  z-index: calc(infinity);

  &:hover {
    background-color: #1a1a1a;
    cursor: pointer;
    transition: 0.2s background-color;
  }

  .toggle-icon {
    font-size: 2rem;

    path {
      stroke: #b0b3aa;
    }
  }
`;

export const Tooltip = styled(motion.p)<TooltipProps>`
  background-color: #0a0a0a;
  border-radius: 0.5rem;
  bottom: 0.5rem;
  color: #b3b0aa;
  display: flex;
  font-family: Ubuntu, sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  left: ${({ $left }) => $left};
  padding: 0.5rem;
  position: absolute;
  visibility: hidden;
`;

export const Wrapper = styled.div`
  align-items: center;
  bottom: 2rem;
  display: flex;
  flex-flow: column-reverse;
  gap: 1rem;
  position: fixed;
  right: 2rem;
  z-index: calc(infinity);
`;
