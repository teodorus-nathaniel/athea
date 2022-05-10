import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import Service from '#/components/Service'
import services from '#/data/services'
import { useScrollTriggerContext } from '#/helpers/contexts/ScrollTriggerProvider'
import Text from '#/ui/Text'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'
import { SizeMe } from 'react-sizeme'
import ServiceAnimated from './ServiceAnimated'

const OFFSET = 100
export default function ServicesListContent(props: SectionWrapperProps) {
  const scrollTriggerInstance = useScrollTriggerContext()

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
        <SizeMe monitorHeight monitorWidth={false}>
          {({ size: { height } }) => (
            <div
              className={clsx('relative', 'ml-16', 'flex-1')}
              style={{ perspective: '2000px' }}>
              <div>
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
                {scrollTriggerInstance &&
                  services.map((service, idx) => (
                    <ServiceAnimated
                      idx={idx}
                      length={services.length}
                      service={service}
                      progress={scrollTriggerInstance.progress}
                      key={idx}
                      offset={(height ?? 0) + OFFSET}
                    />
                  ))}
              </motion.div>
            </div>
          )}
        </SizeMe>
      </div>
    </SectionWrapper>
  )
}
