import styled from 'styled-components';
import { Content, Title } from '@radix-ui/react-dialog';

import { ModalContent, ModalFooter } from '../../../../styles/shared/Modal';

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

export const DialogTitle = styled(Title)`
  font-size: 24px;
`;

export const FieldsWrapper = styled.div`
  display: grid;
  padding: 20px 30px 40px;

  grid-template-columns: 33% 10% 14.7% 33%;
  gap: 20px;

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
