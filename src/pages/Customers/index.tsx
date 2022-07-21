import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Outlet,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import { api } from '../../services/api';
import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { CustomerRecordTable } from './components/CustomerRecordTable';

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
  customer: CustomerDataType;
  customers: CustomerDataType[];
  setCustomers: React.Dispatch<React.SetStateAction<CustomerDataType[]>>;
}

export function Customers() {
  const [customers, setCustomers] = useState<CustomerDataType[]>([]);
  const [customer, setCustomer] = useState<CustomerDataType>(
    {} as CustomerDataType
  );

  const navigate = useNavigate();
  const { customerId } = useParams();

  useEffect(() => {
    api.get('/customers').then(response => setCustomers(response.data));
  }, []);

  useEffect(() => {
    setCustomer({} as CustomerDataType);

    if (!customerId) return;

    api
      .get(`/customers/${customerId}`)
      .then(response => setCustomer(response.data))
      .catch(error => {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          navigate('/not-found', { replace: true });
        }
      });
  }, [customerId]);

  return (
    <>
      <Container>
        <Menu activeCategory="registers" />
        <Main>
          <Header pageTitle="Clientes" />
          <CustomerRecordTable customers={customers} />
        </Main>
      </Container>

      <Outlet context={{ customer, customers, setCustomers }} />
    </>
  );
}

export function useAllCustomersAndSelectedCustomer() {
  return useOutletContext<OutletContextType>();
}
