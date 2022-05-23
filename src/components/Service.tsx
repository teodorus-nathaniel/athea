import { ServiceData } from '#/data/types'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import AspectRatioContainer from '#/ui/AspectRatioContainer'
import Text from '#/ui/Text'
import clsx from 'clsx'
import React, { HTMLProps, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export interface ServiceProps extends ServiceData {
  number: number
  videoProps?: HTMLProps<HTMLVideoElement>
  imageOnly?: boolean
  textOnly?: boolean
}

export default function Service({
  video,
  number,
  title,
  videoProps,
  subtitle,
  className,
  imageOnly = false,
  textOnly = false,
  ...divProps
}: ServiceProps & HTMLProps<HTMLDivElement>) {
  const mdUp = useBreakpointThreshold('md')

  const { inView, ref, entry } = useInView({ threshold: 0.5 })
  useEffect(() => {
    const videoElement = entry?.target as HTMLVideoElement
    if (!videoElement) return
    if (inView && videoElement.paused) {
      videoElement.play()
    } else {
      videoElement.pause()
    }
  }, [inView, entry])

  return (
    <div className={clsx('flex flex-col w-full', className)} {...divProps}>
      {!textOnly && (
        <AspectRatioContainer aspectRatio={mdUp ? '16:9' : '3:4'}>
          <video
            ref={ref}
            src={video}
            muted
            className={clsx('object-cover', 'w-full h-full')}
            {...videoProps}
          />
        </AspectRatioContainer>
      )}
      {!imageOnly && (
        <div
          className={clsx(
            'relative pl-6',
            'flex flex-col',
            !textOnly && 'mt-4 md:mt-8'
          )}>
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
      )}
    </div>
  )
}
