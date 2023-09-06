import React from 'react';
import smoke from '@assets/gifs/smoke.gif';
import Importer from '@components/Importer';
import Modal from '@components/Modal';
import Dropzone from '@components/Dropzone';

import * as S from './global.styles';

function App() {
  return (
    <S.AppWrapper>
      <S.SmokeElement
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 10, ease: 'easeInOut' }}
        src={smoke}
        alt=""
      />

      <Modal>
        <Dropzone />
      </Modal>

      <Importer />
    </S.AppWrapper>
  );
}

export default App;
