import { IconButton } from 'components/Button'
import { Menu } from 'components/Icon'
import { useContext } from 'react'

import { PageLayoutContext } from '../context'

export const SideNavigationToggleButton = () => {
  const { sideNavigation } = useContext(PageLayoutContext)
  const { isExpanded, setIsExpanded } = sideNavigation

  return (
    <IconButton
      aria-label={`${isExpanded ? 'Close' : 'Open'} side navigation`}
      aria-expanded={isExpanded}
      aria-controls={sideNavigation.id}
      variant="subtle"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <Menu size="24" stroke="var(--rp-color-text-heading)" />
    </IconButton>
  )
}
