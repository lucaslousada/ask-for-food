import { ButtonHTMLAttributes, forwardRef } from 'react';

import { Plus } from 'phosphor-react';

import { Container } from './styles';

interface NewRegistrationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  [x: string]: any;
}

export const NewRegistrationButton = forwardRef<
  HTMLButtonElement,
  NewRegistrationButtonProps
>(({ title, ...modalTriggerProps }, ref) => {
  return (
    <Container type="button" ref={ref} {...modalTriggerProps}>
      <Plus />
      {title}
    </Container>
  );
});
