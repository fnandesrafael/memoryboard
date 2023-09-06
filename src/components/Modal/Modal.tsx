import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { GrFormClose } from 'react-icons/gr';
import { EASE_SWEET } from '@constants/animations/eases';
import useImportStore from '@store/importStore';

import * as S from './styles';

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const { isImporting, setIsImporting } = useImportStore();

  return (
    <AnimatePresence mode="wait">
      {isImporting && (
        <S.Wrapper onClick={() => setIsImporting(false)}>
          <S.Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_SWEET }}
            onClick={() => setIsImporting(false)}
          >
            <GrFormClose />
          </S.Button>

          <S.Container
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 1000 }}
            transition={{ duration: 0.4, ease: EASE_SWEET }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </S.Container>
        </S.Wrapper>
      )}
    </AnimatePresence>
  );
}
