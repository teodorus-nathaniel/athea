import AngleLeftIcon from '#/assets/icons/angle-left.svg'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import Link from '#/ui/Link'
import Text from '#/ui/Text'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, {
  HTMLProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

export interface TabData {
  title: string
  additionalInfo?: string | number
  hash?: string
}

export interface TabLayoutProps extends HTMLProps<HTMLDivElement> {
  tabs: TabData[]
  selectedTab: number
  withHashSave?: boolean
  leftText?: string
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>
  onTabClick?: (clickedIdx: number) => void
}

function encodeTab(tab: string) {
  return encodeURI(tab.replace(/ /g, '-').toLowerCase())
}
function decodeTab(encoded: string) {
  return decodeURI(encoded.replace(/-/g, ' '))
}

const arrowButtonAnimVariant = {
  show: { opacity: 1 },
  hide: { opacity: 0 },
}

export default function TabLayout({
  selectedTab,
  setSelectedTab,
  onTabClick,
  withHashSave,
  tabs,
  className,
  leftText,
  ...ulProps
}: TabLayoutProps) {
  const mdUp = useBreakpointThreshold('md')
  const scrollContainerRef = useRef<HTMLUListElement | null>(null)

  const [scrollPosition, setScrollPosition] = useState<
    'start' | 'middle' | 'end'
  >('start')

  const updateScrollPosition = useCallback(
    (scrollContainer: HTMLUListElement, deferredOffset?: number) => {
      const leftScrollOffset =
        scrollContainer.scrollLeft + (deferredOffset ?? 0)
      if (leftScrollOffset <= 0) {
        setScrollPosition('start')
      } else if (
        leftScrollOffset + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        setScrollPosition('end')
      } else {
        setScrollPosition('middle')
      }
    },
    []
  )

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer || !mdUp) return
    function scrollListener(e: WheelEvent) {
      e.preventDefault()
      if (!scrollContainer) return
      scrollContainer.scrollLeft += e.deltaY
      updateScrollPosition(scrollContainer)
    }
    scrollContainer.addEventListener('wheel', scrollListener)
    return () => {
      scrollContainer.removeEventListener('wheel', scrollListener)
    }
  }, [updateScrollPosition, mdUp])

  useEffect(() => {
    if (!withHashSave) return
    const currentHash = location.hash.substring(1)
    const decodedHash = decodeTab(currentHash)
    const currentTab = tabs.findIndex(
      ({ title, hash }) => (hash ?? title).toLowerCase() === decodedHash
    )
    if (currentTab !== -1) {
      setSelectedTab(currentTab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withHashSave])

  const arrowBtnClickListener = (dir: 'left' | 'right') => () => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return
    let offset = 150
    if (dir === 'left') offset *= -1
    updateScrollPosition(scrollContainer, offset)
    scrollContainer.scrollBy({ behavior: 'smooth', left: offset })
  }

  return (
    <div
      className={clsx(
        'flex items-stretch',
        'w-full max-w-full',
        'pb-4',
        className
      )}
      {...ulProps}>
      <div
        className={clsx(
          mdUp ? 'pl-8 pr-4' : 'pr-4',
          'py-1.5',
          'flex items-center'
        )}
        style={{
          background: 'linear-gradient(to right, black, transparent)',
        }}>
        <Text serif bold>
          {leftText}
        </Text>
      </div>
      <div className={clsx('flex-1', 'relative')}>
        <AnimatePresence>
          {scrollPosition !== 'start' && mdUp && (
            <motion.div
              variants={arrowButtonAnimVariant}
              initial='hide'
              exit='hide'
              animate='show'
              className={clsx(
                'flex items-center',
                'pr-8',
                'absolute h-[calc(100%_+_2px)]',
                'top-1/2 -translate-y-1/2 left-0 z-10'
              )}
              style={{
                background:
                  'linear-gradient(to right, black, black 50%, transparent)',
              }}>
              <ArrowButton onClick={arrowBtnClickListener('left')} dir='left' />
            </motion.div>
          )}
        </AnimatePresence>
        <ul
          ref={scrollContainerRef}
          className={clsx(
            'absolute',
            'flex items-stretch',
            'w-full',
            'overflow-auto',
            'hide-scrollbar'
          )}>
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
                    !selected
                      ? 'border-transparent opacity-60'
                      : '!border-white'
                  )}
                  noAnimation
                  href={withHashSave ? `#${encodeTab(hash ?? title)}` : ''}
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
        <AnimatePresence>
          {scrollPosition !== 'end' && mdUp && (
            <motion.div
              variants={arrowButtonAnimVariant}
              initial='hide'
              exit='hide'
              animate='show'
              className={clsx(
                'flex items-center',
                'pl-8',
                'absolute h-[calc(100%_+_2px)]',
                'top-1/2 -translate-y-1/2 right-0 z-10'
              )}
              style={{
                background:
                  'linear-gradient(to left, black, black 50%, transparent)',
              }}>
              <ArrowButton
                onClick={arrowBtnClickListener('right')}
                dir='right'
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function ArrowButton({
  dir,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & { dir: 'left' | 'right' }) {
  return (
    <div
      className={clsx(
        'rounded-full',
        'cursor-pointer',
        'p-2',
        'hover:shadow-sm hover:shadow-gray-500',
        'hover:scale-110 active:scale-105',
        className
      )}
      style={{ userSelect: 'none' }}
      {...props}>
      <AngleLeftIcon
        width='1.2em'
        className={clsx(
          dir === 'right' ? 'rotate-180' : '',
          'transition ease-out'
        )}
      />
    </div>
  )
}
