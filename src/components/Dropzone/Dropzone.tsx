import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdOutlineFileUpload } from 'react-icons/md';
import { v4 as uuid } from 'uuid';
import usePolaroidStore from '@store/polaroidStore';

import * as S from './styles';

export class CustomFile extends File {
  id: string;

  position: { x: number; y: number };

  constructor(
    file: Blob,
    filename: string,
    id: string,
    position = { x: 0, y: 0 },
  ) {
    super([file], filename);
    this.id = id;
    this.position = position;
  }
}

export default function Dropzone() {
  const { setPolaroids } = usePolaroidStore();
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      accept: { 'image/*': [] },
    });

  useEffect(() => {
    setPolaroids(
      acceptedFiles.map((file) => new CustomFile(file, file.name, uuid())),
    );
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
