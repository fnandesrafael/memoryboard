import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  align-items: center;
  background-color: #0a0a0a;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  display: flex;
  flex-flow: column;
  gap: 0.15rem;
  justify-content: center;
  left: 43%;
  padding: 0.75rem 1.5rem;
  position: absolute;
  top: 1rem;
  width: 8rem;
  z-index: calc(infinity);
`;

export const Icon = styled.div`
  svg {
    color: #4ade80;
    font-size: 1.25rem;
  }
`;

export const Text = styled.p`
  font-family: Ubuntu, sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
`;
