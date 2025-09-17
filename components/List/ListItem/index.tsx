import { forwardRef, ReactNode } from 'react'

interface ListItemProps {
  children: ReactNode
  tabIndex?: number
}

const ListItem = ({ tabIndex, children }: ListItemProps, ref: React.Ref<HTMLLIElement>) => {
  return (
    <li ref={ref} tabIndex={tabIndex}>
      {children}
    </li>
  )
}

export const ListItemWithRef = forwardRef<HTMLLIElement, ListItemProps>(ListItem)
