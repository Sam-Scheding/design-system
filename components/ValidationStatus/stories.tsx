import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { ValidationStatus } from './index'

const meta = {
  title: 'Components/ValidationStatus',
  component: ValidationStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['error', 'success'] },
    children: { control: 'text' },
  },
  args: {
    status: 'error',
    children: 'This field is required',
  },
} satisfies Meta<typeof ValidationStatus>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = {
  args: {
    status: 'error',
    children: 'Please enter a valid email address',
  },
}

export const Success: Story = {
  args: {
    status: 'success',
    children: 'Email address is valid',
  },
}

export const LongErrorMessage: Story = {
  args: {
    status: 'error',
    children:
      'This is a very long error message that demonstrates how the validation status component handles text that might wrap to multiple lines and provides detailed feedback to the user.',
  },
}

export const ShortSuccessMessage: Story = {
  args: {
    status: 'success',
    children: 'Valid',
  },
}

export const WithHTML: Story = {
  args: {
    status: 'error',
    children: (
      <>
        Password must contain at least <strong>8 characters</strong> and include <em>one number</em>.
      </>
    ),
  },
}
