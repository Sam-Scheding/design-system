import { ReactNode } from 'react'

import styles from './styles.module.css'

interface CardProps {
  children: ReactNode
  appearance?: 'neutral' | 'red'
}

const appearanceMap = {
  neutral: styles['appearance-neutral'],
  red: styles['appearance-red'],
}

export const Card = ({ appearance = 'neutral', children }: CardProps) => {
  return <div className={`${styles.root} ${appearanceMap[appearance]}`}>{children}</div>
}
