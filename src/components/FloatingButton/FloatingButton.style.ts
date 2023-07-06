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
      //사이즈가 줄어들면서 위치가 변경되는 버그있음..
      width: '16px',
      height: '16px',

      path: {
        strokeWidth: '1',
      },
    }),
  };

  return style[size];
};

export const getIconVariantStyling = (variant: Required<FloatingButtonProps>['variant']) => {
  const style = {
    primary: css({
      path: {
        stroke: 'white',
      },
    }),
    default: css({
      path: {
        stroke: 'black',
      },
    }),
  };

  return style[variant];
};

export const FloatingButtonStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: 'none',
  borderRadius: '50%',

  cursor: 'pointer',
});
