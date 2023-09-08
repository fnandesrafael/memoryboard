import React from 'react';

import * as S from './styles';

type PolaroidProps = {
  data: {
    id: string;
    file: File;
    position: { x: number; y: number };
    layer: number;
  };
  onContextMenu: (e) => void;
};

export default function Polaroid({ data, onContextMenu }: PolaroidProps) {
  return (
    <S.Wrapper
      id={data.id}
      style={{
        x: data.position.x,
        y: data.position.y,
      }}
      whileHover={{
        cursor: 'move',
        scale: 1.015,
        transition: { duration: 0.2 },
      }}
      drag
      dragMomentum={false}
      onContextMenu={onContextMenu}
    >
      <S.Image src={URL.createObjectURL(data.file)} />
    </S.Wrapper>
  );
}
