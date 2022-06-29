import { ChangeEvent } from 'react';
import { Formik, Form } from 'formik';
import InputMask from 'react-input-mask';
import { api } from '../../../../services/api';
import { Customers } from '../..';
import { schema } from './schema';
import { Field } from '../../../../components/Form/Field';

import { FieldsWrapper } from './styles';
import { SubmitButton } from '../../../../styles/shared/Buttons';
import { ModalCancelButton } from '../../../../styles/shared/Modal';

export type CustomerForm = Omit<Customers, 'id' | 'createdAt'>;

interface CustomerFormProps {
  customers: Customers[];
  onCustomersChange: (customers: Customers[]) => void;
  onModalOpenChange: (value: boolean) => void;
}

export function CustomerForm({
  customers,
  onCustomersChange,
  onModalOpenChange,
}: CustomerFormProps) {
  async function handleCustomerFormSubmit(values: CustomerForm) {
    const response = await api.post('/customers', {
      ...values,
      createdAt: new Date(),
    });
    const customer = response.data;
    onCustomersChange([...customers, customer]);
    onModalOpenChange(false);
  }

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: '',
        phone: '',
        address: {
          street_name: '',
          number: '',
          neighborhood: '',
          city: '',
          complement: '',
        },
      }}
      onSubmit={handleCustomerFormSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form>
          <FieldsWrapper>
            <Field type="text" name="name" label="Nome" />
            <Field
              component={InputMask}
              mask="(99) 99999-9999"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                setFieldValue('phone', value.replace(/[^0-9]/g, ''));
              }}
              type="text"
              name="phone"
              label="Telefone"
            />
            <Field type="text" name="address.street_name" label="Rua" />
            <Field type="text" name="address.number" label="Número" />
            <Field type="text" name="address.neighborhood" label="Bairro" />
            <Field type="text" name="address.city" label="Cidade" />
            <Field type="text" name="address.complement" label="Complemento" />
          </FieldsWrapper>

          <div>
            <ModalCancelButton>Cancelar</ModalCancelButton>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Cadastrar
            </SubmitButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
