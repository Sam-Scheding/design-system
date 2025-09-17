import type { Meta, StoryObj } from '@storybook/react'

import { ErrorSummary } from '@ds/components/ErrorSummary'

const meta = {
  title: 'Components/ErrorSummary',
  component: ErrorSummary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ErrorSummary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'An error has occurred. Please try again.',
  },
}

export const WithLongMessage: Story = {
  args: {
    children:
      'This is a very long error message that demonstrates how the ErrorSummary component handles text that might wrap to multiple lines and provides detailed feedback to the user about what went wrong.',
  },
}
