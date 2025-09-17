import { MutableRefObject, useEffect, useRef, useState } from 'react'

export const useScrollToBottom = (): {
  scrollRef: MutableRefObject<HTMLDivElement | null>
  scrollToBottom: () => void
} => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [shouldScroll, setShouldScroll] = useState(true)

  const scrollToBottom = () => {
    if (shouldScroll && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'instant' })
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldScroll(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.1,
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return { scrollRef, scrollToBottom }
}
