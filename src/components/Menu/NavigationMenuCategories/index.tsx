import { menuCategoriesData, MenuCategories } from '../menu-categories-data';

import { ReactComponent as LogoImg } from '../../../assets/logo.svg';

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
        {Object.entries(menuCategoriesData).map(([key, value]) => {
          const Icon = value.icon;

          return (
            <MenuCategoryButton
              type="button"
              key={key}
              category={key as MenuCategories}
              selectedMenuCategory={selectedMenuCategory}
              onClick={() => handleMenuCategoryChange(key as MenuCategories)}
            >
              <Icon alt={value.name} />
            </MenuCategoryButton>
          );
        })}
      </div>
    </Container>
  );
}
