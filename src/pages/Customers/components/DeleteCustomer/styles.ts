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
  padding: 30px 30px 20px;
`;

export const DialogDescription = styled(Description)`
  font-size: 16px;
  padding: 0 30px 40px;
  color: ${({ theme }) => theme.colors.color_800};

  strong {
    color: ${({ theme }) => theme.colors.color_900};
  }
`;
