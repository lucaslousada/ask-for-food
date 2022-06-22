import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 12px 16px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
  background-color: ${({ theme }) => theme.colors.transparent_color_200};
  font-size: 12px;
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.color_600};
  }

  > svg {
    width: 15px;
    height: 15px;
  }
`;
