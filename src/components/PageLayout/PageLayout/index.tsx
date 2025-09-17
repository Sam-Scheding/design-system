import { Heading } from 'components/Heading'
import { VisuallyHidden } from 'components/VisuallyHidden'
import { ReactNode } from 'react'

import { PageLayoutProvider } from '../context'
import { SkipTo } from '../SkipTo'

import styles from './styles.module.css'

export const PageLayout = ({ heading, children }: { heading: string, children: ReactNode }) => {
  return (
    <PageLayoutProvider>
      <VisuallyHidden>
        <Heading as="h1">{heading}</Heading>
      </VisuallyHidden>
      <SkipTo />
      <div className={styles.root}>{children}</div>
    </PageLayoutProvider>
  )
}
