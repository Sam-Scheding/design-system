import type { ReactNode } from 'react'

import styles from './styles.module.css'

interface ScrollContainerProps {
  children: ReactNode
}

export const ScrollContainer = ({ children }: ScrollContainerProps) => {
  return <div className={styles.root}>{children}</div>
}

export const ScrollContainerHeader = ({ children }: { children: ReactNode }) => {
  return <header className={styles.header}>{children}</header>
}

export const ScrollContainerBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.content}>
      <div className={styles['scrollable-content']}>{children}</div>
    </div>
  )
}

export const ScrollContainerFooter = ({ children }: { children: ReactNode }) => {
  return <footer className={styles.footer}>{children}</footer>
}
