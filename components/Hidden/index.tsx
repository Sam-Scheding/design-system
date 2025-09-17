import { ReactNode } from 'react'

interface HiddenProps {
  when: boolean
  children: ReactNode
}

export const Hidden = ({ when, children }: HiddenProps) => {
  return <div hidden={when}>{children}</div>
}
