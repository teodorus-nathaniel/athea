import useHorizontalPadding from '#/helpers/hooks/useHorizontalPadding'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

export default function Container({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  const horizontalPadding = useHorizontalPadding()
  return (
    <div
      {...props}
      className={clsx(
        'container relative 2xl:max-w-screen-xl',
        'mx-auto',
        horizontalPadding,
        className
      )}
    />
  )
}
