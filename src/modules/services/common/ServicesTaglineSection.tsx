import ServiceHeadline from '#/assets/ui/service-tagline.gif'
import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import React from 'react'

export default function ServicesTaglineSection(props: SectionWrapperProps) {
  return (
    <SectionWrapper {...props}>
      <img src={ServiceHeadline.src} alt='tagline' />
    </SectionWrapper>
  )
}
