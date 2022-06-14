import { ReactNode } from 'react';

import { Container } from './styles';

interface HeaderProps {
  title: string;
  newRegistrationButton: ReactNode;
}

export function Header({ title, newRegistrationButton }: HeaderProps) {
  return (
    <Container>
      <h1>{title}</h1>
      {newRegistrationButton}
    </Container>
  );
}
