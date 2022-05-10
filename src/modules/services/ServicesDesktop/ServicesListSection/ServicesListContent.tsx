import Service from '#/components/Service'
import { ServiceData } from '#/data/types'
import { useScrollTriggerContext } from '#/helpers/contexts/ScrollTriggerProvider'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import React, { HTMLProps } from 'react'
import { SizeMe } from 'react-sizeme'
import ServiceAnimated from './ServiceAnimated'
import ServicesListScrollIndicator from './ServicesListScrollIndicator'

interface Props extends HTMLProps<HTMLDivElement> {
  services: ServiceData[]
}

const ServicesListContent = React.forwardRef<HTMLDivElement, Props>(
  function ServicesListContent({ services, className, ...props }, ref) {
    const scrollTriggerInstance = useScrollTriggerContext()

    return (
      <div
        ref={ref}
        className={clsx('flex items-stretch', 'w-full', className)}
        {...props}>
        {scrollTriggerInstance && (
          <div className={clsx('w-3')}>
            <ServicesListScrollIndicator
              dataCount={services.length}
              progress={scrollTriggerInstance.progress}
            />
          </div>
        )}
        <div className={clsx('w-full')}>
          <SizeMe monitorHeight monitorWidth={false}>
            {({ size: { height } }) => (
              <div className={clsx('relative', 'ml-16', 'flex-1')}>
                <div>
                  <Service
                    imageOnly
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
                        {...service}
                        imageOnly
                        idx={idx}
                        length={services.length}
                        progress={scrollTriggerInstance.progress}
                        key={idx}
                        offset={height ?? 0}
                      />
                    ))}
                </motion.div>
              </div>
            )}
          </SizeMe>
          <SizeMe monitorHeight monitorWidth={false}>
            {({ size: { height } }) => (
              <div
                className={clsx('relative', 'ml-16', 'flex-1', 'mt-4 md:mt-8')}>
                <div>
                  <Service
                    textOnly
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
                        {...service}
                        textOnly
                        idx={idx}
                        length={services.length}
                        progress={scrollTriggerInstance.progress}
                        key={idx}
                        offset={(height ?? 0) + 20}
                      />
                    ))}
                </motion.div>
              </div>
            )}
          </SizeMe>
        </div>
      </div>
    )
  }
)

export default ServicesListContent
