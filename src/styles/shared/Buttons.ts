import styled from 'styled-components';
import { darken, transparentize } from 'polished';
import { DialogClose } from '@radix-ui/react-dialog';

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

export const CloseDialogButton = styled(DialogClose)`
  background-color: transparent;
  border: none;
  text-decoration: underline transparent;
  text-underline-offset: 2px;
  transition: text-decoration ${({ theme }) => theme.transitions.default};

  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.color_900};
  }
`;
