import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DropzoneRootProps } from 'react-dropzone';

type DropzoneContainer = {
  $isDragActive: boolean;
} & DropzoneRootProps;

export const Container = styled(motion.div)<DropzoneContainer>`
  align-items: center;
  background-color: ${({ $isDragActive }) =>
    $isDragActive ? '#1a1a1a' : '#0a0a0a'};
  border-radius: 0.5rem;
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  transition: 0.2s background-color;
  width: 100%;

  svg {
    font-size: 2.5rem;
  }

  &:hover {
    background-color: #1a1a1a;
    cursor: pointer;
    transition: 0.2s background-color;
  }
`;

export const Heading = styled(motion.h1)`
  color: #b3b0aa;
  font-family: Nunito, Ubuntu, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1rem;
`;

export const Loading = styled(motion.div)`
  display: flex;
  flex-flow: column;
  font-size: 2rem;
  justify-content: center;
`;

export const Paragraph = styled(motion.p)`
  color: #b3b0aa;
  font-family: Nunito, Ubuntu, sans-serif;
  font-size: 1rem;
  font-weight: 200;
`;

export default Container;
