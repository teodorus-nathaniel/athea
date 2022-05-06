import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import React from 'react'

const aspectRatios = {
  '16:9': clsx('pt-[56.25%]'),
  '3:4': clsx('pt-[133.33%]'),
  '4:3': clsx('pt-[80%]'),
}

export interface ImageContainerProps extends ImageProps {
  aspectRatio: keyof typeof aspectRatios
  containerClassName?: string
  withAnimation?: boolean
}

export default function ImageContainer({
  aspectRatio,
  containerClassName,
  withAnimation,
  ...imageProps
}: ImageContainerProps) {
  const imageAnimation = clsx(
    'transition-transform ease-out duration-500',
    'hover:scale-105'
  )

  return (
    <div
      className={clsx(
        'w-full relative overflow-hidden',
        'bg-gray-500',
        aspectRatios[aspectRatio],
        containerClassName
      )}>
      {imageProps.src && (
        <Image
          layout='fill'
          className={clsx(
            'object-center object-cover',
            'absolute top-0 left-0',
            withAnimation ? imageAnimation : ''
          )}
          {...imageProps}
          alt={imageProps.alt ?? ''}
        />
      )}
    </div>
  )
}
