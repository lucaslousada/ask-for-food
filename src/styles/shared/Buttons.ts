import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 5px;
  font-size: 14px;
  padding: 13px 20px;
  border: none;
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.green)};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => transparentize(0.5, theme.colors.green)};

    &:hover {
      background-color: ${({ theme }) =>
        transparentize(0.5, theme.colors.green)};
    }
  }
`;

export const NewRegistrationButton = styled.button`
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
