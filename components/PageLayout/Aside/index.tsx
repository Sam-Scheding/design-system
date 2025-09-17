import { ReactNode, useContext } from 'react'

import { AsideToggleButton } from '../AsideToggleButton'
import { PageLayoutContext } from '../context'

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
