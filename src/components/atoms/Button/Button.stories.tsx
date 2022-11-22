import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: React.ComponentProps<typeof Button>) => (
  <Button {...args} />
)

export const Default = Template.bind({})
Default.args = {
  href: '/',
  children: 'Buttons',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Buttons',
  onClick:() => { return 0}
}
