import React from 'react';
import smoke from '@assets/gifs/smoke.gif';

import * as S from './global.styles';

function App() {
  return (
    <S.AppWrapper>
      <S.SmokeElement src={smoke} alt="" />
    </S.AppWrapper>
  );
}

export default App;
