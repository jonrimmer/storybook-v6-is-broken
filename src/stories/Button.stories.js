import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const parent = {}
const child = {};
parent.child = child;
child.parent = parent;

const Template = (args) => <Button {...args} data={parent} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
