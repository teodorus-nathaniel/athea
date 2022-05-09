import { NORMAL_TRANSITION } from '#/constants/transition'
import { TransitionVariants } from '#/helpers/types'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'
import { NavbarContentChildProps } from './NavbarContent'
import NavbarLink from './NavbarLink'

const containerVariants: TransitionVariants = {
  init: { opacity: 0 },
  close: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export default function NavbarContentDesktop({
  isOpen,
  links,
}: NavbarContentChildProps) {
  const reversedLinks = useMemo(() => {
    const linksCopy = [...links]
    linksCopy.reverse()
    return linksCopy
  }, [links])

  const charactersOffset = useMemo(() => {
    const OFFSET_PER_CHARACTER = 8
    const offsets: number[] = []
    let sum = 25
    reversedLinks.forEach(({ text }) => {
      offsets.push(sum)
      sum += text.length * OFFSET_PER_CHARACTER
    })
    return offsets
  }, [reversedLinks])

  const generateContentVariants = useCallback(
    (idx: number): TransitionVariants => {
      const maxCharOffset = charactersOffset[charactersOffset.length - 1]
      const windowWidth = window.innerWidth - maxCharOffset - 50
      const elementOffset = Math.min(
        Math.max(windowWidth / links.length / 2, 80),
        150
      )
      let offset = charactersOffset[idx]

      return {
        init: {
          opacity: 0,
          x: idx * -elementOffset,
        },
        close: {
          opacity: 0,
          x: (idx + 1) * -elementOffset + elementOffset / 2,
        },
        open: {
          opacity: 1,
          x: (idx + 1) * -elementOffset + 50 - offset,
        },
      }
    },
    [links, charactersOffset]
  )
  const { pathname } = useRouter()

  const toggleNavClick = (status: 'disable' | 'enable') => {
    const navLinks = document.getElementsByClassName('nav-link')
    Array.from(navLinks).forEach((link) => {
      const castedLink = link as HTMLAnchorElement
      castedLink.style.pointerEvents = status === 'disable' ? 'none' : 'auto'
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial='init'
          animate='open'
          exit='close'
          onAnimationComplete={() => toggleNavClick('enable')}
          onAnimationStart={() => toggleNavClick('disable')}
          className={clsx(
            'mr-6 mt-8',
            'fixed top-0 right-0 z-30',
            'text-gray-100',
            'flex items-center'
          )}>
          {reversedLinks.map(({ href, text }, idx) => {
            const isActive = href === pathname
            return (
              <motion.div
                variants={generateContentVariants(idx)}
                key={text}
                className={clsx('nav-link', 'absolute top-1/2 right-0')}
                transition={NORMAL_TRANSITION}>
                <NavbarLink
                  className={clsx('text-lg')}
                  style={{ top: isActive ? '-1px' : '' }}
                  href={href}
                  isActive={isActive}
                  text={text}
                />
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
