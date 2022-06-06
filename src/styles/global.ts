import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  } */

  body {
    background: ${({ theme }) => theme.colors.color_400};
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Gordita', sans-serif;
    color: ${({ theme }) => theme.colors.color_900};
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }
`;
