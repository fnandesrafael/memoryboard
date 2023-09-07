import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { GrFormClose } from 'react-icons/gr';
import { EASE_SWEET } from '@constants/animations/eases';
import useImportStore from '@store/importStore';
import useEscape from '@hooks/useEscape';

import * as S from './styles';

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
  const { isImporting, setIsImporting } = useImportStore();

  useEscape();

  return (
    <AnimatePresence mode="wait">
      {isImporting && (
        <S.Wrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_SWEET }}
          onClick={() => setIsImporting(false)}
        >
          <S.Button onClick={() => setIsImporting(false)}>
            <GrFormClose />
          </S.Button>

          <S.Container onClick={(e) => e.stopPropagation()}>
            {children}
          </S.Container>
        </S.Wrapper>
      )}
    </AnimatePresence>
  );
}
