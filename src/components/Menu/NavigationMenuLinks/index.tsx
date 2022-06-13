import { menuCategoriesData, MenuCategories } from '../menu-categories-data';

import { CaretDoubleLeft } from 'phosphor-react';

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
        <h2>
          {Object.entries(menuCategoriesData).map(([key, value]) => {
            return selectedMenuCategory === key ? value.name : null;
          })}
        </h2>
        <MinimizeMenuButton
          type="button"
          onClick={() => onIsTheMenuVisibleChange(false)}
        >
          <CaretDoubleLeft weight="bold" alt="Fechar menu" />
        </MinimizeMenuButton>
      </Header>

      <nav>
        {Object.entries(menuCategoriesData).map(([key, value]) => {
          return (
            <List
              key={key}
              linkCategory={key as MenuCategories}
              selectedMenuCategory={selectedMenuCategory}
            >
              {value.pages.map((page, index) => {
                const Icon = page.icon;

                return (
                  <ListItem key={index}>
                    <a href={page.url}>
                      <Icon />
                      <p>{page.name}</p>
                    </a>
                  </ListItem>
                );
              })}
            </List>
          );
        })}
      </nav>
    </Container>
  );
}
