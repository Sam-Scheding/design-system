import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { fn } from 'storybook/test'

import { Switch } from './index'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    value: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    name: 'toggle-switch',
    value: false,
    label: 'Enable notifications',
    onChange: fn(),
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
