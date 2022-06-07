import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import clsx from 'clsx'
import React, { HTMLProps, useEffect, useState } from 'react'
import AspectRatioContainer, {
  AspectRatioContainerProps,
} from './AspectRatioContainer'

export interface ImageContainerProps
  extends Omit<Omit<HTMLProps<HTMLImageElement>, 'crossOrigin'>, 'src'> {
  aspectRatio: AspectRatioContainerProps['aspectRatio']
  containerClassName?: string
  withAnimation?: boolean
  src: HTMLProps<HTMLImageElement>['src'] | StaticImageData
}

export default function ImageContainer({
  aspectRatio,
  containerClassName,
  withAnimation,
  ...imageProps
}: ImageContainerProps) {
  const mdUp = useBreakpointThreshold('md')
  const [imageError, setImageError] = useState(false)

  const [isAfterFirstLoad, setIsAfterFirstLoad] = useState(false)
  useEffect(() => {
    setIsAfterFirstLoad(true)
  }, [])

  const imageAnimation = clsx(
    'transition-transform ease-out duration-500',
    'hover:scale-105'
  )

  const _src =
    imageProps.src && typeof imageProps.src !== 'string'
      ? (imageProps.src as any).src
      : imageProps.src

  const srcTokens = (_src ?? '').split('.')
  const ext = srcTokens[srcTokens.length - 1]
  const fileName = srcTokens.slice(0, srcTokens.length - 1).join('.')
  const getSrc = (appendModifier: boolean) => {
    if (!isAfterFirstLoad) return ''
    if (!appendModifier) {
      return `${fileName}.${ext}`
    }
    return `${fileName}${mdUp ? '-desktop' : '-mobile'}.${ext}`
  }

  return (
    <AspectRatioContainer
      aspectRatio={aspectRatio}
      className={containerClassName}>
      {imageProps.src && isAfterFirstLoad && (
        <img
          className={clsx(
            'object-center object-cover',
            'absolute top-0 left-0 w-full h-full',
            withAnimation ? imageAnimation : ''
          )}
          {...imageProps}
          src={getSrc(!imageError)}
          alt={imageProps.alt ?? ''}
          onErrorCapture={() => setImageError(true)}
        />
      )}
    </AspectRatioContainer>
  )
}
