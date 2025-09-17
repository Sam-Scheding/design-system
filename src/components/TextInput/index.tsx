import type { DOMAttributes, InputHTMLAttributes, ReactNode } from 'react'

import { IconButton } from '@ds/components/Button'
import { Close } from '@ds/components/Icon'
import { Label } from '@ds/components/Label'

import styles from './styles.module.css'

interface TextInputProps {
  value: string
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
  onClear?: DOMAttributes<HTMLButtonElement>['onClick']
  label: ReactNode
  id: string
  placeholder?: string
}

export const TextInput = ({ value, label, placeholder = '', onChange, onClear, id }: TextInputProps) => {
  return (
    <div className={styles.root}>
      {typeof label === 'string' ? label : <Label htmlFor={id}>{label}</Label>}
      <div className={styles['input-container']}>
        <input
          className={styles.input}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          value={value}
        />
        <div className={styles['clear-button-container']}>
          <IconButton aria-label="Clear text input" variant="subtle" onClick={onClear}>
            <Close size="16" fill="var(--rp-color-text-heading)" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
