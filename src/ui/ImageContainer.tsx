import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import React from 'react'
import AspectRatioContainer, {
  AspectRatioContainerProps,
} from './AspectRatioContainer'

export interface ImageContainerProps extends ImageProps {
  aspectRatio: AspectRatioContainerProps['aspectRatio']
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
    <AspectRatioContainer
      aspectRatio={aspectRatio}
      className={containerClassName}>
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
    </AspectRatioContainer>
  )
}
