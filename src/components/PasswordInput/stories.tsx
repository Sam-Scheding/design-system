import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'

import { PasswordInput } from '@ds/components/PasswordInput'

const meta = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    id: { control: 'text' },
  },
  args: {
    value: '',
    label: 'Password',
    placeholder: 'Enter your password',
    id: 'password-input',
    onChange: fn(),
  },
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    value: 'mypassword123',
  },
}
