import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 30;
`;

export const Container = styled(motion.div)`
  align-items: center;
  background-color: #0a0a0a;
  border-radius: 0.5rem;
  display: flex;
  flex-flow: column;
  height: 16rem;
  justify-content: center;
  width: 32rem;
`;

export default Container;
