import { ReactNode } from 'react'

import { Card } from '@ds/components/Card'
import { Flex } from '@ds/components/Flex'
import { Alert } from '@ds/components/Icon'

import styles from './styles.module.css'

interface ErrorSummaryProps {
  children: ReactNode
}

export const ErrorSummary = ({ children }: ErrorSummaryProps) => {
  return (
    <Card appearance="red">
      <Flex gap="space-300" alignItems="start">
        <div className={styles['icon-container']}>
          <Alert size="24" />
        </div>
        <div className={styles.content}>{children}</div>
      </Flex>
    </Card>
  )
}
