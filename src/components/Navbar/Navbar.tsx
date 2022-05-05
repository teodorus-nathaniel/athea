import Logo from '#/assets/brand/logo.svg'
import Menu from '#/assets/icons/menu.svg'
import { NORMAL_TRANSITION } from '#/constants/transition'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import useHorizontalPadding from '#/helpers/hooks/useHorizontalPadding'
import { lockScroll, unlockScroll } from '#/helpers/lock-scroll'
import Link from '#/ui/Link'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import NavbarContent from './NavbarContent'

interface NavbarProps {
  noMixBlend: boolean
}

export default function Navbar({ noMixBlend = false }: NavbarProps) {
  const mdUp = useBreakpointThreshold('md')
  const horizontalPadding = useHorizontalPadding()

  const lastScrollUp = useRef(0)
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [isOpenContent, setIsOpenContent] = useState(false)

  const menuButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (isOpenContent) lockScroll()
    else unlockScroll()
    return unlockScroll
  }, [isOpenContent])

  useEffect(() => {
    const scrollListener = () => {
      setIsScrollingUp(window.scrollY < lastScrollUp.current)
      lastScrollUp.current = window.scrollY
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  const logoSize = '1.5rem'

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 w-full',
          'flex justify-end items-center',
          'py-6',
          horizontalPadding,
          'text-white',
          noMixBlend ? '' : 'mix-blend-difference',
          'z-30'
        )}>
        <AnimatePresence initial={false}>
          {(isScrollingUp || isOpenContent) && (
            <motion.div
              className={clsx(
                'mr-auto flex justify-between items-center',
                'w-full relative'
              )}
              transition={NORMAL_TRANSITION}
              initial={{ opacity: 0, y: -25 }}
              exit={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}>
              <Link href='/' noAnimation>
                <Logo height={logoSize} className='z-40 text-white' />
              </Link>
              <button
                ref={menuButtonRef}
                onClick={() => setIsOpenContent((prev) => !prev)}
                className={clsx(
                  'flex items-center justify-center',
                  'rounded-full',
                  'w-10 h-10 z-40',
                  'transition ease-out',
                  'hover:scale-110'
                )}>
                <Menu height={logoSize} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <NavbarContent
        closeContent={() => setIsOpenContent(false)}
        type={mdUp ? 'desktop' : 'mobile'}
        isOpen={isOpenContent}
      />
    </>
  )
}
