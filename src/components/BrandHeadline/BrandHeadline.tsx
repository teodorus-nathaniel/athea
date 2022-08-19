import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import PassionateProjectsHeadline from './PassionateProjectsHeadline'
import PassionateSoulsHeadline from './PassionateSoulsHeadline'

export type HeadlineTypes = 'souls' | 'projects'

function getHeadlineType(type: HeadlineTypes) {
  switch (type) {
    case 'projects':
      return PassionateProjectsHeadline
    case 'souls':
      return PassionateSoulsHeadline
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
    <div
      {...divProps}
      className={clsx('relative max-w-[40rem]', 'px-8', className)}
    >
      <Headline />
    </div>
  )
}
