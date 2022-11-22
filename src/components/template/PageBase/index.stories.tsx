import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import {PageBase as StoryComponent} from '.'

export default {
  title: 'Tempalte/PageBase',
  component: StoryComponent,
  argTypes: {
    dark: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (args: React.ComponentProps<typeof StoryComponent>) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  dark: false,
  children: 'Sample',
}
