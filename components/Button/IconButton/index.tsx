import type { DOMAttributes, ReactNode } from 'react'

import styles from './styles.module.css'

interface IconButtonProps {
  children: ReactNode
  variant?: 'action' | 'outline' | 'danger' | 'subtle'
  size?: '16' | '24' | '32'
  'aria-label': string
  onClick?: DOMAttributes<HTMLButtonElement>['onClick']
}

export const IconButton = ({
  onClick,
  ['aria-label']: ariaLabel,
  size = '32',
  variant = 'action',
  children,
}: IconButtonProps) => {
  return (
    <button
      value="back"
      aria-label={ariaLabel}
      className={`${styles.root} ${styles[`size-${size}`]} ${styles[`variant-${variant}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
