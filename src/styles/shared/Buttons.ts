import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { darken, transparentize } from 'polished';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit';
  color: 'red' | 'green';
}

export const SubmitButton = styled.button<SubmitButtonProps>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 5px;
  font-size: 14px;
  padding: 13px 20px;
  border: none;
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme, color }) => darken(0.1, theme.colors[color])};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme, color }) =>
      transparentize(0.5, theme.colors[color])};

    &:hover {
      background-color: ${({ theme, color }) =>
        transparentize(0.5, theme.colors[color])};
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
