import { ReactNode, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { NewRegistrationButton } from '../NewRegistrationButton';

import {
  DialogContent,
  DialogOverlay,
  DialogClose,
  DialogTitle,
} from './styles';

import { X } from 'phosphor-react';

interface RegisterAndEditModalProps {
  title: string;
  form: ReactNode;
  modalIsOpen: boolean;
  onModalOpenChange: (value: boolean) => void;
}

export function RegisterAndEditModal({
  title,
  form,
  modalIsOpen,
  onModalOpenChange,
}: RegisterAndEditModalProps) {
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog.Root modal open={modalIsOpen} onOpenChange={onModalOpenChange}>
      <Dialog.Trigger asChild>
        <NewRegistrationButton ref={triggerButtonRef} title="Novo cliente" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent aria-describedby={undefined}>
            <header>
              <DialogTitle>{title}</DialogTitle>
              <DialogClose>
                <X alt="Fechar" />
              </DialogClose>
            </header>
            {form}
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
