import Link from '#/ui/Link'
import Text from '#/ui/Text'
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
      className={clsx(
        'flex items-end',
        'overflow-auto w-full',
        'pb-4',
        className
      )}
      {...ulProps}>
      {tabs.map(({ title, additionalInfo, hash }, idx) => {
        const selected = idx === selectedTab
        return (
          <li key={title}>
            <Link
              className={clsx(
                'relative block',
                'py-1.5 mr-2 pl-4 pr-6',
                'tracking-wider font-light',
                'transition ease-out',
                'whitespace-nowrap',
                'border rounded-full',
                'hover:border-gray-600',
                !selected ? 'border-transparent' : '!border-white font-normal'
              )}
              noAnimation
              href={`#${encodeTab(hash ?? title)}`}
              onClick={() => {
                setSelectedTab(idx)
                onTabClick && onTabClick(idx)
              }}>
              {title}
              <Text
                className={clsx(
                  'absolute top-2 right-5',
                  'translate-x-full',
                  'text-xs'
                )}>
                {additionalInfo}
              </Text>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
