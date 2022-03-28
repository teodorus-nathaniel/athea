import clsx from 'clsx'
import RouterLink from 'next/link'
import React, { forwardRef, HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLAnchorElement> {
  noAnimation?: boolean
}

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { className, href = '', noAnimation, ...anchorProps },
  ref
) {
  return (
    <RouterLink href={href} passHref>
      <a
        {...anchorProps}
        ref={ref}
        className={clsx(
          'relative cursor-pointer',
          'after:transition after:ease-out after:origin-left',
          'after:absolute after:-bottom-1 after:left-0',
          'after:h-0.5 after:w-full after:bg-current',
          'after:scale-x-0 after:opacity-0',
          !noAnimation ? 'hover:after:scale-x-100 hover:after:opacity-100' : '',
          !noAnimation ? 'focus:after:scale-x-100 focus:after:opacity-100' : '',
          'active:text-gray-400 active:after:bg-gray-400',
          className
        )}
      />
    </RouterLink>
  )
})
export default Link
