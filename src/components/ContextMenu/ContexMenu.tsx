import React from 'react';
import { LuRedo, LuUndo, LuTrash } from 'react-icons/lu';
import usePolaroidStore from '@store/polaroidStore';

import * as S from './styles';

type ContextMenuProps = {
  position: { top: number; left: number };
};

export default function ContextMenu({ position }: ContextMenuProps) {
  const { polaroids, targetedPolaroid, setPolaroids } = usePolaroidStore();

  const bringToFront = () => {
    const frontLayer = Math.max(...polaroids.map((polaroid) => polaroid.layer));
    const newLayer = frontLayer + 1;
    targetedPolaroid.layer = newLayer < 40 ? 40 : newLayer;

    setPolaroids([...polaroids]);
  };

  const sendToBack = () => {
    const backLayer = Math.min(...polaroids.map((polaroid) => polaroid.layer));
    const newLayer = backLayer - 1;
    targetedPolaroid.layer = newLayer;

    if (newLayer === 40) {
      polaroids.map((polaroid) => ({
        ...polaroid,
        layer: polaroid.layer + 1,
      }));
    }

    setPolaroids([...polaroids]);
  };

  const handleDeletion = () => {
    const filteredPolaroids = polaroids.filter(
      (polaroid) => polaroid.id !== targetedPolaroid.id,
    );

    setPolaroids(filteredPolaroids);
  };

  return (
    <S.Container style={{ top: position.top - 1, left: position.left - 1 }}>
      <S.Option $hasUnderline onClick={bringToFront}>
        <S.Text>Bring to front</S.Text>
        <LuRedo />
      </S.Option>

      <S.Option $hasUnderline onClick={sendToBack}>
        <S.Text>Send to back</S.Text>
        <LuUndo />
      </S.Option>

      <S.Option $iconColor="#dc2626" onClick={handleDeletion}>
        <S.Text>Remove</S.Text>
        <LuTrash />
      </S.Option>
    </S.Container>
  );
}
