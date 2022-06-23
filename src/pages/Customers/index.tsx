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
  const [registerAndEditModalIsOpen, setRegisterAndEditModalIsOpen] =
    useState(false);

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
              modalIsOpen={registerAndEditModalIsOpen}
              onModalOpenChange={setRegisterAndEditModalIsOpen}
              form={
                <CustomerForm
                  customers={customers}
                  onCustomersChange={setCustomers}
                  onModalOpenChange={setRegisterAndEditModalIsOpen}
                />
              }
            />
          }
        />
        <CustomerRecordTable customers={customers} />
      </Main>
    </Container>
  );
}
