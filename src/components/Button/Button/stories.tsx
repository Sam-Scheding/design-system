import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'

import { Flex } from '@ds/components/Flex'

import { Button } from './index'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['action', 'outline', 'danger'] },
    children: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'action',
    children: 'Click Me',
  },
}

export const All = {
  render: () => (
    <Flex gap="space-500">
      <Button variant="action">Action</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
    </Flex>
  ),
}
