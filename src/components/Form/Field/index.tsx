import { ElementType } from 'react';
import { useField } from 'formik';

import { WarningCircle } from 'phosphor-react';

import { Container } from './styles';

interface FieldProps {
  type: string;
  name: string;
  label: string;
  component?: ElementType;
  [x: string]: any;
}

export function Field({
  label,
  component: InputComponent = 'input',
  ...rest
}: FieldProps) {
  const [inputProps, metaProps] = useField(rest);

  const id = rest.name;

  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <InputComponent id={id} {...inputProps} {...rest} />
      {metaProps.error && metaProps.touched && (
        <span>
          <WarningCircle weight="duotone" />
          {metaProps.error.toString()}
        </span>
      )}
    </Container>
  );
}
