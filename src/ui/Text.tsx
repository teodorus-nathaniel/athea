import clsx from 'clsx'
import React, { Fragment, HTMLProps } from 'react'

export interface TextProps extends HTMLProps<HTMLParagraphElement> {
  children?: any
  bold?: boolean
  serif?: boolean
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const boldMapper = {
  serif: {
    yes: clsx('font-bold'),
    no: clsx('font-normal'),
  },
  sans: {
    yes: clsx('font-normal'),
    no: clsx('font-light'),
  },
}

export default function Text({
  children,
  serif = false,
  bold = false,
  as: As = 'span',
  className,
  ...props
}: TextProps) {
  const isBoldString = bold ? 'yes' : 'no'
  const isSerifString = serif ? 'serif' : 'sans'
  const serifClassName = serif ? clsx('font-serif') : clsx('font-sans')
  return (
    <As
      className={clsx(className, boldMapper[isSerifString][isBoldString])}
      {...props}>
      {typeof children === 'string' ? (
        children?.split('\n').map((text, idx, array) => (
          <Fragment key={idx}>
            <span className={serifClassName}>{text}</span>
            {idx < array.length - 1 && <br />}
          </Fragment>
        ))
      ) : (
        <span className={serifClassName}>{children}</span>
      )}
    </As>
  )
}
