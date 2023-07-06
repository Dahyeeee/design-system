import { containerStyle, informationStyle } from '@stories/styles';
import type { Meta, StoryObj } from '@storybook/react';

import Input from '@components/Input/Input';

const meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'text'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    isError: {
      control: { type: 'boolean' },
    },
  },
  args: {
    variant: 'default',
    size: 'medium',
    placeholder: 'placeholder',
    isError: false,
  },
  decorators: [
    (Story) => (
      <ul css={containerStyle}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

// export default {
//   title: 'Input',
//   component: Input,
//   argTypes: {
//     size: {
//       control: { type: 'radio' },
//       options: ['small', 'medium', 'large'],
//     },
//     children: {
//       control: { type: 'text' },
//     },
//     css: {
//       control: false,
//     },
//   },
//   args: {
//     $size: 'medium',
//     label: 'Label',
//     placeholder: 'Placeholder',
//     supportingText: 'Supporting text',
//   },
//   decorators: [
//     (Story) => (
//       <ul css={containerStyle}>
//         <Story />
//       </ul>
//     ),
//   ],
// };

// const Template = (args) => <Input {...args} />;

// export const Sizes = {
//   render: ({ children, ...args }) => {
//     return (
//       <>
//         <StoryInfoContainer>
//           <h6>Small</h6>
//           <Input $size="small" {...args} />
//         </StoryInfoContainer>
//         <StoryInfoContainer>
//           <h6>Medium</h6>
//           <Input $size="medium" {...args} />
//         </StoryInfoContainer>
//         <StoryInfoContainer>
//           <h6>Large</h6>
//           <Input $size="large" {...args} />
//         </StoryInfoContainer>
//       </>
//     );
//   },
//   argTypes: {
//     size: {
//       control: false,
//     },
//   },
// };

// export const Default = Template.bind({});
// Default.args = {
//   label: undefined,
//   supportingText: undefined,
// };

// export const Label = Template.bind({});
// Label.args = {
//   supportingText: undefined,
// };

// export const SupportingText = Template.bind({});

// export const IsError = Template.bind({});
// IsError.args = {
//   isError: true,
// };
