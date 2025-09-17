import type { Meta, StoryObj } from '@storybook/react'

import { Hidden } from '@ds/components/Hidden'

const meta = {
  title: 'Components/Hidden',
  component: Hidden,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    when: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    when: false,
    children: 'This content is visible',
  },
} satisfies Meta<typeof Hidden>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    when: false,
    children: 'This content can be hidden',
  },
}
