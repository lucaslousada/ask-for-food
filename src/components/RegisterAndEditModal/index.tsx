import { ReactNode, useRef } from 'react';
import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
  Portal as DialogPortal,
} from '@radix-ui/react-dialog';

import {
  DialogContent,
  DialogOverlay,
  DialogClose,
  DialogTitle,
} from './styles';

import { Plus, X } from 'phosphor-react';
import { NewRegistrationButton } from '../../styles/shared/Buttons';

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
    <DialogRoot modal open={modalIsOpen} onOpenChange={onModalOpenChange}>
      <DialogTrigger asChild>
        <NewRegistrationButton>
          <Plus />
          {title}
        </NewRegistrationButton>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay>
          <DialogContent aria-describedby={undefined}>
            <header>
              <DialogTitle asChild>
                <h3>{title}</h3>
              </DialogTitle>
              <DialogClose>
                <X alt="Fechar" />
              </DialogClose>
            </header>
            {form}
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  );
}
