import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import usePolaroidStore from '@store/polaroidStore';
import useLocalStorage from '@hooks/useLocalStorage';
import useContextMenu from '@hooks/useContextMenu';
import Actions from '@components/Actions';
import Modal from '@components/Modal';
import Dropzone from '@components/Dropzone';
import Polaroid from '@components/Polaroid';
import ContextMenu from '@components/ContextMenu';
import Marquee from '@components/Marquee';
import Notification from '@components/Notification';

import * as S from './global.styles';

function App() {
  const [isLit, setIsLit] = useState(false);
  const { polaroids } = usePolaroidStore();
  const { isVisible, position, handleOpening } = useContextMenu();
  const { hasSaved, saveInLocal } = useLocalStorage();

  return (
    <S.AppWrapper>
      <AnimatePresence mode="wait">
        {hasSaved && (
          <Notification icon={<MdOutlineNotificationsActive />}>
            Saved With Success!
          </Notification>
        )}
      </AnimatePresence>

      <Actions saveInLocal={saveInLocal} lightCandle={setIsLit} />

      <AnimatePresence>
        {isLit && (
          <>
            <S.Candle
              src="https://i.gifer.com/1ABb.gif"
              initial={{ y: 250 }}
              animate={{ y: 0 }}
              exit={{ y: 250 }}
            />
          </>
        )}
      </AnimatePresence>

      <Modal>
        <Dropzone />
      </Modal>

      <AnimatePresence>{polaroids.length === 0 && <Marquee />}</AnimatePresence>

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
