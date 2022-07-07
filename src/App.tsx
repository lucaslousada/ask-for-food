import { ThemeProvider } from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Customers } from './pages/Customers';
import { PageNotFound } from './pages/PageNotFound';

import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/registers/customers" />}
        />
        <Route path="/registers/customers" element={<Customers />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <GlobalStyle />
    </ThemeProvider>
  );
}
