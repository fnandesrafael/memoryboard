import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdOutlineFileUpload } from 'react-icons/md';
import { v4 as uuid } from 'uuid';
import usePolaroidStore from '@store/polaroidStore';

import * as S from './styles';

export default function Dropzone() {
  const { addPolaroids } = usePolaroidStore();
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: { 'image/*': [] },
    });

  useEffect(() => {
    addPolaroids(
      acceptedFiles.map((file, index) => {
        return {
          id: uuid(),
          file,
          fileName: file.name,
          position: {
            x: Math.floor(Math.random() * 101) + 450,
            y: Math.floor(Math.random() * 101) + 100,
          },
          layer: 40 + index,
        };
      }),
    );
  }, [acceptedFiles, addPolaroids]);

  return (
    <S.Container {...getRootProps()} $isDragActive={isDragActive}>
      <input {...getInputProps()} />

      <MdOutlineFileUpload />
      <S.Heading>Import your images</S.Heading>
      <S.Paragraph>Click or drag to upload them</S.Paragraph>
    </S.Container>
  );
}
