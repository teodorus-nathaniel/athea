import Link from '#/ui/Link'
import clsx from 'clsx'
import React, { HTMLProps, useEffect } from 'react'

export interface TabData {
  title: string
  additionalInfo?: string | number
  hash?: string
}

export interface TabLayoutProps extends HTMLProps<HTMLUListElement> {
  tabs: TabData[]
  selectedTab: number
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
  onTabClick?: (clickedIdx: number) => void
}

function encodeTab(tab: string) {
  return encodeURI(tab.toLowerCase())
}
function decodeTab(encoded: string) {
  return decodeURI(encoded)
}

export default function TabLayout({
  selectedTab,
  setSelectedTab,
  onTabClick,
  tabs,
  className,
  ...ulProps
}: TabLayoutProps) {
  useEffect(() => {
    const currentHash = location.hash.substring(1)
    const decodedHash = decodeTab(currentHash)
    const currentTab = tabs.findIndex(
      ({ title, hash }) => encodeTab(hash ?? title) === decodedHash
    )
    if (currentTab !== -1) {
      setSelectedTab(currentTab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ul
      className={clsx('flex items-end', 'overflow-auto w-full', className)}
      {...ulProps}>
      {tabs.map(({ title, additionalInfo, hash }, idx, array) => {
        const selected = idx === selectedTab
        return (
          <li key={title}>
            <Link
              className={clsx(
                'relative block',
                `${idx < array.length - 1 ? 'mr-8' : ''} py-4`,
                'tracking-wider font-light',
                'transition ease-out',
                'before:transition-transform before:ease-out',
                'whitespace-nowrap',
                'before:absolute before:bottom-2 before:left-0 before:bg-current',
                'before:w-full before:h-0.5',
                'hover:brightness-100',
                !selected
                  ? 'before:opacity-0 before:scale-x-0 brightness-50'
                  : 'before:opacity-100 before:scale-x-100'
              )}
              noAnimation
              href={`#${encodeTab(hash ?? title)}`}
              onClick={() => {
                setSelectedTab(idx)
                onTabClick && onTabClick(idx)
              }}>
              {title}
              <span
                className={clsx(
                  'absolute top-4 -right-1',
                  'translate-x-full',
                  'text-xs'
                )}>
                {additionalInfo}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
