import { useState } from 'react';
import { MenuCategories } from './menu-categories-data';
import { NavigationMenuCategories } from './NavigationMenuCategories';
import { NavigationMenuLinks } from './NavigationMenuLinks';

import { Container } from './styles';

export function Menu() {
  const [isTheMenuVisible, setIsTheMenuVisible] = useState(true);
  const [selectedMenuCategory, setSelectedMenuCategory] =
    useState<MenuCategories>('register');

  return (
    <Container>
      <NavigationMenuCategories
        selectedMenuCategory={selectedMenuCategory}
        onMenuCategoryChange={setSelectedMenuCategory}
        onIsTheMenuVisibleChange={setIsTheMenuVisible}
      />
      <NavigationMenuLinks
        selectedMenuCategory={selectedMenuCategory}
        isTheMenuVisible={isTheMenuVisible}
        onIsTheMenuVisibleChange={setIsTheMenuVisible}
      />
    </Container>
  );
}
