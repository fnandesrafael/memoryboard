import { useEffect, useState } from 'react';

const useContextMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleOpening = (e) => {
    e.preventDefault();
    setPosition({ top: e.clientY, left: e.clientX });
    setIsVisible(true);
  };

  const handleClosing = (e) => {
    e.preventDefault();
    setIsVisible(false);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClosing);
  }, [isVisible]);

  return { isVisible, position, handleOpening, handleClosing };
};

export default useContextMenu;
