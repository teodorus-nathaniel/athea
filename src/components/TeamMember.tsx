import { TeamMemberData } from '#/data/types'
import Text from '#/ui/Text'
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
      <div
        className={clsx(
          'border border-gray-600',
          'w-full pt-[133%] bg-white'
        )}></div>
      <Text serif bold className={clsx('mb-1 mt-2')}>
        {name}
      </Text>
      <Text className={clsx('text-xs uppercase')}>{position}</Text>
    </div>
  )
}
