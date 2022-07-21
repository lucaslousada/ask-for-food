import styled from 'styled-components';
import { Overlay } from '@radix-ui/react-dialog';

export const DialogOverlay = styled(Overlay)`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.85);
`;
