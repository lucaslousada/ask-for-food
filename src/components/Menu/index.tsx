import { useState } from 'react';
import { NavigationMenuCategories } from './NavigationMenuCategories';
import { NavigationMenuLinks } from './NavigationMenuLinks';

import { Container } from './styles';

export type MenuCategories = 'dashboard' | 'register';

export function Menu() {
  const [isTheMenuVisible, setIsTheMenuVisible] = useState(true);
  const [selectedMenuCategory, setSelectedMenuCategory] =
    useState<MenuCategories>('dashboard');

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
