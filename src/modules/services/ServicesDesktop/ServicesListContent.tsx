import Project from '#/assets/photos/project-2.png'
import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import Service from '#/components/Service'
import services from '#/data/services'
import { useScrollTriggerContext } from '#/helpers/contexts/ScrollTriggerProvider'
import Text from '#/ui/Text'
import clsx from 'clsx'
import { motion, useTransform } from 'framer-motion'
import React, { useLayoutEffect, useRef, useState } from 'react'

export default function ServicesListContent(props: SectionWrapperProps) {
  const dummyContentRef = useRef<HTMLDivElement | null>(null)
  const progress = useScrollTriggerContext()
  const rotate = useTransform(progress!, [0, 1], [0, 90])
  const opacity1 = useTransform(progress!, [0, 1], [1, 0])
  const opacity2 = useTransform(progress!, [0, 1], [0, 1])
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
            style={{
              translateZ: -height / 2,
              rotateX: rotate,
              transformStyle: 'preserve-3d',
            }}
            className={clsx('absolute top-0 left-0', 'w-full h-full')}>
            <motion.div
              className={clsx('absolute w-full h-full')}
              style={{
                transform: `rotateX(0deg) translateZ(${height / 2}px)`,
                opacity: opacity1,
              }}>
              <Service {...service} image={Project} number={1} />
            </motion.div>
            <motion.div
              className={clsx('absolute w-full h-full')}
              style={{
                transform: `rotateX(-90deg) translateZ(${height / 2}px)`,
                opacity: opacity2,
              }}>
              <Service {...service} image={Project} number={1} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
