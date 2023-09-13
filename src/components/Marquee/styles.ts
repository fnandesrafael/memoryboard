import styled from 'styled-components';
import { motion } from 'framer-motion';

type SliderProps = {
  $mirrorSlide?: boolean;
};

export const Slider = styled(motion.div)<SliderProps>`
  animation: ${({ $mirrorSlide }) =>
    $mirrorSlide
      ? '30s slide-to-right infinite linear'
      : '30s slide-to-left infinite linear'};

  @keyframes slide-to-left {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100%);
    }
  }

  @keyframes slide-to-right {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0);
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row;
`;

export const Text = styled.h1`
  font-size: 8rem;
  font-weight: 100;
  padding: 0 2rem;
  user-select: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  white-space: nowrap;
  width: 100%;
`;
