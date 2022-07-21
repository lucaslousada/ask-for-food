import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../../../services/api';
import { useAllCustomersAndSelectedCustomer } from '../..';
import { Modal } from '../../../../components/Modal';

import { SubmitButton } from '../../../../styles/shared/Buttons';
import { ModalCancelButton } from '../../../../styles/shared/Modal';
import { DialogContent, DialogTitle, DialogDescription } from './styles';

export function DeleteCustomer() {
  const { customer, customers, setCustomers } =
    useAllCustomersAndSelectedCustomer();

  const { customerId } = useParams();
  const navigate = useNavigate();

  async function handleDeleteCustomer() {
    await api.delete(`customers/${customerId}`);
    setCustomers(customers.filter(value => value.id !== Number(customerId)));
    navigate('..');
  }

  return (
    <Modal>
      {Object.keys(customer).length > 0 && customers.length > 0 ? (
        <DialogContent>
          <DialogTitle>Deletar cliente</DialogTitle>
          <DialogDescription>
            Deseja mesmo remover permanentemente
            <strong> {customer.name}</strong> do seu registro de clientes?
          </DialogDescription>
          <div>
            <ModalCancelButton>Cancelar</ModalCancelButton>
            <SubmitButton
              type="button"
              color="red"
              onClick={() => handleDeleteCustomer()}
            >
              Deletar cliente
            </SubmitButton>
          </div>
        </DialogContent>
      ) : null}
    </Modal>
  );
}
