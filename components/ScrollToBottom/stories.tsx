import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { Button } from '../Button'
import { Card } from '../Card'
import { List, ListItem } from '../List'
import {
  ScrollContainer,
  ScrollContainerBody,
  ScrollContainerFooter,
  ScrollContainerHeader,
} from '../ScrollContainer'

import { ScrollTo, useScrollToBottom } from './index'

const meta = {
  title: 'Components/ScrollToBottom',
  component: ScrollTo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof ScrollTo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    const { scrollRef, scrollToBottom } = useScrollToBottom()
    // TODO target correct scrollable element in storybook
    return (
      <Card>
        <div style={{ height: '400px' }}>
          <ScrollContainer>
            <ScrollContainerHeader>
              <Button onClick={() => scrollToBottom()}>Click to scroll</Button>
            </ScrollContainerHeader>
            <ScrollContainerBody>
              <List>
                {new Array(70).fill('').map((_, idx) => (
                  <ListItem key={idx}>Item {idx}</ListItem>
                ))}
                <ListItem>
                  <ScrollTo ref={scrollRef} />
                </ListItem>
              </List>
            </ScrollContainerBody>
            <ScrollContainerFooter>ScrollContainerFooter</ScrollContainerFooter>
          </ScrollContainer>
        </div>
      </Card>
    )
  },
}
