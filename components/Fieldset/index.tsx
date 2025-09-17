import { ReactNode } from 'react'

import styles from './styles.module.css'

export const Fieldset = ({ children }: { children: ReactNode }) => {
  return <fieldset className={styles['root']}>{children}</fieldset>
}
