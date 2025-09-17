import { DOMAttributes, ReactNode } from 'react'

import styles from './styles.module.css'

interface ButtonProps {
  children: ReactNode
  variant?: 'action' | 'outline' | 'danger'
  onClick?: DOMAttributes<HTMLButtonElement>['onClick']
}

export const Button = ({ onClick, variant = 'action', children }: ButtonProps) => {
  return (
    <button className={`${styles.root} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  )
}
