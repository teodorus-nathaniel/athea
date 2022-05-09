import SectionWrapper from '#/components/sections/SectionWrapper'
import Text from '#/ui/Text'
import clsx from 'clsx'
import React from 'react'

export default function ServicesDescriptionSection() {
  return (
    <SectionWrapper>
      <div
        className={clsx(
          'grid grid-cols-[5fr,_6fr] gap-x-16',
          'max-w-screen-md',
          'items-center'
        )}>
        <Text
          className={clsx(
            'text-5xl',
            'text-right leading-snug',
            'tracking-wide'
          )}
          serif
          bold>{`We Integrate\nCollaborate\nChallenge`}</Text>
        <div className={clsx('flex flex-col', 'text-xl')}>
          <Text className={clsx('pb-8')}>
            We are your next set of creative innovation experts. Athea is
            multidisciplinary creative company.
          </Text>
          <Text>
            We are based in Jakarta and founded in 2019 had 4 subsidiary based
            on functionality.
          </Text>
        </div>
      </div>
    </SectionWrapper>
  )
}
