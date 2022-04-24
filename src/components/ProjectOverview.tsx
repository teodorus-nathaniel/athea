import { ProjectOverviewData } from '#/data/types'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import Link from '#/ui/Link'
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
      <h2 className={clsx('text-xl tracking-wider leading-6', 'mt-6 mb-2')}>
        <span className='font-bold font-serif'>{title}</span> &middot;
        <span> {titleDesc}</span>
      </h2>
      <p className='font-light text-sm'>{subtitle}</p>
    </Link>
  )
}
