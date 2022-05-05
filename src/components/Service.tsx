import { ServiceData } from '#/data/types'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

export interface ServiceDataProps extends ServiceData {
  number: number
}

export default function Service({
  image,
  number,
  title,
  subtitle,
  className,
  ...divProps
}: ServiceDataProps & HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={clsx('flex flex-col max-w-sm w-full', className)}
      {...divProps}>
      <div
        className={clsx(
          'border border-gray-600',
          'w-full pt-[155.55%] bg-white'
        )}></div>
      <div className={clsx('relative pl-6 mt-4', 'flex flex-col')}>
        <span className={clsx('absolute top-0 left-0')}>
          {number.toString().padStart(2, '0')}
        </span>
        <p className={clsx('font-serif font-bold text-xl', 'mb-1')}>{title}</p>
        <p className={clsx('font-light')}>{subtitle}</p>
      </div>
    </div>
  )
}
