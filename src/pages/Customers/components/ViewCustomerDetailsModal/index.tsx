import { Customers } from '../..';
import { normalizePhoneNumber } from '../../../../utils/masks';
import {
  Root as DialogRoot,
  Portal as DialogPortal,
} from '@radix-ui/react-dialog';

import {
  DialogTrigger,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  MoreOptions,
} from './styles';

import { DotsThreeVertical, Info, X } from 'phosphor-react';

interface ViewCustomerDetailsModalProps {
  customer: Customers;
}

export function ViewCustomerDetailsModal({
  customer,
}: ViewCustomerDetailsModalProps) {
  return (
    <DialogRoot modal>
      <DialogTrigger>
        <Info alt="Ver detalhes" />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay>
          <DialogContent aria-describedby={undefined}>
            <header>
              <MoreOptions type="button">
                <DotsThreeVertical alt="Mais opções" />
              </MoreOptions>
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
              </table>
            </section>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  );
}
