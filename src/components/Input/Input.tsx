import type { Size } from '@type/index';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { getInputStyling, getSizeStyling, getVariantStyling } from '@components/Input/Input.style';

export interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  variant?: 'default' | 'text';
  size?: Extract<Size, 'small' | 'medium' | 'large'>;
  isError?: boolean;
}

const Input = (
  { variant = 'default', size = 'medium', isError = false, ...attributes }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <input
    // ref={ref}
    // css={[getInputStyling(isError), getVariantStyling(variant), getSizeStyling(size)]}
    // {...attributes}
    />
  );
};

export default forwardRef(Input);
