import React from 'react';

import * as S from './styles';

type PolaroidProps = {
  src: string;
};

export default function Polaroid({ src }: PolaroidProps) {
  return (
    <S.Wrapper>
      <S.Image src={src} drag dragMomentum={false} />
    </S.Wrapper>
  );
}
