import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

export const GlobalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  html,
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 16px;
    color: ${Theme.color.gray800};
  }
`;
