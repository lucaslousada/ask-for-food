import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../../../services/api';
import { useAllCustomersAndSelectedCustomer } from '../ViewCustomerModal';

import { SubmitButton } from '../../../../styles/shared/Buttons';
import { ModalCancelButton } from '../../../../styles/shared/Modal';
import { DialogContent, DialogTitle, DialogDescription } from './styles';

export function DeleteCustomer() {
  const { customer, customers, setCustomers } =
    useAllCustomersAndSelectedCustomer();

  const { customerId } = useParams();
  const navigate = useNavigate();

  async function deleteCustomer() {
    await api.delete(`customers/${customerId}`);
    setCustomers(customers.filter(value => value.id !== Number(customerId)));
    navigate('../..');
  }

  return (
    <DialogContent>
      <DialogTitle>Deletar cliente</DialogTitle>
      <DialogDescription>
        Deseja mesmo remover permanentemente
        <strong> {customer.name}</strong> do seu registro de clientes?
      </DialogDescription>
      <div>
        <ModalCancelButton>Cancelar</ModalCancelButton>
        <SubmitButton
          type="submit"
          color="red"
          onClick={() => deleteCustomer()}
        >
          Deletar cliente
        </SubmitButton>
      </div>
    </DialogContent>
  );
}
