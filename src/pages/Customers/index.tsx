import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { NewRegistrationButton } from '../../components/NewRegistrationButton';

import { Container, Main } from './styles';

export function Customers() {
  return (
    <Container>
      <Menu activeCategory="registers" />
      <Main>
        <Header
          title="Clientes"
          newRegistrationButton={<NewRegistrationButton title="Novo cliente" />}
        />
        <p>Content</p>
      </Main>
    </Container>
  );
}
