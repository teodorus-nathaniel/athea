import { themeClassNames, ThemeTypes } from '#/constants/theme'
import useHorizontalPadding from '#/helpers/hooks/useHorizontalPadding'
import Text from '#/ui/Text'
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
  const horizontalPadding = useHorizontalPadding()
  const titleClassName = clsx(
    'text-2xl uppercase',
    'tracking-widest',
    'pb-8 text-center',
    horizontalPadding
  )

  return (
    <div className={clsx(themeClassNames[theme])}>
      <Container
        {...divProps}
        className={clsx('flex flex-col items-center', 'pt-8 pb-16', className)}>
        {typeof title === 'string' ? (
          <Text as='h1' serif bold className={titleClassName}>
            {title}
          </Text>
        ) : (
          <div className={titleClassName}>{title}</div>
        )}
        {children}
      </Container>
    </div>
  )
}
