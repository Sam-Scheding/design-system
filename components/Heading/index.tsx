import type { ReactNode } from 'react'

import styles from './styles.module.css'

const whiteSpaceMap = {
  normal: styles['whitespace-normal'],
  wrap: styles['whitespace-wrap'],
  nowrap: styles['whitespace-nowrap'],
}

const textAlignMap = {
  start: styles['text-align-start'],
  center: styles['text-align-center'],
  end: styles['text-align-end'],
}

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  whiteSpace?: 'normal' | 'wrap' | 'nowrap'
  textAlign?: 'start' | 'center' | 'end'
  children: ReactNode
}

export const Heading = ({ as: Tag, size, textAlign, whiteSpace = 'normal', children }: HeadingProps) => {
  return (
    <Tag
      className={`${styles.root} ${styles[size || Tag]} ${whiteSpaceMap[whiteSpace]} ${textAlignMap[textAlign]}`}
    >
      {children}
    </Tag>
  )
}
