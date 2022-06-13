import { useState } from 'react';
import { MenuCategories } from './menu-categories-data';
import { NavigationMenuCategories } from './NavigationMenuCategories';
import { NavigationMenuLinks } from './NavigationMenuLinks';

import { Container } from './styles';

interface MenuProps {
  activeCategory: MenuCategories;
}

export function Menu({ activeCategory }: MenuProps) {
  const [isTheMenuVisible, setIsTheMenuVisible] = useState(true);
  const [selectedMenuCategory, setSelectedMenuCategory] =
    useState<MenuCategories>(activeCategory);

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
