import { ReactNode, useContext } from 'react'

import { AsideToggleButton } from '@ds/components/PageLayout/AsideToggleButton'
import { PageLayoutContext } from '@ds/components/PageLayout/context'

import styles from './styles.module.css'

export const Aside = ({ children }: { children: ReactNode }) => {
  const { aside } = useContext(PageLayoutContext)

  return (
    <aside className={`${styles['root']} ${aside.isExpanded ? styles.expanded : styles.collapsed}`}>
      <AsideToggleButton />
      {aside.isExpanded && children}
    </aside>
  )
}
