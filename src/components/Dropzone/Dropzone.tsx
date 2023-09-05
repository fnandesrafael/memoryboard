import React from 'react';
import useImportStore from '@store/importStore';

import * as S from './styles';

export default function Dropzone() {
  const { isImporting } = useImportStore();

  return (
    isImporting && (
      <S.Wrapper>
        <S.Container>Dropzone</S.Container>
      </S.Wrapper>
    )
  );
}
