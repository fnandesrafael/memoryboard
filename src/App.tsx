import React from 'react';
import usePolaroidStore from '@store/polaroidStore';
import smoke from '@assets/gifs/smoke.gif';
import Importer from '@components/Importer';
import Modal from '@components/Modal';
import Dropzone from '@components/Dropzone';

import Polaroid from '@components/Polaroid';
import * as S from './global.styles';

function App() {
  const { polaroids } = usePolaroidStore();

  return (
    <S.AppWrapper>
      <S.SmokeElement
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 10, ease: 'easeInOut' }}
        src={smoke}
        alt=""
      />

      <Modal>
        <Dropzone />
      </Modal>

      <S.Board>
        {polaroids.map((polaroid) => (
          <Polaroid
            key={polaroid.id}
            target={polaroid.id}
            src={URL.createObjectURL(polaroid)}
          />
        ))}
      </S.Board>

      <Importer />
    </S.AppWrapper>
  );
}

export default App;
