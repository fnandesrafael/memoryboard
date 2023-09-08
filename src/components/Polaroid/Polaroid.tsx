import React from 'react';
import { PolaroidObject } from '@store/polaroidStore';

import * as S from './styles';

type PolaroidProps = {
  data: PolaroidObject;
  onContextMenu: (e) => void;
};

export default function Polaroid({ data, onContextMenu }: PolaroidProps) {
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
      onContextMenu={onContextMenu}
    >
      <S.Image src={URL.createObjectURL(data.file as Blob)} />
    </S.Wrapper>
  );
}
