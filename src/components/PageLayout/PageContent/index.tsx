import { ReactNode } from 'react'

import styles from './styles.module.css'

export const PageContent = ({ children }: { children: ReactNode }) => {
  return <div className={styles.root}>{children}</div>
}
