import React from 'react';
import { GrFormAdd } from 'react-icons/gr';

import * as S from './styles';

export default function Importer() {
  return (
    <S.Button
      initial={{ opacity: 0.5 }}
      whileHover={{ cursor: 'pointer', opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <GrFormAdd />
    </S.Button>
  );
}
