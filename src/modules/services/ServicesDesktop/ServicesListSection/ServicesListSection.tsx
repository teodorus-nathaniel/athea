import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import services from '#/data/services'
import { ScrollTriggerProvider } from '#/helpers/contexts/ScrollTriggerProvider'
import Text from '#/ui/Text'
import { linear } from '@popmotion/easing'
import React, { useMemo } from 'react'
import ServicesListContent from './ServicesListContent'

export default function ServicesListSection(props: SectionWrapperProps) {
  const options = useMemo(
    () => ({
      snap: {
        delay: 0,
        snapTo: [0, 0.3333, 0.6666, 1],
        duration: 0.3,
        ease: linear,
      },
    }),
    []
  )

  return (
    <ScrollTriggerProvider options={options}>
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
        <ServicesListContent services={services} />
      </SectionWrapper>
    </ScrollTriggerProvider>
  )
}
