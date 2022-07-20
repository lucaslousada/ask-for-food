import styled, { css } from 'styled-components';
import { Close } from '@radix-ui/react-dialog';

export const ModalContent = css`
  width: 90%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.color_400};
`;

export const DialogClose = styled(Close)`
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

export const ModalFooter = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 40px;

  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.transparent_color_200};
  border-top: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
`;

export const ModalCancelButton = styled(Close)`
  background-color: transparent;
  border: none;
  text-decoration: underline transparent;
  text-underline-offset: 2px;
  transition: text-decoration ${({ theme }) => theme.transitions.default};

  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.color_900};
  }
`;
