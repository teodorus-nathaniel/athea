import LeftProjects from '#/assets/ui/leftProjects.gif'
import PassionateProjects from '#/assets/ui/passionate-projects.svg'
import RightProjects from '#/assets/ui/rightProjects.gif'
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
          'pl-[16%] pt-[10%]'
        )}
      >
        <PassionateProjects className={clsx('w-full')} />
      </div>
      <div className={clsx('absolute', 'w-[30%]', 'left-[48%] top-[12%]')}>
        <ImageContainer aspectRatio='3:2' src={leftImage ?? LeftProjects} />
      </div>
      <div className={clsx('absolute', 'w-[35%]', 'left-0 bottom-[10%]')}>
        <ImageContainer aspectRatio='3:2' src={rightImage ?? RightProjects} />
      </div>
    </AspectRatioContainer>
  )
}
