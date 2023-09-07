import React from 'react';
import { LuRedo, LuUndo, LuTrash } from 'react-icons/lu';

import * as S from './styles';

export default function ClickMenu() {
  return (
    <S.Container>
      <S.Option $hasUnderline>
        <S.Text>Bring to front</S.Text>
        <LuRedo />
      </S.Option>

      <S.Option $hasUnderline>
        <S.Text>Send to back</S.Text>
        <LuUndo />
      </S.Option>
      <S.Option $iconColor="red">
        <S.Text>Remove</S.Text>
        <LuTrash />
      </S.Option>
    </S.Container>
  );
}
