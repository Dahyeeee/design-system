import { css } from '@emotion/react';

import { TextProps } from '@components/Text/Text';

import { Theme } from '@styles/Theme';

export const getSizeStyling = (size: Required<TextProps>['size']) => {
  const style = {
    large: css`
      font-size: ${Theme.text.large.fontSize};
      line-height: ${Theme.text.large.lineHeight};
    `,
    medium: css`
      font-size: ${Theme.text.medium.fontSize};
      line-height: ${Theme.text.medium.lineHeight};
    `,
    small: css`
      font-size: ${Theme.text.small.fontSize};
      line-height: ${Theme.text.small.lineHeight};
    `,
    xSmall: css`
      font-size: ${Theme.text.xSmall.fontSize};
      line-height: ${Theme.text.xSmall.lineHeight};
    `,
  };

  return style[size];
};
