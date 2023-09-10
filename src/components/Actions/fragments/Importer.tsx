import React from 'react';
import { MdOutlineFileUpload } from 'react-icons/md';
import useImportStore from '@store/importStore';

import * as S from '../styles';

export default function Importer() {
  const { setIsImporting } = useImportStore();

  return (
    <S.Action
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      exit={{ y: 50 }}
      onClick={() => setIsImporting(true)}
    >
      <MdOutlineFileUpload />
    </S.Action>
  );
}
