import { dataURLToBlob } from 'blob-util';
import { CustomFile } from '@components/Dropzone/Dropzone';
import usePolaroidStore from '@store/polaroidStore';
import { useEffect } from 'react';

const useLocalStorage = () => {
  const { polaroids, updatePosition, recoverPolaroids } = usePolaroidStore();

  useEffect(() => {
    const persistedData = JSON.parse(localStorage.getItem('polaroids')) || [];

    const parsedPolaroids = persistedData.map(
      ({ dataUrl, filename, id, position }) => {
        const blob = dataURLToBlob(dataUrl);
        return new CustomFile(blob, filename, id, position);
      },
    );

    recoverPolaroids(parsedPolaroids);
  }, [recoverPolaroids]);

  useEffect(() => {
    const parsePolaroids = async () => {
      const promises = polaroids.map(async (polaroid) => {
        return new Promise((resolve) => {
          const reader = new FileReader();

          reader.onload = (event) => {
            resolve({
              id: polaroid.id,
              name: polaroid.name,
              position: polaroid.position,
              dataUrl: event.target.result,
            });
          };

          reader.readAsDataURL(polaroid);
        });
      });

      const parsedPolaroids = await Promise.all(promises);

      localStorage.setItem('polaroids', JSON.stringify(parsedPolaroids));
    };

    parsePolaroids();
  }, [polaroids, updatePosition]);
};

export default useLocalStorage;
