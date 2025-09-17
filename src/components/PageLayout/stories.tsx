import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from '../Heading'
import { List, ListItem } from '../List'
import {
  ScrollContainer,
  ScrollContainerBody,
  ScrollContainerFooter,
  ScrollContainerHeader,
} from '../ScrollContainer'
import { Text } from '../Text'

import { Aside, Header, Main, PageContent, PageLayout, SideNavigation } from './index'

const meta = {
  title: 'Components/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    children: <></>,
  },
} satisfies Meta<typeof PageLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <PageLayout>
        <SideNavigation>
          <ScrollContainer>
            <ScrollContainerHeader>ScrollContainerHeader</ScrollContainerHeader>
            <ScrollContainerBody>
              <List>
                {new Array(70).fill('').map((_, idx) => (
                  <ListItem>Item {idx}</ListItem>
                ))}
              </List>
            </ScrollContainerBody>
            <ScrollContainerFooter>ScrollContainerFooter</ScrollContainerFooter>
          </ScrollContainer>
        </SideNavigation>
        <Main>
          <Header>
            <Heading as="h2">Page title</Heading>
          </Header>
          <PageContent>
            <Text>Page content</Text>
          </PageContent>
        </Main>
        <Aside>
          <ScrollContainer>
            <ScrollContainerHeader>ScrollContainerHeader</ScrollContainerHeader>
            <ScrollContainerBody>
              <List>
                {new Array(70).fill('').map((_, idx) => (
                  <ListItem>Item {idx}</ListItem>
                ))}
              </List>
            </ScrollContainerBody>
            <ScrollContainerFooter>ScrollContainerFooter</ScrollContainerFooter>
          </ScrollContainer>
        </Aside>
      </PageLayout>
    )
  },
}
