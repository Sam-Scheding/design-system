import { Flex } from 'components/Flex'
import { ReactNode } from 'react'

import styles from './styles.module.css'

interface EmptyStateProps {
  children: ReactNode
}

export const EmptyState = ({ children }: EmptyStateProps) => {
  return (
    <div className={styles.root}>
      <Flex direction="column" alignItems="center" gap="space-300">
        {children}
      </Flex>
    </div>
  )
}
