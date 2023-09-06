import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  align-items: center;
  background-color: #0a0a0a;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  height: 3rem;
  justify-content: center;
  margin-bottom: 2rem;
  outline: none;
  width: 3rem;

  svg,
  path {
    font-size: 1.5rem;
    stroke: #b3b0aa;
  }
`;

export const Container = styled(motion.div)`
  align-items: center;
  background-color: #0a0a0a;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  display: flex;
  flex-flow: column;
  height: 16rem;
  justify-content: center;
  width: 32rem;
`;

export const Wrapper = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 40;
`;

export default Container;
