import Project from '#/assets/photos/project-2.png'
import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import Service from '#/components/Service'
import services from '#/data/services'
import Text from '#/ui/Text'
import clsx from 'clsx'
import React from 'react'

export default function ServicesListSection(props: SectionWrapperProps) {
  const service = services[0]
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
        <div className={clsx('ml-16', 'flex-1')}>
          <Service {...service} image={Project} number={1} />
        </div>
      </div>
    </SectionWrapper>
  )
}
