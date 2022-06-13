import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
import { MenuCategories } from '../menu-categories-data';

interface MenuCategoryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  category: MenuCategories;
  selectedMenuCategory: MenuCategories;
}

export const Container = styled.div`
  z-index: 1;
  overflow: auto;
  width: min-content;
  padding: 30px 15px 20px;

  background-color: ${({ theme }) => theme.colors.color_100};
`;

export const Logo = styled.div`
  display: flex;
  padding: 6px;
  margin-bottom: 25px;
  border: 1px solid ${({ theme }) => theme.colors.color_400};
  border-radius: 5px;

  > svg {
    width: 32px;
    height: 32px;
  }
`;

export const MenuCategoryButton = styled.button<MenuCategoryButtonProps>`
  display: flex;
  padding: 7px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  margin: 0 auto;
  transition: background-color ${({ theme }) => theme.transitions.default};

  & + button {
    margin-top: 10px;
  }

  > svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.color_400};
    transition: color ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.color_400};

    > svg {
      color: ${({ theme }) => theme.colors.color_900};
    }
  }

  // active status

  background-color: ${({ theme, selectedMenuCategory, category }) =>
    selectedMenuCategory === category ? theme.colors.color_400 : 'transparent'};

  > svg {
    color: ${({ theme, selectedMenuCategory, category }) =>
      selectedMenuCategory === category
        ? theme.colors.color_900
        : theme.colors.color_400};
  }
`;
