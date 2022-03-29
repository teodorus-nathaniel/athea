import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import Container from '../Container'

interface Props extends HTMLProps<HTMLDivElement> {
  title: string
  theme?: 'light' | 'dark'
}

export default function SectionWrapper({
  title,
  className,
  children,
  theme = 'light',
  ...divProps
}: Props) {
  return (
    <div
      className={clsx(
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      )}>
      <Container
        {...divProps}
        className={clsx('flex flex-col items-center', 'pt-8 pb-16', className)}>
        <h1 className={clsx('text-2xl font-bold uppercase font-serif', 'pb-8')}>
          {title}
        </h1>
        {children}
      </Container>
    </div>
  )
}
