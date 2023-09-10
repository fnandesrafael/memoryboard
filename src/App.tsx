import React from 'react';
import usePolaroidStore from '@store/polaroidStore';
import useLocalStorage from '@hooks/useLocalStorage';
import useContextMenu from '@hooks/useContextMenu';
import smoke from '@assets/gifs/smoke.gif';
import Actions from '@components/Actions';
import Modal from '@components/Modal';
import Dropzone from '@components/Dropzone';
import Polaroid from '@components/Polaroid';
import ContextMenu from '@components/ContextMenu';

import * as S from './global.styles';

function App() {
  const { polaroids } = usePolaroidStore();
  const { isVisible, position, handleOpening } = useContextMenu();
  const { saveInLocal } = useLocalStorage();

  return (
    <S.AppWrapper>
      <S.SmokeElement
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 10, ease: 'easeInOut' }}
        src={smoke}
        alt=""
      />

      <Actions saveInLocal={saveInLocal} />

      <Modal>
        <Dropzone />
      </Modal>

      <S.Board>
        {isVisible && <ContextMenu position={position} />}

        {polaroids.map((polaroid) => (
          <Polaroid
            key={polaroid.id}
            data={polaroid}
            handleContextMenu={handleOpening}
          />
        ))}
      </S.Board>
    </S.AppWrapper>
  );
}

export default App;
