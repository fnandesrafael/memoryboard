import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineLoading } from 'react-icons/ai';
import { MdOutlineFileUpload } from 'react-icons/md';
import { v4 as uuid } from 'uuid';
import usePolaroidStore from '@store/polaroidStore';
import compressImg from '@utils/compressImg';

import * as S from './styles';

export default function Dropzone() {
  const [isLoading, setIsLoading] = useState(false);
  const { polaroids, addPolaroids } = usePolaroidStore();
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: { 'image/*': [] },
    });

  useEffect(() => {
    const handleUploads = async () => {
      const response = acceptedFiles.map(async (file) => {
        return {
          id: uuid(),
          file: await compressImg(file),
          fileName: file.name,
          position: {
            x: Math.floor(Math.random() * 101) + 450,
            y: Math.floor(Math.random() * 101) + 100,
          },
          layer: Math.max(...polaroids.map((polaroid) => polaroid.layer)) + 1,
        };
      });

      setIsLoading(true);

      addPolaroids(await Promise.all(response));

      setIsLoading(false);
    };

    handleUploads();
  }, [acceptedFiles, addPolaroids]);

  return (
    <>
      {isLoading ? (
        <S.Loading
          whileInView={{
            rotate: 360,
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          }}
        >
          <AiOutlineLoading />
        </S.Loading>
      ) : (
        <S.Container {...getRootProps()} $isDragActive={isDragActive}>
          <input {...getInputProps()} />

          <MdOutlineFileUpload />
          <S.Heading>Import your images</S.Heading>
          <S.Paragraph>Click or drag to upload them</S.Paragraph>
        </S.Container>
      )}
    </>
  );
}
