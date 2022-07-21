import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { darken, transparentize } from 'polished';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'red' | 'green';
}

export const SubmitButton = styled.button<SubmitButtonProps>`
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 3px;
  font-size: 12px;
  padding: 10px 20px;
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
