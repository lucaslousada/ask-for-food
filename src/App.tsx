import styled, { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { Menu } from './components/Menu';
import { Customers } from './pages/Customers';

import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';

const Container = styled.div`
  display: flex;
`;

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Container>
        <Menu />
        <Routes>
          <Route path="/registers/customers" element={<Customers />} />
        </Routes>
      </Container>

      <GlobalStyle />
    </ThemeProvider>
  );
}
