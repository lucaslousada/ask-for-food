import { Plus } from 'phosphor-react';

import { Container, NewRegistrationLink } from './styles';

interface HeaderProps {
  pageTitle: string;
  buttonText: string;
}

export function Header({ pageTitle, buttonText }: HeaderProps) {
  return (
    <Container>
      <h1>{pageTitle}</h1>
      <NewRegistrationLink to="./new">
        <Plus />
        {buttonText}
      </NewRegistrationLink>
    </Container>
  );
}
