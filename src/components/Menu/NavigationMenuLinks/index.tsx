import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { NavLink } from 'react-router-dom';
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

interface linkIsActiveProps {
  isActive: boolean;
}

export function NavigationMenuLinks({
  selectedMenuCategory,
  isTheMenuVisible,
  onIsTheMenuVisibleChange,
}: NavigationMenuLinksProps) {
  const { colors } = useContext(ThemeContext);

  function linkIsActive({ isActive }: linkIsActiveProps) {
    return {
      color: isActive ? colors.color_900 : '',
      backgroundColor: isActive ? colors.transparent_color_200 : '',
    };
  }

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
                    <NavLink to={page.url} style={linkIsActive}>
                      <Icon />
                      <p>{page.name}</p>
                    </NavLink>
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
