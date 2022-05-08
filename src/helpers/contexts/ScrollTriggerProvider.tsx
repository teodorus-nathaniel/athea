import { MotionValue, useMotionValue } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useCallback, useContext, useLayoutEffect, useRef } from 'react'

export const ScrollTriggerContext =
  React.createContext<MotionValue<number> | null>(null)

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

  const scrollListener = useCallback(() => {
    clearTimeout(timeout.current)
    timeout.current = window.setTimeout(() => {
      console.log('HEY MASUK')
      const currentProgress = refTimeline.current?.scrollTrigger?.progress
      if ((currentProgress ?? 0) < 0.5) {
        // TODO: MATIIN SENSOR INI (SUPAYA GA REKURSIF, MANGGIL SCROLL LIUSTENER LAGI) KALO LAGI SCROLLING
        window.scrollTo({
          top:
            (refScrollTrigger.current?.getBoundingClientRect().top ?? 0) +
            window.scrollY -
            scrollDist * (refTimeline.current?.scrollTrigger?.progress ?? 0),
          behavior: 'smooth',
        })
      } else {
        window.scrollTo({
          top:
            (refScrollTrigger.current?.getBoundingClientRect().top ?? 0) +
            window.scrollY -
            scrollDist * (refTimeline.current?.scrollTrigger?.progress ?? 0) +
            scrollDist,
          behavior: 'smooth',
        })
      }
    }, 10)
  }, [])

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

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (refScrollTrigger.current) {
      refTimeline.current = gsap.timeline({
        scrollTrigger: {
          ...DEFAULT_OPTIONS,
          ...options,
          markers: debug,
          onToggle,
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
