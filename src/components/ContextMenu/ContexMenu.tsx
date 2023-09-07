import React from 'react';
import { LuRedo, LuUndo, LuTrash } from 'react-icons/lu';
import usePolaroidStore from '@store/polaroidStore';

import * as S from './styles';

type ContextMenuProps = {
  position: { top: number; left: number };
};

export default function ContextMenu({ position }: ContextMenuProps) {
  const { polaroids, targetedPolaroid, setPolaroids } = usePolaroidStore();

  const handleDeletiton = () => {
    const filteredPolaroids = polaroids.filter(
      (polaroid) => polaroid.id !== targetedPolaroid.id,
    );

    setPolaroids(filteredPolaroids);
  };

  const sendToBack = () => {};

  return (
    <S.Container style={{ top: position.top - 1, left: position.left - 1 }}>
      <S.Option $hasUnderline>
        <S.Text>Bring to front</S.Text>
        <LuRedo />
      </S.Option>

      <S.Option $hasUnderline onClick={sendToBack}>
        <S.Text>Send to back</S.Text>
        <LuUndo />
      </S.Option>

      <S.Option $iconColor="#dc2626" onClick={handleDeletiton}>
        <S.Text>Remove</S.Text>
        <LuTrash />
      </S.Option>
    </S.Container>
  );
}
