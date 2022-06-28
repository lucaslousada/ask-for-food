import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { transparentize } from 'polished';

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
  max-width: 750px;
  width: 90%;
  max-height: 510px;
  overflow-y: auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 40px;

    margin: 30px 30px 0;
    padding-bottom: 23px;
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.transparent_color_100};
  }

  form > div:last-of-type {
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
