import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@ds/components/Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'This is a card component',
  },
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
