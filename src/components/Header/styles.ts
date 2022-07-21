import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 20px;
  }
`;

export const NewRegistrationLink = styled(Link)`
  padding: 10px 20px;
  border-radius: 3px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.transparent_color_200};
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparent_color_100};
  }
`;
