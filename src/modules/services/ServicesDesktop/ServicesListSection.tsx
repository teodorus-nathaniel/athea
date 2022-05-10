import { SectionWrapperProps } from '#/components/sections/SectionWrapper'
import ScrollTriggerSnap from '#/ui/ScrollTriggerSnap'
import React from 'react'
import ServicesListContent from './ServicesListContent'

export default function ServicesListSection(props: SectionWrapperProps) {
  return (
    <ScrollTriggerSnap>
      <ServicesListContent {...props} />
    </ScrollTriggerSnap>
  )
}
