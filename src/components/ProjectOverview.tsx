import { ProjectOverviewData } from '#/data/types'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import Link from '#/ui/Link'
import Text from '#/ui/Text'
import clsx from 'clsx'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

export default function ProjectOverview({
  thumbnail,
  title,
  titleDesc,
  subtitle,
  ref: _ref,
  ...anchorProps
}: ProjectOverviewData & HTMLProps<HTMLAnchorElement>) {
  const mdUp = useBreakpointThreshold('md')
  const desktopClassNames = clsx('pt-[56.25%]')
  const mobileClassNames = clsx('pt-[133%]')

  return (
    <Link
      noAnimation
      href='/detail'
      className={clsx('flex flex-col w-full')}
      {...anchorProps}>
      <div
        className={clsx(
          'w-full relative overflow-hidden',
          mdUp ? desktopClassNames : mobileClassNames
        )}>
        <Image
          src={thumbnail}
          alt={title}
          layout='fill'
          className={clsx(
            'object-center object-cover',
            'absolute top-0 left-0',
            'transition-transform ease-out duration-500',
            'hover:scale-105'
          )}
        />
      </div>
      <Text
        as='p'
        className={clsx('text-2xl tracking-wider leading-tight', 'mt-6 mb-2')}>
        <Text serif bold>
          {title}
        </Text>{' '}
        &middot;
        <Text> {titleDesc}</Text>
      </Text>
      <Text as='p' className={clsx(mdUp ? 'text-lg' : 'text-sm')}>
        {subtitle}
      </Text>
    </Link>
  )
}
