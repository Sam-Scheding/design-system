import { Heading } from '@ds/components/Heading'
import { VisuallyHidden } from '@ds/components/VisuallyHidden'
import { ReactNode } from 'react'

import { PageLayoutProvider } from '@ds/components/PageLayout/context'
import { SkipTo } from '@ds/components/PageLayout/SkipTo'

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
