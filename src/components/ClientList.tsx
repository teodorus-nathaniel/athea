import { ClientData } from '#/data/types'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

interface ClientListProps extends HTMLProps<HTMLDivElement> {
  clients: ClientData[]
}

export default function ClientList({ clients }: ClientListProps) {
  return (
    <div
      className={clsx(
        'w-full px-2',
        'grid gap-8 grid-cols-[repeat(3,_minmax(0,_100px))]',
        'justify-items-center justify-center items-center'
      )}>
      {clients.map(({ image: ImageELement, alt }, idx) => (
        <ImageELement key={idx} />
      ))}
    </div>
  )
}
