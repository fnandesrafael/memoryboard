import React from 'react';
import { useDropzone } from 'react-dropzone';

import * as S from './styles';

export default function Dropzone() {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'images/*': [] },
  });

  return (
    <S.Container {...getRootProps()}>
      <input {...getInputProps()} />
    </S.Container>
  );
}
