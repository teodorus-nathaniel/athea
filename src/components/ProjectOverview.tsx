import { ProjectOverviewData } from '#/data/types'
import clsx from 'clsx'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

export default function ProjectOverview({
  thumbnail,
  title,
  titleDesc,
  subtitle,
}: ProjectOverviewData & HTMLProps<HTMLDivElement>) {
  return (
    <div className={clsx('flex flex-col w-full')}>
      <div className={clsx('w-full pt-[100%] relative')}>
        <Image
          src={thumbnail}
          alt={title}
          layout='fill'
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
    </div>
  )
}
