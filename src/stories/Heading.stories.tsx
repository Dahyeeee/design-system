import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import type { HeadingProps } from '@components/Heading/Heading';
import Heading from '@components/Heading/Heading';

const meta = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'xxLarge'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    size: 'medium',
    children: 'Heading',
  },
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

const createTextStory = (size: HeadingProps['size']) => ({
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
        <li css={informationStyle}>
          <h6>X Small</h6>
          <Heading size="xSmall">{children}</Heading>
        </li>
        <li css={informationStyle}>
          <h6>Small</h6>
          <Heading size="small">{children}</Heading>
        </li>
        <li css={informationStyle}>
          <h6>Medium</h6>
          <Heading size="medium">{children}</Heading>
        </li>
        <li css={informationStyle}>
          <h6>Large</h6>
          <Heading size="large">{children}</Heading>
        </li>
        <li css={informationStyle}>
          <h6>X Large</h6>
          <Heading size="xLarge">{children}</Heading>
        </li>
        <li css={informationStyle}>
          <h6>XX Large</h6>
          <Heading size="xxLarge">{children}</Heading>
        </li>
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

export const xLarge: Story = createTextStory('xLarge');

export const xxLarge: Story = createTextStory('xxLarge');