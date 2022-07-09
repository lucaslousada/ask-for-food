import styled from 'styled-components';
import { Trigger, Content, Item } from '@radix-ui/react-dropdown-menu';

interface DropdownMenuItemProps {
  color?: 'red';
}

export const DropdownMenuTrigger = styled(Trigger)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.transparent_color_200};
  border: none;
  border-radius: 4px;
  padding: 4px;
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.color_600};
  }

  > svg {
    width: 20px;
    height: 20px;
  }
`;

export const DropdownMenuContent = styled(Content)`
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.colors.color_100};
  border-radius: 4px;
`;

export const DropdownMenuItem = styled(Item)<DropdownMenuItemProps>`
  cursor: pointer;
  padding: 6px 8px;
  margin: 2px 0;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.color_800};
  font-size: 14px;
  border-radius: 2px;

  &:hover {
    color: ${({ theme }) => theme.colors.color_900};
    background-color: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.color_300};

    &:focus {
      outline: none;
    }
  }
`;
