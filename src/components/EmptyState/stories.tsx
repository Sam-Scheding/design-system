import type { Meta, StoryObj } from '@storybook/react'
import { ReactNode } from 'react'

import { Text } from '@ds/components/Text'

import placeholder from './assets/600x400.png'
import { EmptyState } from './EmptyState/index'
import { EmptyStateImage } from './EmptyStateImage'

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Something went wrong',
  },
} satisfies Meta<typeof EmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ children }: { children: ReactNode }) => (
    <EmptyState>
      <EmptyStateImage src={placeholder} alt="placeholder" />
      <Text>{children}</Text>
    </EmptyState>
  ),
}
