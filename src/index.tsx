import { Global, ThemeProvider } from '@emotion/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalStyle } from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

const root = createRoot(document.querySelector('#root') as Element);

root.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
    </ThemeProvider>
  </StrictMode>
);
