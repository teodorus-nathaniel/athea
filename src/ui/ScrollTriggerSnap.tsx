import {
  ScrollTriggerProvider,
  ScrollTriggerProviderProps,
} from '#/helpers/contexts/ScrollTriggerProvider'
import { linear } from '@popmotion/easing'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import React, { useCallback, useMemo, useRef } from 'react'

interface Props extends ScrollTriggerProviderProps {
  snapProgresses?: number[]
  scrollDist?: number
}

gsap.registerPlugin(ScrollToPlugin)

const DEFAULT_SCROLL_DIST = 1000
const DEFAULT_SNAP_PROGRESSES = [0, 1]
export default function ScrollTriggerSnap({
  children,
  scrollDist = DEFAULT_SCROLL_DIST,
  snapProgresses = DEFAULT_SNAP_PROGRESSES,
  ...props
}: Props) {
  const timeout = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const ignoreScroll = useRef(false)

  const scrollListener = useCallback(() => {
    if (ignoreScroll.current) return
    clearTimeout(timeout.current)
    timeout.current = window.setTimeout(() => {
      if (ignoreScroll.current) return
      ignoreScroll.current = true
      const currentProgress = timelineRef?.current?.scrollTrigger?.progress ?? 0
      const currentScrollOffset =
        scrollDist * (timelineRef?.current?.scrollTrigger?.progress ?? 0)
      const containerTop =
        (containerRef?.current?.getBoundingClientRect().top ?? 0) +
        window.scrollY -
        currentScrollOffset

      const direction =
        timelineRef?.current?.scrollTrigger?.direction === -1 ? 'up' : 'down'
      const MOMENTUM = 0.1
      const currentMomentum = direction === 'up' ? -MOMENTUM : MOMENTUM

      let nearestSmallIdx = -1,
        nearestBigIdx = -1
      for (let i = snapProgresses.length - 1; i >= 0; i--) {
        if (snapProgresses[i] < currentProgress + currentMomentum) {
          nearestSmallIdx = i
          nearestBigIdx = i + 1
          break
        }
      }
      let offset
      const toSmallDist = currentProgress - snapProgresses[nearestSmallIdx]
      const toBigDist = snapProgresses[nearestBigIdx] - currentProgress
      let dist
      if (toSmallDist > toBigDist) {
        offset =
          containerTop + scrollDist * (snapProgresses[nearestBigIdx] ?? 0)
      } else {
        offset =
          containerTop + scrollDist * (snapProgresses[nearestSmallIdx] ?? 0)
      }

      gsap.to(window, {
        scrollTo: {
          y: offset,
          autoKill: true,
          onAutoKill: () => {
            ignoreScroll.current = false
          },
        },
        onComplete: () => {
          ignoreScroll.current = false
        },
        duration: 0.3,
        ease: linear,
      })
    }, 100)
  }, [containerRef, scrollDist, timelineRef, snapProgresses])

  const options: ScrollTriggerProviderProps['options'] = useMemo(() => {
    const onToggle: ScrollTrigger.Callback = (scrollInstance) => {
      clearTimeout(timeout.current)
      if (scrollInstance.isActive) {
        window.addEventListener('scroll', scrollListener, { passive: true })
      } else {
        window.removeEventListener('scroll', scrollListener)
      }
    }

    return { onToggle, end: `+=${scrollDist}px` }
  }, [scrollListener, scrollDist])
  return (
    <ScrollTriggerProvider
      options={options}
      containerRef={containerRef}
      timelineRef={timelineRef}
      {...props}>
      {children}
    </ScrollTriggerProvider>
  )
}
