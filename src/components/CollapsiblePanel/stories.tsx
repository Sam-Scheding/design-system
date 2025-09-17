import type { Meta, StoryObj } from '@storybook/react'

import { CollapsiblePanel } from '@ds/components/CollapsiblePanel'

const meta = {
  title: 'Components/CollapsiblePanel',
  component: CollapsiblePanel,
  tags: ['autodocs'],
  argTypes: {
    defaultIsOpen: { control: 'boolean' },
    heading: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    defaultIsOpen: false,
    heading: 'More Details',
    children: 'This is an example of collapsible content inside the panel.',
  },
} satisfies Meta<typeof CollapsiblePanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
