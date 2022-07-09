import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../../../services/api';
import { Customers } from '../..';
import { normalizePhoneNumber } from '../../../../utils/masks';
import { MoreActionsInSeeDetails } from '../../../../components/MoreActionsInSeeDetails';
import {
  Root as DialogRoot,
  Portal as DialogPortal,
} from '@radix-ui/react-dialog';

import {
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogTitle,
} from '../../../../styles/shared/ViewDetailsModal';

import { X } from 'phosphor-react';

export function ViewCustomerDetailsModal() {
  const [modaIsOpen, setModalIsOpen] = useState(true);
  const [customer, setCustomer] = useState<Customers>({} as Customers);

  const navigate = useNavigate();
  const { customerId } = useParams();

  useEffect(() => {
    !modaIsOpen && navigate('..');
  }, [modaIsOpen]);

  useEffect(() => {
    api
      .get(`/customers/${customerId}`)
      .then(response => setCustomer(response.data))
      .catch(error => {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          navigate('/not-found', { replace: true });
        }
      });
  }, []);

  return (
    <DialogRoot modal open={modaIsOpen} onOpenChange={setModalIsOpen}>
      <DialogPortal>
        <DialogOverlay>
          {Object.keys(customer).length > 0 ? (
            <DialogContent aria-describedby={undefined}>
              <header>
                <MoreActionsInSeeDetails />
                <DialogClose>
                  <X alt="Fechar" />
                </DialogClose>
              </header>
              <section>
                <header>
                  <span>{customer.name.charAt(0).toUpperCase()}</span>
                  <DialogTitle asChild>
                    <h3>{customer.name}</h3>
                  </DialogTitle>
                  <p>{normalizePhoneNumber(customer.phone)}</p>
                </header>
                <table>
                  <tbody>
                    <tr>
                      <th>Rua</th>
                      <td>{customer.address.street_name}</td>
                    </tr>
                    <tr>
                      <th>Número</th>
                      <td>{customer.address.number}</td>
                    </tr>
                    <tr>
                      <th>Bairro</th>
                      <td>{customer.address.neighborhood}</td>
                    </tr>
                    <tr>
                      <th>Cidade</th>
                      <td>{customer.address.city}</td>
                    </tr>
                    <tr>
                      <th>Complemento</th>
                      <td>{customer.address.complement}</td>
                    </tr>
                    <tr>
                      <th>Cliente desde</th>
                      <td>
                        {new Intl.DateTimeFormat('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        }).format(new Date(customer.createdAt))}
                        {' às '}
                        {new Intl.DateTimeFormat('pt-BR', {
                          hour: '2-digit',
                          minute: '2-digit',
                        }).format(new Date(customer.createdAt))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </DialogContent>
          ) : null}
        </DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  );
}
