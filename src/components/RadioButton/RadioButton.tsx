import { InputHTMLAttributes } from 'react';

import { RadioStyle, labelStyle } from './RadioButton.style';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const RadioButton = ({ id, label = '', ...attributes }: RadioButtonProps) => {
  return (
    <div css={RadioStyle}>
      <input type="radio" id={id} {...attributes} />
      <label htmlFor={id} css={labelStyle}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
