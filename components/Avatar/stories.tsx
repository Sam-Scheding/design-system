import type { Meta, StoryObj } from '@storybook/react-webpack5'

// https://placehold.co/48x48.png
import placeholder from './assets/48x48.png'
import { Avatar } from './index'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: {
      control: 'select',
      options: ['600', '700', '800', '900'],
    },
  },
  args: {
    src: placeholder,
    alt: 'Placeholder',
    size: '700',
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
