import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@ds/components/Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
  },
  args: {
    id: 'checkbox-1',
    label: 'Accept terms and conditions',
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
