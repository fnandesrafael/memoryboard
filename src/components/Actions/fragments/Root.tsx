import React, { useState } from 'react';
import { GrFormAdd } from 'react-icons/gr';

import { AnimatePresence } from 'framer-motion';
import * as S from '../styles';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  const [onToggle, setOnToggle] = useState(false);

  return (
    <S.Wrapper>
      <S.Toggle
        whileHover={{ rotate: 360 }}
        onClick={() => setOnToggle((prevState) => !prevState)}
      >
        <GrFormAdd className="toggle-icon" />
      </S.Toggle>
      <AnimatePresence mode="wait">{onToggle && children}</AnimatePresence>
    </S.Wrapper>
  );
}
