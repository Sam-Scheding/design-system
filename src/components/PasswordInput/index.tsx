import type { InputHTMLAttributes, ReactNode } from 'react'

import styles from './styles.module.css'

interface PasswordInputProps {
  value: string
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
  label: ReactNode
  id: string
  placeholder?: string
}

export const PasswordInput = ({ value, label, placeholder = '', onChange, id }: PasswordInputProps) => {
  return (
    <div className={styles.root}>
      {label}
      <input
        type="password"
        id={id}
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
