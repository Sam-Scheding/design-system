import { IconButton } from '@ds/components/Button'
import { InformationCircleOutline } from '@ds/components/Icon'
import { useContext } from 'react'

import { PageLayoutContext } from '@ds/components/PageLayout/context'

export const AsideToggleButton = () => {
  const { aside } = useContext(PageLayoutContext)
  const { isExpanded, setIsExpanded } = aside

  const onClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <IconButton
      aria-label={`${isExpanded ? 'Close' : 'Open'} chat information`}
      aria-expanded={isExpanded}
      aria-controls={aside.id}
      variant="subtle"
      onClick={onClick}
    >
      <InformationCircleOutline
        fill="var(--rp-color-text-heading)"
        stroke="var(--rp-color-purple-600)"
        size="32"
      />
    </IconButton>
  )
}
