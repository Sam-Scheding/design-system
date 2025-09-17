import { IconButton } from 'components/Button'
import { Person } from 'components/Icon'
import { DOMAttributes } from 'react'

export const SettingsButton = ({ onClick }: { onClick: DOMAttributes<HTMLButtonElement>['onClick'] }) => {
  return (
    <IconButton aria-label="Go to character settings" variant="subtle" onClick={onClick}>
      <Person fill="var(--rp-color-text-heading)" size="24" />
    </IconButton>
  )
}
