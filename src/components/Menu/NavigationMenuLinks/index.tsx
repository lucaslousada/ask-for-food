import { MenuCategories } from '..';

import { Bell, CaretDoubleLeft } from 'phosphor-react';

import {
  Container,
  Header,
  MinimizeMenuButton,
  List,
  ListItem,
} from './styles';

interface NavigationMenuLinksProps {
  selectedMenuCategory: MenuCategories;
  isTheMenuVisible: boolean;
  onIsTheMenuVisibleChange: (value: boolean) => void;
}

export function NavigationMenuLinks({
  selectedMenuCategory,
  isTheMenuVisible,
  onIsTheMenuVisibleChange,
}: NavigationMenuLinksProps) {
  return (
    <Container isTheMenuVisible={isTheMenuVisible}>
      <Header>
        <h2>{selectedMenuCategory}</h2>
        <MinimizeMenuButton
          type="button"
          onClick={() => onIsTheMenuVisibleChange(false)}
        >
          <CaretDoubleLeft weight="bold" alt="Fechar menu" />
        </MinimizeMenuButton>
      </Header>
      <nav>
        <List
          linkCategory="dashboard"
          selectedMenuCategory={selectedMenuCategory}
        >
          <ListItem>
            <a href="/">
              <Bell />
              <p>Dashboard</p>
            </a>
          </ListItem>
          <ListItem>
            <a href="/">
              <Bell />
              <p>Dashboard</p>
            </a>
          </ListItem>
        </List>
        <List
          linkCategory="register"
          selectedMenuCategory={selectedMenuCategory}
        >
          <ListItem>
            <a href="/">
              <Bell />
              <p>Register</p>
            </a>
          </ListItem>
          <ListItem>
            <a href="/">
              <Bell />
              <p>Register</p>
            </a>
          </ListItem>
        </List>
      </nav>
    </Container>
  );
}
