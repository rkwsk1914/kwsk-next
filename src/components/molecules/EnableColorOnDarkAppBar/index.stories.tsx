import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import {EnableColorOnDarkAppBar as StoryComponent} from '.'

export default {
  title: 'Molecules/EnableColorOnDarkAppBar',
  component: StoryComponent,
  argTypes: {
    dark: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (args?: React.ComponentProps<typeof StoryComponent>) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  dark: false,
}

export const Dark = Template.bind({})
Dark.args = {
  dark: true,
}
