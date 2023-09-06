import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import * as S from './styles';

export default function Dropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
  });

  useEffect(() => {
    console.log(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <S.Container {...getRootProps()}>
      <input {...getInputProps()} />
    </S.Container>
  );
}
