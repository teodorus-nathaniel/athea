import {
  ScrollTriggerProvider,
  ScrollTriggerProviderProps,
} from '#/helpers/contexts/ScrollTriggerProvider'
import React, { useCallback, useMemo, useRef } from 'react'

interface Props {
  children?: any
}

const DEFAULT_SCROLL_DIST = 1000

export default function ScrollTriggerSnap({ children }: Props) {
  const scrollDist = DEFAULT_SCROLL_DIST

  const timeout = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const scrollListener = useCallback(() => {
    clearTimeout(timeout.current)
    timeout.current = window.setTimeout(() => {
      console.log('HEY MASUK')
      const currentProgress = timelineRef?.current?.scrollTrigger?.progress
      if ((currentProgress ?? 0) < 0.5) {
        // TODO: MATIIN SENSOR INI (SUPAYA GA REKURSIF, MANGGIL SCROLL LIUSTENER LAGI) KALO LAGI SCROLLING
        window.scrollTo({
          top:
            (containerRef?.current?.getBoundingClientRect().top ?? 0) +
            window.scrollY -
            scrollDist * (timelineRef?.current?.scrollTrigger?.progress ?? 0),
          behavior: 'smooth',
        })
      } else {
        window.scrollTo({
          top:
            (containerRef?.current?.getBoundingClientRect().top ?? 0) +
            window.scrollY -
            scrollDist * (timelineRef?.current?.scrollTrigger?.progress ?? 0) +
            scrollDist,
          behavior: 'smooth',
        })
      }
    }, 10)
  }, [containerRef, scrollDist, timelineRef])

  const options: ScrollTriggerProviderProps['options'] = useMemo(() => {
    const onToggle: ScrollTrigger.Callback = (scrollInstance) => {
      clearTimeout(timeout.current)
      if (scrollInstance.isActive) {
        console.log('SETUP')
        window.addEventListener('scroll', scrollListener, { passive: true })
      } else {
        console.log('REMOVE')
        window.removeEventListener('scroll', scrollListener)
      }
    }

    return { onToggle }
  }, [scrollListener])
  return (
    <ScrollTriggerProvider
      options={options}
      containerRef={containerRef}
      timelineRef={timelineRef}>
      {children}
    </ScrollTriggerProvider>
  )
}
