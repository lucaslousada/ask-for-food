import { Container } from './styles';

import { Plus } from 'phosphor-react';

interface NewRegistrationButtonProps {
  title: string;
}

export function NewRegistrationButton({ title }: NewRegistrationButtonProps) {
  return (
    <Container type="button">
      <Plus weight="bold" />
      {title}
    </Container>
  );
}
