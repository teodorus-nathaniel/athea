import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
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
  leftText?: string
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
  leftText,
  ...ulProps
}: TabLayoutProps) {
  const mdUp = useBreakpointThreshold('md')

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
        'flex items-center',
        'overflow-auto w-full',
        'pb-4',
        className
      )}
      {...ulProps}>
      <li>
        <Text className={clsx(mdUp ? 'px-8' : 'pr-4')} serif bold>
          {leftText}
        </Text>
      </li>
      {tabs.map(({ title, additionalInfo, hash }, idx) => {
        const selected = idx === selectedTab
        return (
          <li key={title}>
            <Link
              className={clsx(
                'relative block',
                'py-1.5 mr-2',
                mdUp ? 'pl-6 pr-8' : 'pl-4 pr-6',
                'font-light',
                'transition ease-out',
                'whitespace-nowrap',
                'border rounded-full',
                'hover:border-gray-600',
                !selected ? 'border-transparent opacity-60' : '!border-white'
              )}
              noAnimation
              href={`#${encodeTab(hash ?? title)}`}
              onClick={() => {
                setSelectedTab(idx)
                onTabClick && onTabClick(idx)
              }}>
              <Text bold={selected}>{title}</Text>
              <Text
                bold={selected}
                className={clsx(
                  'absolute top-2',
                  mdUp ? 'right-7' : 'right-5',
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
