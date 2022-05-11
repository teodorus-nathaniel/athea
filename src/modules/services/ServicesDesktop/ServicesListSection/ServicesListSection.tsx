import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import services from '#/data/services'
import { ScrollTriggerProvider } from '#/helpers/contexts/ScrollTriggerProvider'
import Text from '#/ui/Text'
import { linear } from '@popmotion/easing'
import clsx from 'clsx'
import React, { useMemo } from 'react'
import ServicesListContent from './ServicesListContent'

export default function ServicesListSection(props: SectionWrapperProps) {
  const options = useMemo(() => {
    const snapTo = Array.from({ length: services.length }).map(
      (_, idx) => (1 / (services.length - 1)) * idx
    )

    return {
      end: `+=${services.length * 500}px`,
      snap: {
        delay: 0,
        snapTo,
        duration: 0.25,
        ease: linear,
      },
    }
  }, [])

  return (
    <ScrollTriggerProvider options={options}>
      <SectionWrapper
        className={clsx(
          'min-h-screen',
          'flex items-center',
          '!py-8 !px-24',
          'justify-center'
        )}
        title={
          <>
            <Text serif bold>
              Our
            </Text>
            <Text> Services</Text>
          </>
        }
        {...props}>
        <ServicesListContent services={services} />
      </SectionWrapper>
    </ScrollTriggerProvider>
  )
}
