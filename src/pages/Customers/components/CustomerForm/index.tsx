import { Container } from './styles';

export function CustomerForm() {
  return (
    <Container id="modalForm">
      <label htmlFor="name">Nome</label>
      <input id="name" type="text" />
    </Container>
  );
}
