import React from 'react';

import * as S from './styles';

const motionValues = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { duration: 3, ease: 'easeInOut' },
  },
  transition: { delay: 0.8, duration: 3, ease: 'easeInOut' },
};

export default function Marquee() {
  return (
    <S.Wrapper>
      <S.Row>
        <S.Slider {...motionValues}>
          <S.Text>Bring Your Memories To The Board.</S.Text>
        </S.Slider>
        <S.Slider {...motionValues}>
          <S.Text>Bring Your Memories To The Board.</S.Text>
        </S.Slider>
      </S.Row>

      <S.Row>
        <S.Slider $mirrorSlide {...motionValues}>
          <S.Text>Bring Your Memories To The Board.</S.Text>
        </S.Slider>
        <S.Slider $mirrorSlide {...motionValues}>
          <S.Text>Bring Your Memories To The Board.</S.Text>
        </S.Slider>
      </S.Row>
    </S.Wrapper>
  );
}
