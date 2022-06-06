import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import dark from './styles/themes/dark';

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <h1>Hello World</h1>

      <GlobalStyle />
    </ThemeProvider>
  );
}
