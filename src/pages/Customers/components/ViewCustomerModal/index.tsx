import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../../../services/api';
import { CustomerDataType } from '../..';
import {
  Outlet,
  useNavigate,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import {
  Root as DialogRoot,
  Portal as DialogPortal,
} from '@radix-ui/react-dialog';

import { DialogOverlay } from './styles';

export function ViewCustomerModal() {
  const [modaIsOpen, setModalIsOpen] = useState(true);
  const [customerLoadingCompleted, setCustomerLoadingCompleted] =
    useState(false);
  const [customer, setCustomer] = useState<CustomerDataType>(
    {} as CustomerDataType
  );

  const { customerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get(`/customers/${customerId}`)
        .then(response => setCustomer(response.data))
        .catch(error => {
          if (axios.isAxiosError(error) && error.response?.status === 404) {
            navigate('/not-found', { replace: true });
          }
        });

      setCustomerLoadingCompleted(true);
    };

    fetchData();
  }, []);

  useEffect(() => {
    !modaIsOpen && navigate('..');
  }, [modaIsOpen]);

  return (
    <DialogRoot open={modaIsOpen} onOpenChange={setModalIsOpen}>
      <DialogPortal>
        <DialogOverlay>
          {customerLoadingCompleted === true ? (
            <Outlet context={customer} />
          ) : null}
        </DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  );
}

export function useSelectedCustomerData() {
  return useOutletContext<CustomerDataType>();
}