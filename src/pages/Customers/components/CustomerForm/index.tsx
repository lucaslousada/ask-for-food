import { ChangeEvent } from 'react';
import { Formik, Form } from 'formik';
import InputMask from 'react-input-mask';
import { useNavigate, useParams } from 'react-router-dom';
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

const initialValues = {
  name: '',
  phone: '',
  address: {
    street_name: '',
    number: '',
    neighborhood: '',
    city: '',
    complement: '',
  },
};

type CustomerFormData = Omit<CustomerDataType, 'id' | 'createdAt'>;

export function CustomerForm() {
  const { customer, customers, setCustomers } =
    useAllCustomersAndSelectedCustomer();

  const navigate = useNavigate();
  const { customerId } = useParams();

  async function handleRegisterCustomer(values: CustomerFormData) {
    const { data } = await api.post('/customers', {
      ...values,
      createdAt: new Date(),
    });
    setCustomers([...customers, data]);
    navigate('..');
  }

  async function handleEditCustomer(values: CustomerFormData) {
    const { data } = await api.patch(`/customers/${customerId}`, {
      ...values,
    });
    setCustomers(
      customers.map(currentValue =>
        currentValue.id === data.id ? data : currentValue
      )
    );
    navigate('..');
  }

  const componentData = customerId
    ? {
        title: 'Editar cliente',
        description: 'Faça as alterações desejadas.',
        initialValues: customer,
        handleSubmit: handleEditCustomer,
        buttonText: 'Salvar',
      }
    : {
        title: 'Cadastrar cliente',
        description: 'Preencha o formulário abaixo.',
        initialValues: initialValues,
        handleSubmit: handleRegisterCustomer,
        buttonText: 'Cadastrar',
      };

  return (
    <Modal>
      <DialogContent>
        <header>
          <DialogTitle asChild>
            <h3>{componentData.title}</h3>
          </DialogTitle>
          <DialogDescription>{componentData.description}</DialogDescription>
          <DialogClose>
            <X alt="Fechar" />
          </DialogClose>
        </header>
        <Formik
          validationSchema={schema}
          initialValues={componentData.initialValues}
          onSubmit={componentData.handleSubmit}
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
                  {componentData.buttonText}
                </SubmitButton>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Modal>
  );
}
