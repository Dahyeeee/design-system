import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

import type { FloatingButtonProps } from './FloatingButton';

export const getSizeStyling = (size: Required<FloatingButtonProps>['size']) => {
  const style = {
    medium: css({
      width: '64px',
      height: '64px',
    }),

    small: css({
      width: '32px',
      height: '32px',
    }),
  };

  return style[size];
};

export const getIconSizeStyling = (size: Required<FloatingButtonProps>['size']) => {
  const style = {
    medium: css({
      width: '24px',
      height: '24px',
    }),
    small: css({
      width: '16px',
      height: '16px',
    }),
  };

  return style[size];
};

export const getIconVariantStyling = (variant: Required<FloatingButtonProps>['variant']) => {
  const style = {
    primary: css({
      stroke: 'white',
    }),
    default: css({
      stroke: 'black',
    }),
  };

  return style[variant];
};

export const FloatingButtonStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '50%',
  outline: `0 solid ${Theme.color.white}`,
});