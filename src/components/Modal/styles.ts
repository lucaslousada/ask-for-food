import styled from 'styled-components';
import { transparentize } from 'polished';
import { Overlay } from '@radix-ui/react-dialog';

export const DialogOverlay = styled(Overlay)`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) =>
    transparentize(0.2, theme.colors.color_100)};
`;
