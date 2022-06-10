import { MenuCategories } from '..';

import { ReactComponent as LogoImg } from '../../../assets/logo.svg';
import { House } from 'phosphor-react';

import { Container, Logo, MenuCategoryButton } from './styles';

interface NavigationMenuCategoriesProps {
  selectedMenuCategory: MenuCategories;
  onMenuCategoryChange: (category: MenuCategories) => void;
  onIsTheMenuVisibleChange: (value: boolean) => void;
}

export function NavigationMenuCategories({
  selectedMenuCategory,
  onMenuCategoryChange,
  onIsTheMenuVisibleChange,
}: NavigationMenuCategoriesProps) {
  function handleMenuCategoryChange(selectedCategory: MenuCategories) {
    onMenuCategoryChange(selectedCategory);
    onIsTheMenuVisibleChange(true);
  }

  return (
    <Container>
      <Logo>
        <LogoImg />
      </Logo>

      <div>
        <MenuCategoryButton
          category="dashboard"
          selectedMenuCategory={selectedMenuCategory}
          onClick={() => handleMenuCategoryChange('dashboard')}
        >
          <House alt="Principais páginas" />
        </MenuCategoryButton>
        <MenuCategoryButton
          category="register"
          selectedMenuCategory={selectedMenuCategory}
          onClick={() => handleMenuCategoryChange('register')}
        >
          <House alt="Principais páginas" />
        </MenuCategoryButton>
      </div>
    </Container>
  );
}
