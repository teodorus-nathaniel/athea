import { ServiceData } from '#/data/types'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

export interface HorizontalScrollableContainerProps
  extends HTMLProps<HTMLDivElement> {
  services: ServiceData[]
}

export default function HorizontalScrollableContainer({
  services,
}: HorizontalScrollableContainerProps) {
  return (
    <div className={clsx('w-full flex justify-center')}>
      <div
        className={clsx(
          'overflow-auto relative',
          'flex items-stretch',
          'pb-4'
        )}>
        {services.map((serviceProps, idx) => (
          <Service
            key={idx}
            number={idx + 1}
            {...serviceProps}
            className={clsx(
              'flex-shrink-0 w-[calc(100vw_-_theme(spacing.6)_*_2)]',
              `${idx === 0 ? 'ml-6' : ''} mr-4`
            )}
          />
        ))}
      </div>
    </div>
  )
}
