import Larasatie from '#/assets/ui/larasatie.png'
import PassionateSouls from '#/assets/ui/passionate-souls.svg'
import AspectRatioContainer from '#/ui/AspectRatioContainer'
import ImageContainer from '#/ui/ImageContainer'
import clsx from 'clsx'
import React from 'react'

interface Props {
  leftImage?: string
  rightImage?: string
}

export default function PassionateSoulsHeadline({
  leftImage,
  rightImage,
}: Props) {
  return (
    <AspectRatioContainer aspectRatio='4:3' className={clsx('!bg-black')}>
      <div
        className={clsx(
          'absolute',
          'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'w-full',
          'pl-[12%] pt-[10%]'
        )}>
        <PassionateSouls className={clsx('w-full')} />
      </div>
      <div className={clsx('absolute', 'w-[30%]', 'left-[43%] top-[10%]')}>
        <ImageContainer aspectRatio='3:2' src={leftImage ?? Larasatie} />
      </div>
      <div className={clsx('absolute', 'w-[33%]', 'left-0 bottom-[12%]')}>
        <ImageContainer aspectRatio='3:2' src={rightImage ?? Larasatie} />
      </div>
    </AspectRatioContainer>
  )
}
