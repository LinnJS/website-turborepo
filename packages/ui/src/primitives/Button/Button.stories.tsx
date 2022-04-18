import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Primitives/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  size: 'md',
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  label: 'Outline Button',
  variant: 'outline',
  size: 'md',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  label: 'Small Button',
  variant: 'primary',
  size: 'sm',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  label: 'Large Button',
  variant: 'primary',
  size: 'lg',
};

export const TrailingIconButton = Template.bind({});
TrailingIconButton.args = {
  label: 'Trailing Icon Button',
  variant: 'primary',
  size: 'md',
  iconName: 'external-link',
  hasLeadingIcon: false,
};

export const LeadingIconButton = Template.bind({});
LeadingIconButton.args = {
  label: 'Leading Icon Button',
  variant: 'primary',
  size: 'md',
  iconName: 'link',
  hasLeadingIcon: true,
};
