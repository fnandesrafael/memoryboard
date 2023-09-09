import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Image = styled(motion.img)`
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  width: 100%;
`;

export const Wrapper = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-flow: column;
  height: 24rem;
  overflow: hidden;
  position: absolute;
  transform-origin: center;
  width: 20rem;
  z-index: 40;
`;
