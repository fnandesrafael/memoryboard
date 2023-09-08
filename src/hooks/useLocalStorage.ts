import { dataURLToBlob } from 'blob-util';
import usePolaroidStore from '@store/polaroidStore';
import { useEffect } from 'react';

const useLocalStorage = () => {
  const { polaroids, setPolaroids } = usePolaroidStore();

  useEffect(() => {
    const convertFiles = async () => {
      const result = polaroids.map(async (polaroid) => {
        const dataUrl = await new Promise((resolve) => {
          const reader = new FileReader();

          reader.onload = (event) => {
            resolve(event.target.result);
          };

          reader.readAsDataURL(polaroid.file);
        });

        return { ...polaroid, file: dataUrl };
      });

      const convertedData = await Promise.all(result);

      localStorage.setItem('polaroids', JSON.stringify(convertedData));
    };

    convertFiles();
  }, [polaroids]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('polaroids')) || [];

    const recoveredData = data.map((obj) => {
      const blob = dataURLToBlob(obj.file);
      const recoveredFile = new File([blob], 'polaroid');
      return { ...obj, file: recoveredFile };
    });

    setPolaroids(recoveredData);
  }, [setPolaroids]);
};

export default useLocalStorage;
