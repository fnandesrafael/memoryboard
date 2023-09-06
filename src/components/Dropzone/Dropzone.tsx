import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import usePolaroidStore from '@store/polaroidStore';

import * as S from './styles';

export default function Dropzone() {
  const { setPolaroids } = usePolaroidStore();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
  });

  useEffect(() => {
    setPolaroids(acceptedFiles);
  }, [acceptedFiles, setPolaroids]);

  return (
    <S.Container {...getRootProps()}>
      <input {...getInputProps()} />
    </S.Container>
  );
}
