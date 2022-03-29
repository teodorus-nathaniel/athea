import { TeamMemberData } from '#/data/types'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

export default function TeamMember({
  image,
  name,
  position,
  className,
  ...divProps
}: TeamMemberData & HTMLProps<HTMLDivElement>) {
  return (
    <div className={clsx('flex flex-col w-full', className)} {...divProps}>
      <div className={clsx('border border-gray-600 w-full pt-[110%]')}></div>
      <p className={clsx('font-serif font-bold text-lg', 'mb-1 mt-2')}>
        {name}
      </p>
      <p className={clsx('font-light text-sm uppercase')}>{position}</p>
    </div>
  )
}
