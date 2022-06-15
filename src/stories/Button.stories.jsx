/** @jsx h */
import { h } from 'preact';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/preact/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/preact/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Click me!',
      description: 'The text for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Click me!' },
      },
      control: {
        type: 'text'
      }
    }
  },
};

// More on component templates: https://storybook.js.org/docs/preact/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/preact/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
