import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { Close } from '@radix-ui/react-dialog';

export const ModalOverlay = css`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) =>
    transparentize(0.2, theme.colors.color_100)};
`;

export const ModalContent = css`
  width: 90%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.color_400};
`;

export const ModalCloseButton = css`
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