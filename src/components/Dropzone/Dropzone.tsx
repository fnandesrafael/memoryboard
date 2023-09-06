import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdOutlineFileUpload } from 'react-icons/md';
import usePolaroidStore from '@store/polaroidStore';

import * as S from './styles';

export default function Dropzone() {
  const { setPolaroids } = usePolaroidStore();
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: { 'image/*': [] },
    });

  useEffect(() => {
    setPolaroids(acceptedFiles);
  }, [acceptedFiles, setPolaroids]);

  return (
    <S.Container {...getRootProps()} $isDragActive={isDragActive}>
      <MdOutlineFileUpload />
      <S.Heading>Import your images</S.Heading>
      <S.Paragraph>Click or drag to upload them</S.Paragraph>
      <input {...getInputProps()} />
    </S.Container>
  );
}
