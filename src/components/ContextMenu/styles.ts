import styled from 'styled-components';
import { motion } from 'framer-motion';

type OptionProps = {
  $hasUnderline?: boolean;
  $iconColor?: string;
};

export const Container = styled(motion.div)`
  align-items: center;
  background-color: #0a0a0a;
  border-radius: 0.25rem;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  position: absolute;
  width: 9rem;
  z-index: calc(infinity);
`;

export const Option = styled(motion.div)<OptionProps>`
  align-items: center;
  border-bottom: ${({ $hasUnderline }) =>
    $hasUnderline ? '1px solid #1a1a1a' : null};
  display: flex;
  flex-flow: row;
  height: 1.5rem;
  justify-content: space-between;
  padding: 0.5rem;
  width: 8rem;

  &:hover {
    background-color: #1a1a1a;
    cursor: pointer;
  }

  svg {
    color: ${({ $iconColor }) => $iconColor};
    stroke-width: 0.15rem;
  }
`;

export const Text = styled.p`
  font-family: Ubuntu, sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
`;
