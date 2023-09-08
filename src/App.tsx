import React from 'react';
import usePolaroidStore from '@store/polaroidStore';
import useLocalStorage from '@hooks/useLocalStorage';
import useContextMenu from '@hooks/useContextMenu';
import smoke from '@assets/gifs/smoke.gif';
import Importer from '@components/Importer';
import Modal from '@components/Modal';
import Dropzone from '@components/Dropzone';
import Polaroid from '@components/Polaroid';
import ContextMenu from '@components/ContextMenu';

import * as S from './global.styles';

function App() {
  const { polaroids } = usePolaroidStore();
  const { isVisible, position, handleOpening } = useContextMenu();

  useLocalStorage();

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
        {isVisible && <ContextMenu position={position} />}

        {polaroids.map((polaroid) => (
          <Polaroid
            key={polaroid.id}
            data={polaroid}
            onContextMenu={handleOpening}
          />
        ))}
      </S.Board>

      <Importer />
    </S.AppWrapper>
  );
}

export default App;
