import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PageComponent } from '.'

export default {
  title: 'Atoms/PageComponent',
  component: PageComponent,
} as ComponentMeta<typeof PageComponent>

const Template: ComponentStory<typeof PageComponent> = () => (
  <PageComponent></PageComponent>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Buttons',
}
