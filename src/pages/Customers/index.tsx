import { useEffect, useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { api } from '../../services/api';
import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { CustomerRecordTable } from './components/CustomerRecordTable';
import { RegisterAndEditModal } from '../../components/RegisterAndEditModal';
import { CustomerForm } from './components/CustomerForm';

import { Container, Main } from './styles';

export interface CustomerDataType {
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

interface OutletContextType {
  customers: CustomerDataType[];
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDataType[]>>;
}

export function Customers() {
  const [customers, setCustomers] = useState<CustomerDataType[]>([]);
  const [customersLoadingCompleted, setCustomersLoadingCompleted] =
    useState(false);
  const [registerAndEditModalIsOpen, setRegisterAndEditModalIsOpen] =
    useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await api.get('/customers').then(response => setCustomers(response.data));
      setCustomersLoadingCompleted(true);
    };

    fetchData();
  }, []);

  return (
    <>
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

      {customersLoadingCompleted === true ? (
        <Outlet context={{ customers, setCustomers }} />
      ) : null}
    </>
  );
}

export function useAllCustomers() {
  return useOutletContext<OutletContextType>();
}
