import { Flex } from '@ds/components/Flex'
import { Heading } from '@ds/components/Heading'
import { Hidden } from '@ds/components/Hidden'
import { useContext } from 'react'

import { PageLayoutContext } from '@ds/components/PageLayout/context'

import styles from './styles.module.css'

export const SkipTo = () => {
  const { sideNavigation, main } = useContext(PageLayoutContext)

  return (
    <div tabIndex={0} className={styles.root}>
      <Heading as="h2" size="h5">
        Skip To:
      </Heading>
      <Flex direction="column" gap="space-300">
        <Hidden when={!sideNavigation.id}>
          <a className={styles.link} href={`#${sideNavigation.id}`}>
            Side Navigation
          </a>
        </Hidden>
        <Hidden when={!main.id}>
          <a className={styles.link} href={`#${main.id}`}>
            Main Content
          </a>
        </Hidden>
      </Flex>
    </div>
  )
}
