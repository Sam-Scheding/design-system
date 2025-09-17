import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './index'

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: ['p', 'span'] },
    lineClamp: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    as: 'span',
    lineClamp: false,
    children: 'This is sample text content',
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AsParagraph: Story = {
  args: {
    as: 'p',
    children:
      'This is a paragraph element with longer text content that demonstrates how the component renders as a paragraph.',
  },
}

export const WithLineClamp: Story = {
  args: {
    lineClamp: true,
    children:
      'This is a very long text that should be clamped to a single line when the lineClamp prop is enabled. This demonstrates the text truncation functionality.',
  },
}

export const LongText: Story = {
  args: {
    children:
      'This is a much longer piece of text that demonstrates how the Text component handles content that spans multiple lines and might need to be displayed in different contexts.',
  },
}
