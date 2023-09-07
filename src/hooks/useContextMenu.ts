import { useEffect, useState } from 'react';
import usePolaroidStore from '@store/polaroidStore';

const useContextMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const { polaroids, targetPolaroid } = usePolaroidStore();

  const handleOpening = (e) => {
    e.preventDefault();

    setPosition({ top: e.clientY, left: e.clientX });
    setIsVisible(true);

    const [filteredPolaroid] = polaroids.filter(
      (polaroid) => polaroid.id === e.target.id,
    );

    targetPolaroid(filteredPolaroid);
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
