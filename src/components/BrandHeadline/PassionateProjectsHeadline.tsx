import Larasatie from '#/assets/ui/larasatie.png'
import PassionateProjects from '#/assets/ui/passionate-projects.svg'
import AspectRatioContainer from '#/ui/AspectRatioContainer'
import ImageContainer from '#/ui/ImageContainer'
import clsx from 'clsx'
import React from 'react'

interface Props {
  leftImage?: string
  rightImage?: string
}

export default function PassionateProjectsHeadline({
  leftImage,
  rightImage,
}: Props) {
  return (
    <AspectRatioContainer aspectRatio='4:3' className={clsx('!bg-black')}>
      <div
        className={clsx(
          'absolute',
          'top-[52%] left-[49%] -translate-x-1/2 -translate-y-1/2',
          'w-full',
          'pl-[12%] pt-[10%]'
        )}>
        <PassionateProjects className={clsx('w-full')} />
      </div>
      <div className={clsx('absolute', 'w-[33%]', 'left-[43%] top-[3%]')}>
        <ImageContainer aspectRatio='4:3' src={leftImage ?? Larasatie} />
      </div>
      <div className={clsx('absolute', 'w-[33%]', 'left-0 bottom-[7%]')}>
        <ImageContainer aspectRatio='4:3' src={rightImage ?? Larasatie} />
      </div>
    </AspectRatioContainer>
  )
}
