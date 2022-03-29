import React, { HTMLProps } from 'react'

export interface TextWithNewLinesProps extends HTMLProps<HTMLParagraphElement> {
  children?: string
}

export default function TextWithNewLines({
  children,
  ...props
}: TextWithNewLinesProps) {
  return (
    <p {...props}>
      {children?.split('\n').map((text) => (
        <>
          <span>{text}</span>
          <br />
        </>
      ))}
    </p>
  )
}
