import styled from 'styled-components';
import { MenuCategories } from '../menu-categories-data';

interface ContainerProps {
  isTheMenuVisible: boolean;
}

interface ListProps {
  linkCategory: MenuCategories;
  selectedMenuCategory: MenuCategories;
}

export const Container = styled.div<ContainerProps>`
  transition: transform ${({ theme }) => theme.transitions.default};
  transform: ${({ isTheMenuVisible }) =>
    isTheMenuVisible === true ? 'initial' : 'translateX(-250px)'};

  overflow: auto;
  width: 250px;
  padding: 42px 15px 20px;
  background-color: ${({ theme }) => theme.colors.color_200};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  > h2 {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.color_700};
    text-transform: capitalize;
  }
`;

export const MinimizeMenuButton = styled.button`
  display: flex;
  padding: 3px;
  border-radius: 3px;
  background-color: transparent;
  border: none;
  transition: background-color ${({ theme }) => theme.transitions.default};

  svg {
    width: 15px;
    height: 15px;
    color: ${({ theme }) => theme.colors.color_700};
    transition: color ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparent_color_200};

    svg {
      color: ${({ theme }) => theme.colors.color_900};
    }
  }
`;

export const List = styled.ul<ListProps>`
  display: ${({ selectedMenuCategory, linkCategory }) =>
    selectedMenuCategory === linkCategory ? 'initial' : 'none'};
  font-size: 14px;

  li a {
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.color_700};
    transition-property: color, background-color;
    transition: ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.color_900};
      background-color: ${({ theme }) => theme.colors.transparent_color_200};
    }

    svg {
      min-width: 24px;
      min-height: 24px;
    }

    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export const ListItem = styled.li`
  & + li {
    margin-top: 10px;
  }
`;
