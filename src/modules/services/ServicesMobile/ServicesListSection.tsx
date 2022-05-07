import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import ServiceList from '#/components/ServiceList'
import services from '#/data/services'
import Text from '#/ui/Text'
import React from 'react'

export default function ServicesListSection(props: SectionWrapperProps) {
  return (
    <SectionWrapper
      {...props}
      title={
        <>
          <Text serif bold>
            Our{' '}
          </Text>
          <Text>Services</Text>
        </>
      }>
      <ServiceList services={services} />
    </SectionWrapper>
  )
}
