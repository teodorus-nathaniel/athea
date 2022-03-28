import clsx from 'clsx'
import React, { HTMLProps } from 'react'

export interface TabData {
  title: string
  additionalInfo?: string | number
}

export interface TabLayoutProps extends HTMLProps<HTMLUListElement> {
  tabs: TabData[]
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
}

export default function TabLayout({
  selectedTab,
  setSelectedTab,
  tabs,
  className,
  ...ulProps
}: TabLayoutProps) {
  return (
    <ul
      className={clsx('flex items-end', 'overflow-auto w-full', className)}
      {...ulProps}>
      {tabs.map(({ title, additionalInfo }, idx) => {
        const selected = idx === selectedTab
        return (
          <li
            className={clsx(
              'relative',
              'mr-6 py-4',
              'tracking-wider font-light',
              'whitespace-nowrap',
              'before:absolute before:bottom-2 before:left-0 before:bg-current',
              'before:w-full before:h-0.5',
              'transition-transform ease-out',
              !selected
                ? 'before:opacity-0 before:scale-x-0 brightness-50'
                : 'before:opacity-100 before:scale-x-100'
            )}
            key={title}>
            {title}
            <span
              className={clsx(
                'absolute top-2 right-0',
                'translate-x-full',
                'text-xs'
              )}>
              {additionalInfo}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
