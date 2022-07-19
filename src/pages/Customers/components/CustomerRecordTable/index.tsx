import { Link } from 'react-router-dom';
import { CustomerDataType } from '../..';
import { normalizePhoneNumber } from '../../../../utils/masks';

import { Info } from 'phosphor-react';

import { Container } from './styles';

interface CustomerRecordTableProps {
  customers: CustomerDataType[];
}

export function CustomerRecordTable({ customers }: CustomerRecordTableProps) {
  return (
    <Container>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Rua</th>
          <th>Bairro</th>
          <th>Cliente desde</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {customers.map(customer => (
          <tr key={customer.id}>
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
            <td>
              <Link to={`./${customer.id}`}>
                <Info alt="Ver detalhes" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
