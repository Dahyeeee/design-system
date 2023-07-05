import type { Meta, StoryObj } from '@storybook/react';

import Text, { TextProps } from '@components/Text/Text';

import { containerStyle, infoContainerStyle } from './styles';

const meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xSmall', 'small', 'medium', 'large'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    size: 'medium',
    children: 'Text',
  },
  decorators: [
    (Story) => (
      <div css={containerStyle}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const createTextStory = (size: TextProps['size']) => ({
  args: {
    size,
  },
  argTypes: {
    size: {
      control: false,
    },
  },
});

export const Playground: Story = {};

export const Sizes: Story = {
  render: ({ children }) => {
    return (
      <>
        <div css={infoContainerStyle}>
          <h6>X Small</h6>
          <Text size="xSmall">{children}</Text>
        </div>
        <div css={infoContainerStyle}>
          <h6>Small</h6>
          <Text size="small">{children}</Text>
        </div>
        <div css={infoContainerStyle}>
          <h6>Medium</h6>
          <Text size="medium">{children}</Text>
        </div>
        <div css={infoContainerStyle}>
          <h6>Large</h6>
          <Text size="large">{children}</Text>
        </div>
      </>
    );
  },
  argTypes: {
    size: {
      control: false,
    },
  },
};

export const XSmall: Story = createTextStory('xSmall');

export const Small: Story = createTextStory('small');

export const Medium: Story = createTextStory('medium');

export const Large: Story = createTextStory('large');
