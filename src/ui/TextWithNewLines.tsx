import React, { Fragment, HTMLProps } from 'react'

export interface TextWithNewLinesProps extends HTMLProps<HTMLParagraphElement> {
  children?: string
}

export default function TextWithNewLines({
  children,
  ...props
}: TextWithNewLinesProps) {
  return (
    <p {...props}>
      {children?.split('\n').map((text, idx) => (
        <Fragment key={idx}>
          <span>{text}</span>
          <br />
        </Fragment>
      ))}
    </p>
  )
}
