import ServiceHeadline from '#/assets/ui/service-tagline.jpeg'
import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import Image from 'next/image'
import React from 'react'

export default function ServicesTaglineSection(props: SectionWrapperProps) {
  return (
    <SectionWrapper {...props}>
      <Image src={ServiceHeadline} alt='tagline' />
    </SectionWrapper>
  )
}
