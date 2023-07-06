import { Theme } from '@/styles/Theme';
import { css } from '@emotion/react';

import type { InputProps } from './Input';

export const getVariantStyling = (variant: Required<InputProps>['variant']) => {
  const style = {
    default: css({
      backgroundColor: Theme.color.gray100,
    }),

    text: css({
      backgroundColor: 'transparent',
    }),
  };

  return style[variant];
};

export const getSizeStyling = (size: Required<InputProps>['size']) => {
  const style = {
    large: css({
      padding: '14px 16px',
    }),

    medium: css({
      padding: '12px 16px',
    }),

    small: css({
      padding: '8px 12px',
    }),
  };

  return style[size];
};

export const getInputStyling = (isError: Required<InputProps>['isError']) => {
  return css({
    border: 'none',
    borderRadius: Theme.borderRadius.small,

    backgroundColor: isError ? `${Theme.color.red100} !important` : 'transparent',
    boxShadow: isError ? `inset 0 0 0 1px ${Theme.color.red200}` : 'none',

    '&:focus': {
      boxShadow: isError
        ? `inset 0 0 0 1px ${Theme.color.red200}, 0 0 0 3px ${Theme.color.red100}`
        : `inset 0 0 0 1px ${Theme.color.gray300}, 0 0 0 3px ${Theme.color.gray100}`,

      outline: 0,
    },
  });
};
