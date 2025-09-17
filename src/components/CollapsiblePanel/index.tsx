import { ReactNode } from 'react'

import { ChevronDown } from '@ds/components/Icon'

import styles from './styles.module.css'

interface CollapsiblePanelProps {
  defaultIsOpen: boolean
  heading: ReactNode
  children: ReactNode
}

export const CollapsiblePanel = ({ defaultIsOpen, heading, children }: CollapsiblePanelProps) => {
  return (
    <details open={defaultIsOpen}>
      <summary className={styles.summary}>
        {heading}
        <ChevronDown size="24" fill="var(--rp-color-text-heading)" />
      </summary>
      {children}
    </details>
  )
}
