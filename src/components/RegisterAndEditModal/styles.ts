import styled from 'styled-components';
import {
  Overlay,
  Content,
  Close,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '../../styles/shared/Modal';

export const DialogOverlay = styled(Overlay)`
  ${ModalOverlay}
`;

export const DialogContent = styled(Content)`
  ${ModalContent}
  max-width: 750px;
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

export const DialogClose = styled(Close)`
  ${ModalCloseButton}
`;

export const DialogTitle = styled(Title)`
  font-size: 24px;
`;
