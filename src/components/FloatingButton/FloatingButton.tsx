import type { Size } from '@type/index';
import type { ComponentPropsWithoutRef } from 'react';

import { getVariantStyling } from '../Button/Button.style';
import {
  FloatingButtonStyling,
  getIconSizeStyling,
  getIconVariantStyling,
  getSizeStyling,
} from './FloatingButton.style';

export interface FloatingButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: Extract<Size, 'medium' | 'small'>;
  variant?: 'primary' | 'default';
}

const FloatingButton = ({
  size = 'medium',
  variant = 'primary',
  ...attributes
}: FloatingButtonProps) => {
  return (
    <button
      css={[FloatingButtonStyling, getSizeStyling(size), getVariantStyling(variant)]}
      {...attributes}
    >
      {/* <AddIcon css={[getIconSizeStyling(size), getIconVariantStyling(variant)]} /> */}
    </button>
  );
};

export default FloatingButton;
