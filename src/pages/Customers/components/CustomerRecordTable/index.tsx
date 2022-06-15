import { Customers } from '../..';

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
              <p>{customer.phone}</p>
            </td>
            <td>
              <p>{customer.address.street_name}</p>
              <p>{customer.address.number}</p>
            </td>
            <td>{customer.address.neighborhood}</td>
            <td>
              <p>{customer.createdAt}</p>
              <p>{customer.createdAt}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </RecordsTable>
  );
}
