import { MotionValue, useMotionValue } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useContext, useLayoutEffect, useRef } from 'react'

export const ScrollTriggerContext =
  React.createContext<MotionValue<number> | null>(null)

export const useScrollTriggerContext = () => useContext(ScrollTriggerContext)

const DEFAULT_OPTIONS = {
  end: '+=100%',
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
}

export const ScrollTriggerProvider: React.FC<ScrollTriggerProviderProps> = ({
  children,
  debug = false,
  options = {},
}) => {
  const refScrollTrigger = useRef<HTMLDivElement>(null)
  const refTimeline = useRef<gsap.core.Timeline>()
  const progress = useMotionValue(0)
  const lastProgress = useRef(0)
  const timeout = useRef<number>(0)

  // useEffect(() => {
  //   const listener = () => {
  //     clearTimeout(timeout.current)
  //     timeout.current = window.setTimeout(() => {
  //       progress.set(0)
  //     }, 1000)
  //   }
  //   console.log('asdfasd')
  //   window.addEventListener('scroll', listener, { passive: true })
  //   return () => {
  //     window.removeEventListener('scroll', listener)
  //   }
  // }, [progress])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (refScrollTrigger.current) {
      refTimeline.current = gsap.timeline({
        scrollTrigger: {
          ...DEFAULT_OPTIONS,
          ...options,
          // snap: {
          //   snapTo: [0, 1],
          //   delay: 0,
          // },
          markers: debug,
          trigger: refScrollTrigger.current,
          onUpdate: (instance) => {
            const clampedProgress = Math.min(Math.max(instance.progress, 0), 1)
            progress.set(clampedProgress)
            lastProgress.current = clampedProgress
          },
        },
      })
    }

    return () => {
      refTimeline.current?.scrollTrigger?.kill()
      refTimeline.current?.kill()
      refTimeline.current?.clear()
    }
  }, [debug, options, progress])

  return (
    <div ref={refScrollTrigger}>
      <ScrollTriggerContext.Provider value={progress}>
        {children}
      </ScrollTriggerContext.Provider>
    </div>
  )
}
