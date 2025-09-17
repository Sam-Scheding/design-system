import { Heading } from 'components/Heading'
import { VisuallyHidden } from 'components/VisuallyHidden'
import { ReactNode } from 'react'

import { PageLayoutProvider } from '../context'
import { SkipTo } from '../SkipTo'

import styles from './styles.module.css'

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PageLayoutProvider>
      <VisuallyHidden>
        <Heading as="h1">Chatse - Be who you want</Heading>
      </VisuallyHidden>
      <SkipTo />
      <div className={styles.root}>{children}</div>
    </PageLayoutProvider>
  )
}
