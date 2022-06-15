import { Customers } from '../..';
import { normalizePhoneNumber } from '../../../../utils/masks';

import { RecordsTable } from '../../../../styles/shared/RecordsTable';

interface CustomerRecordTableProps {
  customers: Customers[];
}

export function CustomerRecordTable({ customers }: CustomerRecordTableProps) {
  return (
    <RecordsTable>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Rua</th>
          <th>Bairro</th>
          <th>Cliente desde</th>
        </tr>
      </thead>

      <tbody>
        {customers.map(customer => (
          <tr>
            <td>
              <p>{customer.name}</p>
              <p>{normalizePhoneNumber(customer.phone)}</p>
            </td>
            <td>
              <p>{customer.address.street_name}</p>
              <p>{customer.address.number}</p>
            </td>
            <td>{customer.address.neighborhood}</td>
            <td>
              <p>
                {new Intl.DateTimeFormat('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                }).format(new Date(customer.createdAt))}
              </p>
              <p>
                {new Intl.DateTimeFormat('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                }).format(new Date(customer.createdAt))}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </RecordsTable>
  );
}
