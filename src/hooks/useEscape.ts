import { useCallback, useEffect } from 'react';
import useImportStore from '@store/importStore';

const useEscape = () => {
  const { isImporting, setIsImporting } = useImportStore();

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isImporting) {
        setIsImporting(false);
      }
    },
    [isImporting, setIsImporting],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
};

export default useEscape;
