import { useEffect } from 'react';
import usePolaroidStore from '@store/polaroidStore';

const useLocalStorage = () => {
  const { polaroids, setPolaroids } = usePolaroidStore();

  const saveInLocal = () => {
    localStorage.setItem('polaroids', JSON.stringify(polaroids));
  };

  useEffect(() => {
    const recoveredData = JSON.parse(localStorage.getItem('polaroids')) || [];

    setPolaroids(recoveredData);
  }, [setPolaroids]);

  return { saveInLocal };
};

export default useLocalStorage;
