import type { ReactNode } from 'react'

import styles from './styles.module.css'
interface FlexProps {
  direction?: 'row' | 'column'
  alignItems?: 'start' | 'center' | 'end' | 'baseline'
  justifyContent?: 'start' | 'center' | 'end' | 'space-between'
  grow?: boolean
  gap?:
    | '0'
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
  children?: ReactNode
}

export const Flex = ({
  direction = 'row',
  gap = '0',
  grow = false,
  alignItems,
  justifyContent,
  children,
}: FlexProps) => {
  const directionMap = {
    row: styles['direction-row'],
    column: styles['direction-column'],
  }

  const alignItemsMap = {
    start: styles['align-items-start'],
    center: styles['align-items-center'],
    end: styles['align-items-end'],
    baseline: styles['align-items-baseline'],
  }

  const justifyContentMap = {
    start: styles['justify-content-start'],
    center: styles['justify-content-center'],
    end: styles['justify-content-end'],
    'space-between': styles['justify-content-space-between'],
  }

  const gapMap = {
    '0': styles['gap-0'],
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
    <div
      className={[
        styles.root,
        directionMap[direction],
        alignItems ? alignItemsMap[alignItems] : '',
        justifyContent ? justifyContentMap[justifyContent] : '',
        gapMap[gap],
        grow ? styles.grow : '',
      ].join(' ')}
    >
      {children}
    </div>
  )
}
