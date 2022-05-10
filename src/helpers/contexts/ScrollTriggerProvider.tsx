import { MotionValue, useMotionValue } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, {
  MutableRefObject,
  RefObject,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'

export const ScrollTriggerContext = React.createContext<{
  progress: MotionValue<number>
  containerRef: RefObject<HTMLDivElement>
  timelineRef: RefObject<gsap.core.Timeline | undefined>
} | null>(null)

export const useScrollTriggerContext = () => useContext(ScrollTriggerContext)

const scrollDist = 1000
const DEFAULT_OPTIONS = {
  end: `+=${scrollDist}px`,
  pin: true,
  scrub: true,
  start: 'top top',
}

export type ScrollTriggerProviderProps = {
  debug?: boolean
  options?: Omit<
    gsap.DOMTarget | ScrollTrigger.Vars | undefined,
    'markers' | 'trigger' | 'onUpdate'
  >
  containerRef?: MutableRefObject<HTMLDivElement | null>
  timelineRef?: MutableRefObject<gsap.core.Timeline | null>
}

export const ScrollTriggerProvider: React.FC<ScrollTriggerProviderProps> = ({
  children,
  debug = false,
  timelineRef,
  containerRef,
  options = {},
}) => {
  const internalContainerRef = useRef<HTMLDivElement | null>(null)
  const internalTimelineRef = useRef<gsap.core.Timeline | null>(null)
  const progress = useMotionValue(0)
  const lastProgress = useRef(0)

  const usedTimelineRef = timelineRef ?? internalTimelineRef
  const usedContainerRef = containerRef ?? internalContainerRef

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (usedContainerRef.current) {
      usedTimelineRef.current = gsap.timeline({
        scrollTrigger: {
          ...DEFAULT_OPTIONS,
          ...options,
          markers: debug,
          trigger: usedContainerRef.current,
          onUpdate: (instance) => {
            const clampedProgress = Math.min(Math.max(instance.progress, 0), 1)
            progress.set(clampedProgress)
            lastProgress.current = clampedProgress
          },
        },
      })
    }

    return () => {
      usedTimelineRef.current?.scrollTrigger?.kill()
      usedTimelineRef.current?.kill()
      usedTimelineRef.current?.clear()
    }
  }, [debug, options, progress, usedContainerRef, usedTimelineRef])

  const data = useMemo(
    () => ({
      progress,
      containerRef: usedContainerRef,
      timelineRef: usedTimelineRef,
    }),
    [progress, usedContainerRef, usedTimelineRef]
  )

  return (
    <div ref={usedContainerRef}>
      <ScrollTriggerContext.Provider value={data}>
        {children}
      </ScrollTriggerContext.Provider>
    </div>
  )
}
