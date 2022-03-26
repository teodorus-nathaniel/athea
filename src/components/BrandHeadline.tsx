import PassionateSouls from '#/assets/ui/passionate-souls.svg'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {}

export default function BrandHeadline({ className, ...divProps }: Props) {
  return (
    <div {...divProps} className={clsx('relative max-w-md', 'px-8', className)}>
      <PassionateSouls />
    </div>
  )
}
