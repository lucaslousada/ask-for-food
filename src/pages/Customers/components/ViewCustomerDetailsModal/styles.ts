import styled from 'styled-components';
import { transparentize } from 'polished';
import {
  Overlay,
  Trigger,
  Close,
  Content,
  Title,
} from '@radix-ui/react-dialog';

import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '../../../../styles/shared/Modal';

export const DialogOverlay = styled(Overlay)`
  ${ModalOverlay}
`;

export const DialogContent = styled(Content)`
  ${ModalContent}
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  max-height: 570px;
  padding-bottom: 20px;
  overflow-y: auto;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 140px;
    background-color: ${({ theme }) => theme.colors.color_300};
  }

  > header {
    z-index: 1;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
  }

  section {
    z-index: 1;

    header {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 22px 0 40px;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.color_200};
        font-size: 32px;
      }

      p {
        font-size: 14px;
      }
    }

    table {
      width: 100%;
      border-spacing: 0;
      font-size: 14px;
      text-align: left;
      border-top: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.transparent_color_100};

      tr + tr th,
      tr + tr td {
        border-top: 1px solid
          ${({ theme }) => theme.colors.transparent_color_100};
      }

      th {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.color_800};
        padding: 10px 30px 10px 40px;
      }

      td {
        padding: 10px 40px 10px 0;
        width: 100%;
      }
    }
  }
`;

export const DialogTrigger = styled(Trigger)`
  display: flex;
  padding: 7px;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparent_color_100};

    svg {
      color: ${({ theme }) => theme.colors.color_900};
    }
  }

  svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => transparentize(0.6, theme.colors.color_900)};
    transition: color ${({ theme }) => theme.transitions.default};
  }
`;

export const MoreOptions = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.transparent_color_200};
  border: none;
  border-radius: 4px;
  padding: 4px;
  transition: background-color ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.color_600};
  }

  > svg {
    width: 20px;
    height: 20px;
  }
`;

export const DialogClose = styled(Close)`
  ${ModalCloseButton}
`;

export const DialogTitle = styled(Title)`
  font-size: 16px;
`;
