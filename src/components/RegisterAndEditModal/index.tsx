import { ElementType, useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { NewRegistrationButton } from '../NewRegistrationButton';

import {
  DialogContent,
  DialogOverlay,
  DialogClose,
  DialogTitle,
  SubmitButton,
  CancelButton,
} from './styles';

import { X } from 'phosphor-react';

interface RegisterAndEditModalProps {
  title: string;
  form: ElementType;
}

export function RegisterAndEditModal({
  title,
  form,
}: RegisterAndEditModalProps) {
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  const FormComponent = form;

  return (
    <Dialog.Root modal>
      <Dialog.Trigger asChild>
        <NewRegistrationButton ref={triggerButtonRef} title="Novo cliente" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent aria-describedby={undefined}>
            <div>
              <header>
                <DialogTitle>{title}</DialogTitle>
                <DialogClose>
                  <X alt="Fechar" />
                </DialogClose>
              </header>
              <FormComponent />
            </div>
            <footer>
              <CancelButton>Cancelar</CancelButton>
              <SubmitButton type="submit" form="modalForm">
                Cadastrar
              </SubmitButton>
            </footer>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
