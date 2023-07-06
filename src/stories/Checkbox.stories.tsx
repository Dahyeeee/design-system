import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '@components/Checkbox/Checkbox';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    children: 'hahahaha',
  },
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// const createButtonStory = () => ({
//   args: {
//     variant,
//   },
//   argTypes: {
//     variant: {
//       control: false,
//     },
//   },
// });

export const Checkboxes: Story = {
  render: ({ children }) => {
    return (
      <>
        <li css={informationStyle}>
          <h6>checked</h6>
          <Checkbox checked />
        </li>
        <li css={informationStyle}>
          <h6>unChecked</h6>
          <Checkbox />
        </li>
      </>
    );
  },
};
