import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '../Card'

import { Flex } from './index'

const meta = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['row', 'column'] },
    alignItems: { control: 'select', options: ['start', 'center', 'end', 'baseline'] },
    justifyContent: { control: 'select', options: ['start', 'center', 'end', 'space-between'] },
    gap: {
      control: 'select',
      options: [
        '0',
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
    grow: { control: 'boolean' },
  },
  args: {
    direction: 'row',
    gap: 'space-200',
    alignItems: 'center',
    justifyContent: 'start',
    grow: false,
  },
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [<Card>Item 1</Card>, <Card>Item 2</Card>, <Card>Item 3</Card>],
  },
}
