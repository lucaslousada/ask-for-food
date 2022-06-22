import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { CustomerRecordTable } from './components/CustomerRecordTable';
import { RegisterAndEditModal } from '../../components/RegisterAndEditModal';
import { CustomerForm } from './components/CustomerForm';

import { Container, Main } from './styles';

export interface Customers {
  id: number;
  name: string;
  phone: string;
  address: {
    street_name: string;
    number: string;
    neighborhood: string;
    city: string;
    complement: string;
  };
  createdAt: string;
}

export function Customers() {
  const [customers, setCustomers] = useState<Customers[]>([]);

  useEffect(() => {
    api.get('/customers').then(response => setCustomers(response.data));
  }, []);

  return (
    <Container>
      <Menu activeCategory="registers" />
      <Main>
        <Header
          title="Clientes"
          newRegistrationButton={
            <RegisterAndEditModal
              title="Cadastrar cliente"
              form={CustomerForm}
            />
          }
        />
        <CustomerRecordTable customers={customers} />
      </Main>
    </Container>
  );
}
