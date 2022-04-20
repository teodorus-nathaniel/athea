import clsx from 'clsx'
import React, { HTMLProps } from 'react'

export default function Container({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx('container relative', 'mx-auto px-6', className)}
    />
  )
}
