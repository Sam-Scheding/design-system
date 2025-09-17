import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'

import { List, ListItem } from './index'

const meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'select',
      options: [
        'space-100',
        'space-200',
        'space-300',
        'space-400',
        'space-500',
        'space-600',
        'space-700',
        'space-800',
        'space-900',
        'space-1000',
      ],
    },
    tabIndex: { control: 'number' },
  },
  args: {
    gap: 'space-200',
    tabIndex: 0,
    onKeyDown: fn(),
    onFocus: fn(),
    children: [
      <ListItem key="1">First item</ListItem>,
      <ListItem key="2">Second item</ListItem>,
      <ListItem key="3">Third item</ListItem>,
    ],
  },
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
