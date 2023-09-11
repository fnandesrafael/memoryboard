import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { GrFormAdd } from 'react-icons/gr';
import { MdOutlineFileUpload, MdSaveAs } from 'react-icons/md';
import { RiCandleFill } from 'react-icons/ri';
import useImportStore from '@store/importStore';

import * as S from './styles';

type ActionsProps = {
  saveInLocal: () => void;
};

const TRANSITION = {
  type: 'spring',
  bounce: 0.5,
  duration: 0.6,
};

export default function Actions({ saveInLocal }: ActionsProps) {
  const [onToggle, setOnToggle] = useState(false);
  const { setIsImporting } = useImportStore();

  return (
    <S.Wrapper>
      <S.Toggle
        whileHover={{ rotate: 270 }}
        whileTap={{ scale: 1.25 }}
        onClick={() => setOnToggle((prevState) => !prevState)}
      >
        <GrFormAdd className="toggle-icon" />
      </S.Toggle>

      <AnimatePresence>
        {onToggle && (
          <>
            <S.Action
              key="light-btn"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: TRANSITION }}
              exit={{
                scale: 0,
                transition: { ...TRANSITION, bounce: 0 },
              }}
              whileTap={{ scale: 0.8 }}
            >
              <RiCandleFill />
            </S.Action>

            <S.Action
              key="import-btn"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: TRANSITION }}
              exit={{
                scale: 0,
                transition: { ...TRANSITION, bounce: 0 },
              }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsImporting(true)}
            >
              <MdOutlineFileUpload />
            </S.Action>

            <S.Action
              key="save-btn"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: TRANSITION }}
              exit={{
                scale: 0,
                transition: { ...TRANSITION, bounce: 0 },
              }}
              whileTap={{ scale: 0.8 }}
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