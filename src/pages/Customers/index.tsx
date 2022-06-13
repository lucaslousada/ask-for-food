import { Menu } from '../../components/Menu';

import { Container } from './styles';

export function Customers() {
  return (
    <Container>
      <Menu activeCategory="registers" />
      <main>Content</main>
    </Container>
  );
}
