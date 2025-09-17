import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from '@ds/components/Heading'

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    size: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    whiteSpace: { control: 'select', options: ['normal', 'wrap', 'nowrap'] },
    textAlign: { control: 'select', options: ['start', 'center', 'end'] },
    children: { control: 'text' },
  },
  args: {
    as: 'h1',
    children: 'Page Heading',
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
