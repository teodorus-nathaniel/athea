import clsx from 'clsx'
import React, { forwardRef, HTMLProps } from 'react'

const buttonTypes = {
  'solid-white': clsx(
    'bg-gray-100 text-black',
    'hover:bg-gray-300',
    'active:bg-gray-400'
  ),
  outline: clsx(
    'border border-gray-500 text-black',
    'hover:bg-gray-400 hover:text-gray-100',
    'active:bg-gray-500'
  ),
}

interface Props extends HTMLProps<HTMLButtonElement> {
  children: any
  className?: string
  type?: keyof typeof buttonTypes
  largeHorizontalPadding?: boolean
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    children,
    className,
    type = 'outline',
    largeHorizontalPadding = false,
    ...buttonProps
  },
  ref
) {
  const classNames = clsx(
    'flex justify-center items-center',
    `py-2 ${largeHorizontalPadding ? 'px-12' : 'px-6'}`,
    'rounded-full',
    'cursor-pointer',
    'transition-colors ease-out',
    'active:translate-y-px',
    'uppercase',
    buttonTypes[type],
    className
  )

  return (
    <button {...buttonProps} ref={ref} className={classNames}>
      {children}
    </button>
  )
})
export default Button
