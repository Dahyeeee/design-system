import CheckedIcon from '@assets/svg/checked-icon.svg';
import UncheckedIcon from '@assets/svg/unchecked-icon.svg';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef, useState } from 'react';

import { checkboxStyle, inputStyle } from '@components/Checkbox/Checkbox.style';

interface CheckboxProps extends ComponentPropsWithRef<'input'> {
  text?: string;
}

const Checkbox = ({ id, checked = false, text = '', ...attributes }: CheckboxProps) => {
  return (
    <div css={checkboxStyle}>
      <input css={inputStyle} checked={checked} {...attributes} />
      {checked ? <CheckedIcon /> : <UncheckedIcon />}
      {text && <span>{text}</span>}
    </div>
  );
};

export default forwardRef(Checkbox);
