import { ReactNode } from 'react'

import { Text } from '../Text'

interface LabelProps {
  htmlFor: string
  children: ReactNode
}

export const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label htmlFor={htmlFor}>
      <Text as="span">{children}</Text>
    </label>
  )
}
