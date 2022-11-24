import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import {Logo as StoryComponent} from '.'

export default {
  title: 'Atoms/Logo',
  component: StoryComponent,
  argTypes: {
    color: {
      control: 'select', options: ['black','white']
    },
  },
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (args: React.ComponentProps<typeof StoryComponent>) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  color: 'black'
}
