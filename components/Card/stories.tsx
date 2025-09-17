import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { Card } from './index'

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
