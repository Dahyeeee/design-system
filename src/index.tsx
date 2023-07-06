import { Global, ThemeProvider } from '@emotion/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Text from '@components/Text/Text';

import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import FloatingButton from './components/FloatingButton/FloatingButton';
import Heading from './components/Heading/Heading';
import Input from './components/Input/Input';
import { GlobalStyle } from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

const root = createRoot(document.querySelector('#root') as Element);

root.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
      <Heading size="xxLarge">Heading</Heading>
      <Text size="large">Text</Text>
      <Button variant="primary">Button</Button>
      <Checkbox checked />
      {/* <FloatingButton /> */}
    </ThemeProvider>
  </StrictMode>
);
