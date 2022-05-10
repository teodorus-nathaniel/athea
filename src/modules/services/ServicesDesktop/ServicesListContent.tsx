import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import Service from '#/components/Service'
import services from '#/data/services'
import { useScrollTriggerContext } from '#/helpers/contexts/ScrollTriggerProvider'
import Text from '#/ui/Text'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import React, { useLayoutEffect, useRef, useState } from 'react'
import ServiceAnimated from './ServiceAnimated'

export default function ServicesListContent(props: SectionWrapperProps) {
  const progress = useScrollTriggerContext()

  const [contentRect, setContentRect] = useState({ width: 0, height: 0 })
  const dummyContentRef = useRef<HTMLDivElement | null>(null)
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
            className={clsx(
              'absolute top-0 left-0',
              'w-full h-full',
              'overflow-hidden'
            )}>
            {progress &&
              services.map((service, idx) => (
                <ServiceAnimated
                  idx={idx}
                  length={services.length}
                  service={service}
                  progress={progress}
                  key={idx}
                  offset={heightAndOffset}
                />
              ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
