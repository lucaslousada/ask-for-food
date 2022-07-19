import styled from 'styled-components';
import { Overlay } from '@radix-ui/react-dialog';

import { ModalOverlay } from '../../../../styles/shared/Modal';

export const DialogOverlay = styled(Overlay)`
  ${ModalOverlay}
`;
