import { ThemeProvider } from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Customers } from './pages/Customers';
import { PageNotFound } from './pages/PageNotFound';
import { ViewCustomerModal } from './pages/Customers/components/ViewCustomerModal';
import { CustomerDetails } from './pages/Customers/components/CustomerDetails';
import { DeleteCustomer } from './pages/Customers/components/DeleteCustomer';

import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="registers/customers" />}
        />
        <Route path="registers/customers" element={<Customers />}>
          <Route path=":customerId" element={<ViewCustomerModal />}>
            <Route index element={<CustomerDetails />} />
            <Route path="delete" element={<DeleteCustomer />} />
          </Route>
        </Route>
        <Route path="not-found" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <GlobalStyle />
    </ThemeProvider>
  );
}
