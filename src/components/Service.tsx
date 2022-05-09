import { ServiceData } from '#/data/types'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import ImageContainer from '#/ui/ImageContainer'
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

  return (
    <div className={clsx('flex flex-col w-full', className)} {...divProps}>
      <ImageContainer src={image ?? ''} aspectRatio={mdUp ? '16:9' : '3:4'} />
      <div className={clsx('relative pl-6 mt-4', 'flex flex-col', 'md:mt-8')}>
        <Text className={clsx('absolute top-0 left-0')}>
          {number.toString().padStart(2, '0')}
        </Text>
        <Text bold serif className={clsx('text-2xl mb-1', 'md:text-3xl')}>
          {title}
        </Text>
        <Text className={clsx('text-lg leading-tight', 'md:text-xl')}>
          {subtitle}
        </Text>
      </div>
    </div>
  )
}
