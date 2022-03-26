import PassionateProjects from '#/assets/ui/passionate-projects.svg'
import PassionateSouls from '#/assets/ui/passionate-souls.svg'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

export type HeadlineTypes = 'souls' | 'projects'

function getHeadlineType(type: HeadlineTypes) {
  switch (type) {
    case 'projects':
      return PassionateProjects
    case 'souls':
      return PassionateSouls
    default:
      return null
  }
}

export interface BrandHeadlineProps extends HTMLProps<HTMLDivElement> {
  type: HeadlineTypes
  leftImage?: string
  rightImage?: string
}

export default function BrandHeadline({
  type,
  className,
  leftImage,
  rightImage,
  ...divProps
}: BrandHeadlineProps) {
  const Headline = getHeadlineType(type)
  if (!Headline) return null

  return (
    <div {...divProps} className={clsx('relative max-w-md', 'px-8', className)}>
      <Headline />
    </div>
  )
}
