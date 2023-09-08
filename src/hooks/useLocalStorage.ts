import { dataURLToBlob } from 'blob-util';
import usePolaroidStore, { Polaroid } from '@store/polaroidStore';
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

          reader.readAsDataURL(polaroid.file as Blob);
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

    const recoveredData = data.map((obj: Polaroid) => {
      const blob = dataURLToBlob(obj.file as string);
      const recoveredFile = new File([blob], obj.fileName);
      return { ...obj, file: recoveredFile };
    });

    setPolaroids(recoveredData);
  }, [setPolaroids]);
};

export default useLocalStorage;
