import LeftProjects from '#/assets/ui/leftProjects.gif'
import PassionateSouls from '#/assets/ui/passionate-souls.svg'
import RightProjects from '#/assets/ui/rightProjects.gif'
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
          'pl-[17%] pt-[12%]'
        )}
      >
        <PassionateSouls className={clsx('w-full')} />
      </div>
      <div className={clsx('absolute', 'w-[30%]', 'left-[48%] top-[14%]')}>
        <ImageContainer aspectRatio='3:2' src={leftImage ?? LeftProjects} />
      </div>
      <div className={clsx('absolute', 'w-[35%]', 'left-0 bottom-[8%]')}>
        <ImageContainer aspectRatio='3:2' src={rightImage ?? RightProjects} />
      </div>
    </AspectRatioContainer>
  )
}
