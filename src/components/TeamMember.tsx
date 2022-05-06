import { TeamMemberData } from '#/data/types'
import ImageContainer from '#/ui/ImageContainer'
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
      <ImageContainer src='' aspectRatio='3:4' />
      <Text serif bold className={clsx('mb-0.5 mt-4 text-xl')}>
        {name}
      </Text>
      <Text className={clsx('text-sm uppercase')}>{position}</Text>
    </div>
  )
}
