import { ServiceData } from '#/data/types'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
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
  const mdUp = useBreakpointThreshold('md')
  const serviceAspectRatio = mdUp ? clsx('pt-[56.25%]') : clsx('pt-[133.33%]')

  return (
    <div
      className={clsx('flex flex-col max-w-sm w-full', className)}
      {...divProps}>
      <div
        className={clsx(
          'border border-gray-600',
          'w-full bg-white',
          serviceAspectRatio
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
