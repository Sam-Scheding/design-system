import { ReactNode } from 'react'

import styles from './styles.module.css'

interface TextProps {
  as?: 'p' | 'span'
  lineClamp?: boolean
  children: ReactNode
}

export const Text = ({ as: Tag = 'span', lineClamp = false, children }: TextProps) => {
  return <Tag className={[styles.root, lineClamp ? 'line-clamp-1' : ''].join(' ')}>{children}</Tag>
}
