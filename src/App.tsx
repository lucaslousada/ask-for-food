import { ThemeProvider } from 'styled-components';
import { Menu } from './components/Menu';

import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Menu />

      <GlobalStyle />
    </ThemeProvider>
  );
}
