import { Container, NewRegistrationLink } from './styles';

interface HeaderProps {
  pageTitle: string;
}

export function Header({ pageTitle }: HeaderProps) {
  return (
    <Container>
      <h1>{pageTitle}</h1>
      <NewRegistrationLink to="./new">Cadastrar</NewRegistrationLink>
    </Container>
  );
}
