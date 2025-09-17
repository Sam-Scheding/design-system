import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'

import { TextInput } from './index'

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    id: { control: 'text' },
    onClear: { action: 'cleared' },
  },
  args: {
    value: '',
    label: 'Email Address',
    placeholder: 'Enter your email',
    id: 'email-input',
    onChange: fn(),
  },
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    value: 'user@example.com',
  },
}

export const WithCustomLabel: Story = {
  args: {
    label: 'Custom Label',
    placeholder: 'Enter custom text',
  },
}
