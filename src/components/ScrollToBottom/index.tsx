import React, { LegacyRef } from 'react'

import { useScrollToBottom } from './use-scroll-to-bottom'

export const ScrollTo = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return <div ref={ref}></div>
})

export { useScrollToBottom }
