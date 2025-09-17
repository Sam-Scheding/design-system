import { ReactNode } from 'react'

import { Flex } from '../Flex'
import { Alert, Success } from '../Icon'

import styles from './styles.module.css'

interface ValidationStatusProps {
  status: 'error' | 'success'
  children: ReactNode
}

const statusStylesMap = {
  error: styles['status-error'],
  success: styles['status-success'],
}

const alertMap = {
  error: <Alert size="24" />,
  success: <Success size="24" />,
}

export const ValidationStatus = ({ status, children }: ValidationStatusProps) => {
  if (!status) {
    return <></>
  }

  return (
    <div className={`${styles['root']} ${statusStylesMap[status]}`}>
      <Flex gap="space-300" alignItems="center">
        {alertMap[status]}
        <div>{children}</div>
      </Flex>
    </div>
  )
}
