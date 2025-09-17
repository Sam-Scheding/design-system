import styles from './styles.module.css'

interface CheckboxProps {
  id: string
  label: string
}

export const Checkbox = ({ id, label }: CheckboxProps) => {
  return (
    <label className={styles.root}>
      <input type="checkbox" id={id} />
      <span></span>
      {label}
    </label>
  )
}
