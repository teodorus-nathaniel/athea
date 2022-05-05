import { ServiceData } from '#/data/types'
import Text from '#/ui/Text'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

export interface ServiceDataProps extends ServiceData {
  number: number
}

export default function Service({
  image,
  number,
  title,
  subtitle,
  className,
  ...divProps
}: ServiceDataProps & HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={clsx('flex flex-col max-w-sm w-full', className)}
      {...divProps}>
      <div
        className={clsx(
          'border border-gray-600',
          'w-full pt-[155.55%] bg-white'
        )}></div>
      <div className={clsx('relative pl-6 mt-4', 'flex flex-col')}>
        <Text className={clsx('absolute top-0 left-0')}>
          {number.toString().padStart(2, '0')}
        </Text>
        <Text bold serif className={clsx('text-2xl mb-1')}>
          {title}
        </Text>
        <Text className='text-lg leading-tight'>{subtitle}</Text>
      </div>
    </div>
  )
}
