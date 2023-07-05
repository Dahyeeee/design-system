import { Size } from '@/types/ui';
import { ComponentPropsWithoutRef } from 'react';

import * as S from '@components/Text/Text.style';

export interface TextProps extends ComponentPropsWithoutRef<'p'> {
  size?: Extract<Size, 'xSmall' | 'small' | 'medium' | 'large'>;
}

const Text = ({ size = 'medium', children }: TextProps) => {
  return <p css={S.getSizeStyling(size)}>{children}</p>;
};

export default Text;
