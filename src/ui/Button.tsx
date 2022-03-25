import clsx from 'clsx'
import React, { HTMLProps } from 'react'

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

interface Props extends HTMLProps<HTMLButtonElement> {
  children: any
  className?: string
  type?: keyof typeof buttonTypes
}

export default function Button({
  children,
  className,
  type = 'outline',
  ...buttonProps
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

  return (
    <button {...buttonProps} className={classNames}>
      {children}
    </button>
  )
}
