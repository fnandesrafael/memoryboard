import React from 'react';
import usePolaroidStore, { PolaroidObject } from '@store/polaroidStore';

import * as S from './styles';

type PolaroidProps = {
  data: PolaroidObject;
  handleContextMenu: (e) => void;
};

export default function Polaroid({ data, handleContextMenu }: PolaroidProps) {
  const { polaroids, setPolaroids } = usePolaroidStore();

  const getPosition = (
    element: HTMLElement,
  ): {
    x: number;
    y: number;
  } => {
    const transform = window
      .getComputedStyle(element)
      .getPropertyValue('transform');
    const matrix = new DOMMatrixReadOnly(transform);

    return {
      x: matrix.m41,
      y: matrix.m42,
    };
  };

  const handleTranslation = (e) => {
    e.preventDefault();

    const newPosition = getPosition(e.target);
    const updatedPolaroids = polaroids.map((polaroid) => {
      if (polaroid.id === e.target.id) {
        return { ...polaroid, position: newPosition };
      }
      return polaroid;
    });

    setPolaroids(updatedPolaroids);
  };

  return (
    <S.Wrapper
      id={data.id}
      style={{
        x: data.position.x,
        y: data.position.y,
        zIndex: data.layer,
      }}
      whileHover={{
        cursor: 'move',
        scale: 1.015,
        transition: { duration: 0.2 },
      }}
      drag
      dragMomentum={false}
      onDragEnd={(e) => handleTranslation(e)}
      onContextMenu={handleContextMenu}
    >
      <S.Image src={data.file} />
    </S.Wrapper>
  );
}
