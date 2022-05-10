import { ProjectOverviewData } from '#/data/types'
import Text from '#/ui/Text'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {
  result: ProjectOverviewData
}

export default function SearchResult({ className, result, ...props }: Props) {
  return (
    <div
      className={clsx(
        'flex flex-col',
        'w-full py-4',
        'border-b border-gray-700',
        className
      )}
      {...props}>
      <Text as='p' className={clsx('text-2xl mb-1.5')}>
        <Text serif bold>
          {result.title}
        </Text>
        <Text> &middot; {result.titleDesc}</Text>
      </Text>
      <Text className={clsx('text-sm')}>{result.subtitle}</Text>
    </div>
  )
}
