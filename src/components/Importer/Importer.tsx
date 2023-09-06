import React from 'react';
import { GrFormAdd } from 'react-icons/gr';
import useImportStore from '@store/importStore';

import * as S from './styles';

export default function Importer() {
  const { setIsImporting } = useImportStore();

  return (
    <S.Button
      initial={{ opacity: 0.5 }}
      whileHover={{ cursor: 'pointer', opacity: 1 }}
      transition={{ duration: 0.2 }}
      onClick={() => setIsImporting(true)}
    >
      <GrFormAdd />
    </S.Button>
  );
}
