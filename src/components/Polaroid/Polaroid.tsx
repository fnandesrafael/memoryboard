import React from 'react';
import usePolaroidStore from '@store/polaroidStore';

import { CustomFile } from '@components/Dropzone/Dropzone';
import * as S from './styles';

type PolaroidProps = {
  target: string;
  src: string;
};

export default function Polaroid({ target, src }: PolaroidProps) {
  const { polaroids, updatePosition } = usePolaroidStore();

  const handleDrag = (e, currPosition) => {
    const { id } = e.target;
    const newPosition = currPosition.offset;

    const updatedPosition = polaroids.map((polaroid) => {
      if (polaroid.id === id) {
        return new CustomFile(polaroid, polaroid.name, id, newPosition);
      }
      return polaroid;
    });

    updatePosition(updatedPosition);
  };

  return (
    <S.Wrapper>
      <S.Image
        id={target}
        src={src}
        drag
        dragMomentum={false}
        onDragEnd={(e, currPosition) => handleDrag(e, currPosition)}
      />
    </S.Wrapper>
  );
}
