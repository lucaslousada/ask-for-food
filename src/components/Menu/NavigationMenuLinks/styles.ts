import styled from 'styled-components';

interface ContainerProps {
  isTheMenuVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  transition: width ${({ theme }) => theme.transitions.default},
    transform ${({ theme }) => theme.transitions.default},
    padding ${({ theme }) => theme.transitions.default};

  width: ${({ isTheMenuVisible }) =>
    isTheMenuVisible === true ? '250px' : '0'};
  transform: ${({ isTheMenuVisible }) =>
    isTheMenuVisible === true ? 'initial' : 'translateX(-250px)'};
  padding: ${({ isTheMenuVisible }) =>
    isTheMenuVisible === true ? '40px 15px 20px' : '40px 0 20px'};

  overflow-y: auto;
  overflow-x: hidden;
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
  padding: 5px;
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

export const List = styled.ul`
  font-size: 14px;

  li a {
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 8px 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.color_700};
    transition: color ${({ theme }) => theme.transitions.default},
      background-color ${({ theme }) => theme.transitions.default};

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
    margin-top: 5px;
  }
`;
