import React from 'react';
import { LuRedo, LuUndo, LuTrash } from 'react-icons/lu';

import * as S from './styles';

type ContextMenuProps = {
  position: { top: number; left: number };
};

export default function ContextMenu({ position }: ContextMenuProps) {
  return (
    <S.Container style={{ top: position.top, left: position.left }}>
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
