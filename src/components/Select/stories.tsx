import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'

import { Select, SelectItem } from '@ds/components/Select'
import { VisuallyHidden } from '@ds/components/VisuallyHidden'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    id: { control: 'text' },
  },
  args: {
    label: <VisuallyHidden>Select Country</VisuallyHidden>,
    id: 'country-select',
    onChange: fn(),
    children: [
      <SelectItem key="us" value="us">
        United States
      </SelectItem>,
      <SelectItem key="ca" value="ca">
        Canada
      </SelectItem>,
      <SelectItem key="uk" value="uk">
        United Kingdom
      </SelectItem>,
      <SelectItem key="au" value="au">
        Australia
      </SelectItem>,
    ],
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
