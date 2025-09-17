import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { VisuallyHidden } from './index'

const meta = {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'This text is hidden visually but available to screen readers',
  },
} satisfies Meta<typeof VisuallyHidden>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
