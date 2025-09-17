import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'

import { TextInput } from '../TextInput'

import { Fieldset } from './index'

const meta = {
  title: 'Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: <></>,
  },
} satisfies Meta<typeof Fieldset>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <Fieldset>
        <TextInput value="" label="Email" id="email" placeholder="Enter your email" onChange={fn()} />
        <TextInput
          value=""
          label="Password"
          id="password"
          placeholder="Enter your password"
          onChange={fn()}
        />
      </Fieldset>
    )
  },
}
