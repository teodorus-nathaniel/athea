import ArrowLinkIcon from '#/assets/icons/arrow-link.svg'
import Link from '#/ui/Link'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {
  theme?: 'light' | 'dark'
}

const contactLinks = [
  { text: 'naphtali@atheavisuals.com', href: '/' },
  { text: '+62 817 9222 220', href: '/' },
]

export default function Contact({
  className,
  theme = 'light',
  ...divProps
}: Props) {
  return (
    <div
      className={clsx(
        'flex flex-col',
        theme === 'light' ? 'text-black' : 'text-white',
        className
      )}
      {...divProps}>
      <p className='font-light font-serif text-sm mb-2'>
        Let{"'"}s have a good talk through
      </p>
      {contactLinks.map(({ href, text }) => (
        <div key={text} className={clsx('mb-6')}>
          <Link
            href={href}
            className={clsx(
              'flex justify-between items-center',
              'text-lg',
              'before:absolute before:bg-gray-400 before:-bottom-1 before:left-0',
              theme === 'dark' ? 'before:bg-gray-600' : 'before:bg-gray-400',
              'before:h-0.5 before:w-full'
            )}>
            {text}
            <ArrowLinkIcon height='1rem' />
          </Link>
        </div>
      ))}
    </div>
  )
}
