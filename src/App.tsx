import React from 'react';
import { AnimatePresence } from 'framer-motion';
import usePolaroidStore from '@store/polaroidStore';
import useLocalStorage from '@hooks/useLocalStorage';
import useContextMenu from '@hooks/useContextMenu';
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
      <Actions saveInLocal={saveInLocal} />

      <Modal>
        <Dropzone />
      </Modal>

      <S.Board>
        {isVisible && <ContextMenu position={position} />}

        <AnimatePresence>
          {polaroids.map((polaroid) => (
            <Polaroid
              key={polaroid.id}
              data={polaroid}
              handleContextMenu={handleOpening}
            />
          ))}
        </AnimatePresence>
      </S.Board>
    </S.AppWrapper>
  );
}

export default App;
