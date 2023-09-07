import React from 'react';

import * as S from './styles';

type PolaroidProps = {
  target: string;
  src: string;
  position: { x: number; y: number };
};

export default function Polaroid({ target, src, position }: PolaroidProps) {
  return (
    <S.Wrapper
      id={target}
      style={{ x: position.x, y: position.y }}
      drag
      dragMomentum={false}
    >
      <S.Image src={src} />
    </S.Wrapper>
  );
}
