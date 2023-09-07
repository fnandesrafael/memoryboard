import React from 'react';
import usePolaroidStore from '@store/polaroidStore';
import { LuRedo, LuUndo, LuTrash } from 'react-icons/lu';

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

  return (
    <S.Container style={{ top: position.top - 1, left: position.left - 1 }}>
      <S.Option $hasUnderline onClick={() => console.log('front')}>
        <S.Text>Bring to front</S.Text>
        <LuRedo />
      </S.Option>

      <S.Option $hasUnderline onClick={() => console.log('back')}>
        <S.Text>Send to back</S.Text>
        <LuUndo />
      </S.Option>

      <S.Option $iconColor="red" onClick={handleDeletiton}>
        <S.Text>Remove</S.Text>
        <LuTrash />
      </S.Option>
    </S.Container>
  );
}
