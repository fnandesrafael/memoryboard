import { useEffect, useState } from 'react';
import usePolaroidStore from '@store/polaroidStore';

const useLocalStorage = () => {
  const [hasSaved, setHasSaved] = useState(false);
  const { polaroids, setPolaroids } = usePolaroidStore();

  const saveInLocal = () => {
    localStorage.setItem('polaroids', JSON.stringify(polaroids));

    setHasSaved(true);

    setTimeout(() => {
      setHasSaved(false);
    }, 2000);
  };

  useEffect(() => {
    const recoveredData = JSON.parse(localStorage.getItem('polaroids')) || [];

    setPolaroids(recoveredData);
  }, [setPolaroids]);

  return { hasSaved, saveInLocal };
};

export default useLocalStorage;
