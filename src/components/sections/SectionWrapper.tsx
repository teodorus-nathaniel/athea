import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import Container from '../Container'

interface Props extends HTMLProps<HTMLDivElement> {
  title: string
}

export default function SectionWrapper({
  title,
  className,
  children,
  ...divProps
}: Props) {
  return (
    <Container
      {...divProps}
      className={clsx('flex flex-col items-center', 'py-8', className)}>
      <h1 className={clsx('text-2xl font-bold uppercase font-serif', 'pb-10')}>
        {title}
      </h1>
      {children}
    </Container>
  )
}
