import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Root as DialogRoot,
  Portal as DialogPortal,
} from '@radix-ui/react-dialog';

import { DialogOverlay } from './styles';

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    !modalIsOpen && navigate('..');
  }, [modalIsOpen]);

  return (
    <DialogRoot open={modalIsOpen} onOpenChange={setModalIsOpen}>
      <DialogPortal>
        <DialogOverlay>{children}</DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  );
}
