import styled from 'styled-components';
import { motion } from 'framer-motion';
import { DropzoneRootProps } from 'react-dropzone';

export const Container = styled(motion.div)<DropzoneRootProps>`
  border: 1px solid red;
  height: 100%;
  width: 100%;
`;

export default Container;
