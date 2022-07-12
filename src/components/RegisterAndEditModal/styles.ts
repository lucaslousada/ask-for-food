import styled from 'styled-components';
import { Overlay, Content, Close, Title } from '@radix-ui/react-dialog';

import {
  ModalCloseButton,
  ModalContent,
  ModalFooter,
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
    ${ModalFooter}
  }
`;

export const DialogClose = styled(Close)`
  ${ModalCloseButton}
`;

export const DialogTitle = styled(Title)`
  font-size: 24px;
`;
