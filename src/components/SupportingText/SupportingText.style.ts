import { css } from '@emotion/react';

import { Theme } from '@styles/Theme';

import { SupportingTextProps } from './SupportingText';

export const getTextStyle = (isError: Required<SupportingTextProps>['isError']) =>
  css({
    fontSize: Theme.text.small.fontSize,
    lineHeight: Theme.text.small.lineHeight,
    color: isError ? Theme.color.red300 : Theme.color.gray600,
  });
