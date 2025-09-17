import type { ReactNode } from 'react'

import styles from './styles.module.css'

interface VisuallyHiddenProps {
  children: ReactNode
}

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <div className={styles.root}>{children}</div>
}
