import { Global, ThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';

import { GlobalStyle } from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

interface HangLogProviderProps extends PropsWithChildren {}

const HangLogProvider = ({ children }: HangLogProviderProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
      {children}
    </ThemeProvider>
  );
};

export default HangLogProvider;
