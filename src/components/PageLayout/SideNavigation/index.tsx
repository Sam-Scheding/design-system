import { Flex } from '@ds/components/Flex'
import { ReactNode, useContext, useId } from 'react'

import { PageLayoutContext } from '@ds/components/PageLayout/context'
import { SideNavigationToggleButton } from '@ds/components/PageLayout/SideNavigationToggleButton'

import styles from './styles.module.css'

export const SideNavigation = ({ children }: { children: ReactNode }) => {
  const { sideNavigation } = useContext(PageLayoutContext)
  sideNavigation.setId(useId())

  return (
    <nav
      tabIndex={0}
      id={sideNavigation.id}
      className={`${styles.root} ${sideNavigation.isExpanded ? styles.expanded : styles.collapsed}`}
    >
      <Flex justifyContent="end">
        <SideNavigationToggleButton />
      </Flex>
      {sideNavigation.isExpanded && children}
    </nav>
  )
}
