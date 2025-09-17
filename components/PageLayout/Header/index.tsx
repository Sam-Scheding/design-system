import { ReactNode } from 'react'

import styles from './styles.module.css'

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header className={styles.root}>
      <div className={styles['header-content']}>{children}</div>
    </header>
  )
}
