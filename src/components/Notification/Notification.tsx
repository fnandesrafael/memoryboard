import React from 'react';

import * as S from './styles';

type NotificationProps = {
  icon: React.ReactNode;
  children: string;
};

export default function Notification({ children, icon }: NotificationProps) {
  return (
    <S.Container initial={{ y: -200 }} animate={{ y: 0 }} exit={{ y: -200 }}>
      <S.Icon>{icon}</S.Icon>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
}
