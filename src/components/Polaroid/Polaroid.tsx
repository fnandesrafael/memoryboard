import React from 'react';

import * as S from './styles';

type PolaroidProps = {
  target: string;
  src: string;
  position: { x: number; y: number };
  onContextMenu: (e) => void;
};

export default function Polaroid({
  target,
  src,
  position,
  onContextMenu,
}: PolaroidProps) {
  return (
    <S.Wrapper
      id={target}
      style={{
        x: position.x,
        y: position.y,
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
      <S.Image src={src} />
    </S.Wrapper>
  );
}
