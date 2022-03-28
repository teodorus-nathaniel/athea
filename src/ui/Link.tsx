import clsx from 'clsx'
import React, { forwardRef, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLAnchorElement> {}

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { className, ...anchorProps },
  ref
) {
  return (
    <a
      {...anchorProps}
      ref={ref}
      className={clsx(
        'relative cursor-pointer',
        'after:transition after:ease-out after:origin-left',
        'after:absolute after:-bottom-1 after:left-0',
        'after:h-0.5 after:w-full after:bg-white',
        'after:scale-x-0 after:opacity-0',
        'hover:after:scale-x-100 hover:after:opacity-100',
        'focus:after:scale-x-100 focus:after:opacity-100',
        'active:text-gray-400 active:after:bg-gray-400',
        className
      )}
    />
  )
})
export default Link
