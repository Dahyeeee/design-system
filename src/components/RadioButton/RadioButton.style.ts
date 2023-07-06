import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

export const RadioStyle = css({
  display: 'flex',
  alignItems: 'center',

  //svg 먹히는 거 적용하기
  'input[type="radio"]': {
    color: 'red',
  },

  'input[type="radio"]:not(:checked) + label': {
    color: Theme.color.gray600,
  },
});

export const labelStyle = css({
  fontSize: Theme.text.medium.fontSize,
  color: Theme.color.gray800,
  lineHeight: Theme.text.medium.lineHeight,
  marginLeft: '5px',
});
