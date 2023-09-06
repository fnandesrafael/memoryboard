import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Image = styled(motion.img)`
  height: 24rem;
  object-fit: cover;
  position: absolute;
  width: 20rem;
`;

export const Wrapper = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  z-index: 40;
`;
