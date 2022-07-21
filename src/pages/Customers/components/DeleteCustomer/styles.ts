import styled from 'styled-components';
import { Content, Title, Description } from '@radix-ui/react-dialog';

import { ModalContent, ModalFooter } from '../../../../styles/shared/Modal';

export const DialogContent = styled(Content)`
  ${ModalContent}
  max-width: 440px;

  > div {
    ${ModalFooter}
  }
`;

export const DialogTitle = styled(Title)`
  font-size: 24px;
  padding: 24px;
`;

export const DialogDescription = styled(Description)`
  font-size: 16px;
  padding: 0 24px 16px;
  color: ${({ theme }) => theme.colors.color_800};

  strong {
    color: ${({ theme }) => theme.colors.color_900};
  }
`;
