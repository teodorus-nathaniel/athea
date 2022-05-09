import Project from '#/assets/photos/project-2.png'
import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import Service from '#/components/Service'
import services from '#/data/services'
import { useScrollTriggerContext } from '#/helpers/contexts/ScrollTriggerProvider'
import Text from '#/ui/Text'
import { easeOut } from '@popmotion/easing'
import clsx from 'clsx'
import { motion, useTransform } from 'framer-motion'
import { TransformOptions } from 'framer-motion/types/utils/transform'
import React, { useLayoutEffect, useRef, useState } from 'react'

export default function ServicesListContent(props: SectionWrapperProps) {
  const dummyContentRef = useRef<HTMLDivElement | null>(null)
  const progress = useScrollTriggerContext()
  const animationOptions: TransformOptions<number> = {
    ease: easeOut,
  }
  const opacity1 = useTransform(progress!, [0, 1], [1, 0], animationOptions)
  const opacity2 = useTransform(progress!, [0, 1], [0, 1], animationOptions)
  const service = services[0]

  const [contentRect, setContentRect] = useState({ width: 0, height: 0 })
  useLayoutEffect(() => {
    // TODO: check better way
    setTimeout(() => {
      if (!dummyContentRef.current) return
      const contentBoundingRect =
        dummyContentRef.current.getBoundingClientRect()
      setContentRect(contentBoundingRect)
    }, 100)
  }, [])

  const { height } = contentRect
  const heightAndOffset = height + 100
  const position1 = useTransform(progress!, [0, 1], [0, -heightAndOffset], animationOptions)
  const position2 = useTransform(progress!, [0, 1], [heightAndOffset, 0], animationOptions)

  return (
    <SectionWrapper
      title={
        <>
          <Text serif bold>
            Our
          </Text>
          <Text> Services</Text>
        </>
      }
      {...props}>
      <div className={clsx('flex items-stretch', 'w-full')}>
        <div className={clsx('w-8', 'bg-red-500')}></div>
        <div
          className={clsx('relative', 'ml-16', 'flex-1')}
          style={{ perspective: '2000px' }}>
          <div ref={dummyContentRef}>
            <Service
              className='opacity-0 pointer-events-none'
              subtitle='dummy'
              title='dummy'
              image=''
              number={1}
            />
          </div>

          <motion.div
            className={clsx('absolute top-0 left-0', 'w-full h-full')}>
            <motion.div
              className={clsx('absolute w-full h-full')}
              style={{
                opacity: opacity1,
                y: position1
              }}>
              <Service {...service} image={Project} number={1} />
            </motion.div>
            <motion.div
              className={clsx('absolute w-full h-full')}
              style={{
                opacity: opacity2,
                y: position2
              }}>
              <Service {...service} image={Project} number={1} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
