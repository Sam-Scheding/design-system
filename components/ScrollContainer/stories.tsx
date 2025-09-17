import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { List, ListItem } from '../List'

import { ScrollContainer, ScrollContainerBody, ScrollContainerFooter, ScrollContainerHeader } from './index'

const meta = {
  title: 'Components/ScrollContainer',
  component: ScrollContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: <></>,
  },
} satisfies Meta<typeof ScrollContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <div style={{ height: '90vh' }}>
        <ScrollContainer>
          <ScrollContainerHeader>
            ScrollContainer must be in a explicit height container.
          </ScrollContainerHeader>
          <ScrollContainerBody>
            <List>
              {new Array(70).fill('').map((_, idx) => (
                <ListItem>Item {idx}</ListItem>
              ))}
            </List>
          </ScrollContainerBody>
          <ScrollContainerFooter>ScrollContainerFooter</ScrollContainerFooter>
        </ScrollContainer>
      </div>
    )
  },
}
