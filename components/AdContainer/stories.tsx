import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { AdContainer } from './index'

const meta = {
  title: 'Components/AdContainer',
  component: AdContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AdContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
