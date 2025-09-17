import { ReactNode, SelectHTMLAttributes } from 'react'

import { ChevronDown } from '../Icon'

import styles from './styles.module.css'

interface SelectProps {
  label: ReactNode
  id: string
  children: ReactNode
  value?: string
  onChange: SelectHTMLAttributes<HTMLSelectElement>['onChange']
}

export const Select = ({ label, id, value, onChange, children }: SelectProps) => {
  return (
    <div className={styles['root']}>
      {label}
      <div className={styles['select-container']}>
        <select className={styles.select} id={id} value={value} onChange={onChange}>
          {children}
        </select>
        <div className={styles['icon-container']}>
          <ChevronDown size="24" fill="var(--rp-color-text-heading)" />
        </div>
      </div>
    </div>
  )
}

interface SelectItemProps {
  value: string
  children: string
}

export const SelectItem = ({ value, children }: SelectItemProps) => {
  return (
    <option className={styles['option']} value={value}>
      {children}
    </option>
  )
}
