import clsx from 'clsx'
import { ImageProps } from 'next/image'
import React, { HTMLProps } from 'react'
import AspectRatioContainer, {
  AspectRatioContainerProps,
} from './AspectRatioContainer'

export interface ImageContainerProps
  extends Omit<Omit<HTMLProps<HTMLImageElement>, 'crossOrigin'>, 'src'> {
  aspectRatio: AspectRatioContainerProps['aspectRatio']
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
          src={
            imageProps.src && typeof imageProps.src !== 'string'
              ? (imageProps.src as any).src
              : imageProps.src
          }
          alt={imageProps.alt ?? ''}
        />
      )}
    </AspectRatioContainer>
  )
}
