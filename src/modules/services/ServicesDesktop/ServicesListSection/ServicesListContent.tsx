import Service from '#/components/Service'
import { ServiceData } from '#/data/types'
import { useScrollTriggerContext } from '#/helpers/contexts/ScrollTriggerProvider'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import React, { HTMLProps } from 'react'
import { SizeMe } from 'react-sizeme'
import ServiceAnimated from './ServiceAnimated'

interface Props extends HTMLProps<HTMLDivElement> {
  services: ServiceData[]
}

const OFFSET = 100
const ServicesListContent = React.forwardRef<HTMLDivElement, Props>(
  function ServicesListContent({ services, className, ...props }, ref) {
    const scrollTriggerInstance = useScrollTriggerContext()

    return (
      <div
        ref={ref}
        className={clsx('flex items-stretch', 'w-full', className)}
        {...props}>
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
    )
  }
)

export default ServicesListContent
