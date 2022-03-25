import clsx from 'clsx'
import React, { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string
  containerClassName?: string
  label?: string
  leftIcon?: (props: { height: any }) => JSX.Element
}

export default function Input({
  label,
  leftIcon: LeftIcon,
  containerClassName,
  className,
  ...inputProps
}: Props) {
  return (
    <div className={clsx('flex flex-col w-full', containerClassName)}>
      {label && (
        <label
          htmlFor={inputProps.name}
          className={clsx(
            'block',
            'mb-1',
            'text-sm font-medium text-gray-700'
          )}>
          {label}
        </label>
      )}
      <div className='relative rounded-md'>
        {LeftIcon && (
          <div className='absolute inset-y-0 -top-px left-0 pl-3 flex items-center pointer-events-none'>
            {<LeftIcon height='1em' />}
          </div>
        )}
        <input
          id={inputProps.name}
          {...inputProps}
          className={clsx(
            'bg-white',
            'hover:bg-gray-200',
            'focus:ring-blue-500 focus:ring-2 focus:outline-none',
            'rounded-md',
            'transition ease-out',
            'block w-full',
            `${LeftIcon ? 'pl-9' : 'pl-4'} pr-12 py-2`,
            className
          )}
        />
      </div>
    </div>
  )
}
