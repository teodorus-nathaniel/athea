import { ProjectOverviewData } from '#/data/types'
import Link from '#/ui/Link'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

export default function ProjectOverview({
  thumbnail,
  title,
  titleDesc,
  subtitle,
  ref: _ref,
  ...anchorProps
}: ProjectOverviewData & HTMLProps<HTMLAnchorElement>) {
  return (
    <Link
      noAnimation
      href='/detail'
      className={clsx('flex flex-col w-full')}
      {...anchorProps}>
      <div className={clsx('w-full pt-[100%] relative')}>
        <img
          src={thumbnail}
          alt={title}
          className={clsx(
            'object-center object-cover',
            'absolute top-0 left-0'
          )}
        />
      </div>
      <h2 className={clsx('text-xl tracking-wider leading-6', 'mt-4 mb-2')}>
        <span className='font-bold font-serif'>{title}</span> &middot;
        <span> {titleDesc}</span>
      </h2>
      <p className='font-light text-sm'>{subtitle}</p>
    </Link>
  )
}
