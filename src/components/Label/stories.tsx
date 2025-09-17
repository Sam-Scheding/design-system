import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '@ds/components/Label'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    htmlFor: 'input-field',
    children: 'Email Address',
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
