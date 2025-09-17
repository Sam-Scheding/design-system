import { ReactNode, useContext, useId } from 'react'

import { PageLayoutContext } from '../context'

import styles from './styles.module.css'

export const Main = ({ children }: { children: ReactNode }) => {
  const { main } = useContext(PageLayoutContext)

  main.setId(useId())

  return (
    <main tabIndex={0} id={main.id} className={styles.root}>
      {children}
    </main>
  )
}
