import React from 'react'

import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {EnableColorOnDarkAppBar as StoryComponent} from '.'

export default {
  title: 'Molecules/EnableColorOnDarkAppBar',
  component: StoryComponent,
  argTypes: {
    anchor: {
      control: 'select', options: ['top','left','bottom','right']
    },
  },
} as ComponentMeta<typeof StoryComponent>

const Template: ComponentStory<typeof StoryComponent> = (args: React.ComponentProps<typeof StoryComponent>) => (
  <StoryComponent {...args}></StoryComponent>
)

export const Default = Template.bind({})
Default.args = {
  listData: [
    [{
      text: 'Inbox',
      href: '#',
      icon: <InboxIcon />
    },
    {
      text: 'Starred',
      href: '#'
    },
    {
      text: 'Send email',
      href: '#',
      icon: <MailIcon />
    },
    {
      text: 'Drafts',
    }],
    [{
      text: 'All mail',
      icon: <MailIcon />
    },
    {
      text: 'Trash',
    },
    {
      text: 'Spam',
    }]
  ],
  anchor: 'left',
}
