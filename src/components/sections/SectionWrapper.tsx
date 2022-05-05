import { themeClassNames, ThemeTypes } from '#/constants/theme'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import Container from '../Container'

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'title'> {
  title?: string | JSX.Element
  theme?: ThemeTypes
}

export default function SectionWrapper({
  title,
  className,
  children,
  theme = 'dark',
  ...divProps
}: Props) {
  return (
    <div className={clsx(themeClassNames[theme])}>
      <Container
        {...divProps}
        className={clsx('flex flex-col items-center', 'pt-8 pb-16', className)}>
        {title && (
          <h1
            className={clsx(
              'text-2xl font-bold uppercase',
              'font-serif tracking-widest',
              'pb-8 px-6 text-center'
            )}>
            {title}
          </h1>
        )}
        {children}
      </Container>
    </div>
  )
}
