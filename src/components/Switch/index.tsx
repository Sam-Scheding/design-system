import { InputHTMLAttributes, ReactNode } from 'react'

import styles from './styles.module.css'

interface SwitchProps {
  name: string
  value: boolean
  label?: ReactNode
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
}

export const Switch = ({ name, onChange, value, label }: SwitchProps) => {
  return (
    <div className={styles['root']}>
      {label}
      <label className={styles['switch-container']} htmlFor={name}>
        <input type="checkbox" checked={value} id={name} name={name} onChange={onChange} />
        <span className={`${styles['slider']} ${styles['round']}`}></span>
      </label>
    </div>
  )
}
