import { Global, ThemeProvider } from '@emotion/react';
import { css } from '@emotion/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Text from '@components/Text/Text';

import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import FloatingButton from './components/FloatingButton/FloatingButton';
import Heading from './components/Heading/Heading';
import Input from './components/Input/Input';
import RadioButton from './components/RadioButton/RadioButton';
import Skeleton from './components/Skeleton/Skeleton';
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
      <FloatingButton size="small" variant="default" />
      <RadioButton
        id="hello"
        label="sdhfkjd"
        supportingText=""
        options={['hey', 'jude', 'don', 'make']}
        name="abc"
      />
      <Skeleton />
      <div>
        <label
          htmlFor="abc"
          css={css`
            position: relative;
            display: inline-block;
          `}
        >
          텍스트
          <input
            type="radio"
            name="abc"
            id="abc"
            css={css`
              position: absolute;
              opacity: 0;
              width: 0;
              height: 0;

              &:checked ~ {
                background-color: #2196f3;

                &:after {
                  display: block;
                }
              }
            `}
          ></input>
          <span
            css={css`
              position: absolute;
              top: 0;
              left: 0;
              height: 20px;
              width: 20px;
              border: 2px solid ${Theme.color.gray200};
              border-radius: 50%;
              background-color: #eee;

              &:after {
                content: '';
                position: absolute;
                display: none;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: white;
              }
            `}
          ></span>
        </label>
      </div>
    </ThemeProvider>
  </StrictMode>
);
