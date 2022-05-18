import clsx from 'clsx'
import { ImageProps } from 'next/image'
import React, { HTMLProps } from 'react'
import AspectRatioContainer from './AspectRatioContainer'

const aspectRatios = {
  '16:9': clsx('pt-[56.25%]'),
  '3:4': clsx('pt-[133.33%]'),
  '4:3': clsx('pt-[80%]'),
}

export interface ImageContainerProps
  extends Omit<Omit<HTMLProps<HTMLImageElement>, 'crossOrigin'>, 'src'> {
  aspectRatio: keyof typeof aspectRatios
  containerClassName?: string
  withAnimation?: boolean
  src: ImageProps['src']
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
    <AspectRatioContainer
      aspectRatio={aspectRatio}
      className={containerClassName}>
      {imageProps.src && (
        <img
          className={clsx(
            'object-center object-cover',
            'absolute top-0 left-0 w-full h-full',
            withAnimation ? imageAnimation : ''
          )}
          {...imageProps}
          src={imageProps.src && (imageProps.src as any).src}
          alt={imageProps.alt ?? ''}
        />
      )}
    </AspectRatioContainer>
  )
}
