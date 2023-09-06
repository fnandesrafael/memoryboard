import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  background-color: #0a0a0a;
  border: none;
  border-radius: 100%;
  bottom: 2rem;
  height: 4rem;
  opacity: 0.5;
  outline: none;
  padding: 1rem;
  position: fixed;
  right: 2rem;
  transition: 0.2s opacity;
  width: 4rem;
  z-index: calc(infinity);

  svg,
  path {
    font-size: 2rem;
    stroke: #b0b3aa;
  }
`;

export default Button;
