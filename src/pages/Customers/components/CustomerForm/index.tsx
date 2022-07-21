import { ChangeEvent } from 'react';
import { Formik, Form } from 'formik';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../../services/api';
import { CustomerDataType, useAllCustomersAndSelectedCustomer } from '../..';
import { schema } from './schema';
import { Field } from '../../../../components/Form/Field';
import { Modal } from '../../../../components/Modal';

import { X } from 'phosphor-react';

import { SubmitButton } from '../../../../styles/shared/Buttons';
import { ModalCancelButton } from '../../../../styles/shared/Modal';
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  FieldsWrapper,
} from './styles';

type CustomerFormData = Omit<CustomerDataType, 'id' | 'createdAt'>;

export function CustomerForm() {
  const { customers, setCustomers } = useAllCustomersAndSelectedCustomer();
  const navigate = useNavigate();

  async function handleCustomerFormSubmit(values: CustomerFormData) {
    const response = await api.post('/customers', {
      ...values,
      createdAt: new Date(),
    });
    const customer = response.data;
    setCustomers([...customers, customer]);
    navigate('..');
  }

  return (
    <Modal>
      <DialogContent>
        <header>
          <DialogTitle asChild>
            <h3>Cadastrar cliente</h3>
          </DialogTitle>
          <DialogDescription>Preencha o formulário abaixo.</DialogDescription>
          <DialogClose>
            <X alt="Fechar" />
          </DialogClose>
        </header>
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
                <Field
                  type="text"
                  name="address.complement"
                  label="Complemento"
                />
              </FieldsWrapper>

              <div>
                <ModalCancelButton>Cancelar</ModalCancelButton>
                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  color="green"
                >
                  Cadastrar
                </SubmitButton>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Modal>
  );
}
