import { SectionWrapperProps } from '#/components/sections/SectionWrapper'
import { ScrollTriggerProvider } from '#/helpers/contexts/ScrollTriggerProvider'
import React from 'react'
import ServicesListContent from './ServicesListContent'

export default function ServicesListSection(props: SectionWrapperProps) {
  return (
    <ScrollTriggerProvider>
      <ServicesListContent {...props} />
    </ScrollTriggerProvider>
  )
}
