import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { GrFormAdd } from 'react-icons/gr';
import { MdOutlineFileUpload, MdSaveAs } from 'react-icons/md';
import useImportStore from '@store/importStore';

import * as S from './styles';

type ActionsProps = {
  saveInLocal: () => void;
};

const TRANSITION = { type: 'spring', bounce: 0.45, duration: 0.6 };

export default function Actions({ saveInLocal }: ActionsProps) {
  const [onToggle, setOnToggle] = useState(false);
  const { setIsImporting } = useImportStore();

  return (
    <S.Wrapper>
      <S.Toggle
        whileHover={{ rotate: 360 }}
        onClick={() => setOnToggle((prevState) => !prevState)}
      >
        <GrFormAdd className="toggle-icon" />
      </S.Toggle>

      <AnimatePresence mode="wait">
        {onToggle && (
          <>
            <S.Action
              key="import-btn"
              initial={{ y: 70 }}
              animate={{ y: 0 }}
              exit={{ y: 70 }}
              transition={TRANSITION}
              onClick={() => setIsImporting(true)}
            >
              <MdOutlineFileUpload />
            </S.Action>

            <S.Action
              key="save-btn"
              initial={{ y: 130 }}
              animate={{ y: 0 }}
              exit={{ y: 130 }}
              transition={TRANSITION}
              onClick={saveInLocal}
            >
              <MdSaveAs />
            </S.Action>
          </>
        )}
      </AnimatePresence>
    </S.Wrapper>
  );
}
