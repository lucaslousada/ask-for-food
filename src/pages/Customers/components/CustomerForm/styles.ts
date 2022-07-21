import styled from 'styled-components';
import { Close, Content, Description, Title } from '@radix-ui/react-dialog';

import {
  ModalCloseButton,
  ModalContent,
  ModalFooter,
} from '../../../../styles/shared/Modal';

export const DialogContent = styled(Content)`
  ${ModalContent}
  max-width: 650px;
  max-height: 510px;
  overflow-y: auto;

  header {
    display: grid;
    grid-template-columns: auto min-content;
    grid-template-areas: 'title close' 'description description';

    padding: 24px;
  }

  form > div:last-of-type {
    ${ModalFooter}
  }
`;

export const DialogTitle = styled(Title)`
  font-size: 24px;
  grid-area: title;
`;

export const DialogDescription = styled(Description)`
  color: ${({ theme }) => theme.colors.color_800};
  margin-top: 8px;
  grid-area: description;
`;

export const DialogClose = styled(Close)`
  ${ModalCloseButton}
  grid-area: close;
  height: min-content;
`;

export const FieldsWrapper = styled.div`
  display: grid;
  padding: 0 24px 16px;

  grid-template-columns: 33% 10% 16% 33%;
  gap: 16px;

  > div:nth-child(1) {
    grid-column: 1 / span 3;
  }

  > div:nth-child(2) {
    grid-column: 4 / span 1;
  }

  > div:nth-child(3) {
    grid-column: 1 / span 2;
  }

  > div:nth-child(4) {
    grid-column: 3 / span 1;
  }

  > div:nth-child(5) {
    grid-column: 4 / span 1;
  }

  > div:nth-child(6) {
    grid-column: 1 / span 1;
  }

  > div:nth-child(7) {
    grid-column: 2 / span 3;
  }
`;
