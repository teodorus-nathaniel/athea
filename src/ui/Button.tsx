import clsx from 'clsx'
import React from 'react'

const buttonTypes = {
  'solid-white': clsx(
    'bg-gray-100 text-black',
    'hover:brightness-95',
    'active:brightness-75'
  ),
  outline: clsx(
    'border border-gray-500 text-black',
    'hover:bg-gray-500 hover:text-white'
  ),
}

type Props = {
  children: any
  className?: string
  type?: keyof typeof buttonTypes
}

export default function Button({
  children,
  className,
  type = 'outline',
}: Props) {
  const classNames = clsx(
    'flex justify-center items-center',
    'py-2 px-4',
    'rounded-full',
    'cursor-pointer',
    'transition ease-out',
    'active:translate-y-px',
    buttonTypes[type],
    className
  )

  return <button className={classNames}>{children}</button>
}
