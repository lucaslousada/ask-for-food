import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { darken, transparentize } from 'polished';

interface SubmitButtonProps {
  form: 'modalForm';
}

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) =>
    transparentize(0.2, theme.colors.color_100)};
`;

export const DialogContent = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme.colors.color_400};
  border-radius: 5px;

  > div {
    padding: 2.5rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 40px;

      padding-bottom: 23px;
      margin-bottom: 20px;
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.transparent_color_100};
    }
  }

  > footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 40px;

    padding: 20px 30px;
    background-color: ${({ theme }) => theme.colors.transparent_color_200};
    border-top: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
  }
`;

export const DialogClose = styled(Dialog.Close)`
  display: flex;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 4px;
  transform: translateX(4px);
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparent_color_200};
  }

  > svg {
    width: 20px;
    height: 20px;
  }
`;

export const DialogTitle = styled(Dialog.Title)`
  font-size: 24px;
`;

export const SubmitButton = styled.button<SubmitButtonProps>`
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 5px;
  font-size: 14px;
  padding: 13px 20px;
  border: none;
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.green)};
  }
`;

export const CancelButton = styled(Dialog.Close)`
  background-color: transparent;
  border: none;
  text-decoration: underline transparent;
  text-underline-offset: 2px;
  transition: text-decoration ${({ theme }) => theme.transitions.default};

  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.color_900};
  }
`;
