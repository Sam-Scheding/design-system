import { ReactNode } from 'react'

import styles from './styles.module.css'

interface ListProps {
  tabIndex?: number
  onKeyDown?: React.DOMAttributes<HTMLUListElement>['onKeyDown']
  onFocus?: React.DOMAttributes<HTMLUListElement>['onFocus']
  gap?:
    | 'space-100'
    | 'space-200'
    | 'space-300'
    | 'space-400'
    | 'space-500'
    | 'space-600'
    | 'space-700'
    | 'space-800'
    | 'space-900'
    | 'space-1000'
  children: ReactNode
}

export const List = ({ tabIndex, onKeyDown, onFocus, gap, children }: ListProps) => {
  const gapMap = {
    'space-100': styles['gap-space-100'],
    'space-200': styles['gap-space-200'],
    'space-300': styles['gap-space-300'],
    'space-400': styles['gap-space-400'],
    'space-500': styles['gap-space-500'],
    'space-600': styles['gap-space-600'],
    'space-700': styles['gap-space-700'],
    'space-800': styles['gap-space-800'],
    'space-900': styles['gap-space-900'],
    'space-1000': styles['gap-space-1000'],
  }
  return (
    <ul
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      tabIndex={tabIndex}
      className={[styles.root, gap ? gapMap[gap] : ''].join(' ')}
    >
      {children}
    </ul>
  )
}
