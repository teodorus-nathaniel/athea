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
  const elementOffset = Math.min(
    Math.max(window.innerWidth / links.length / 2, 135),
    200
  )
  const generateContentVariants = useCallback(
    (idx: number): TransitionVariants => ({
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
        x: (idx + 1) * -elementOffset + 50,
      },
    }),
    [elementOffset]
  )
  const { pathname } = useRouter()

  const reversedLinks = useMemo(() => {
    const linksCopy = [...links]
    linksCopy.reverse()
    return linksCopy
  }, [links])

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
            'text-white',
            'flex items-center'
          )}>
          {reversedLinks.map(({ href, text }, idx) => {
            return (
              <motion.div
                variants={generateContentVariants(idx)}
                key={text}
                className={clsx('nav-link', 'absolute top-1/2 right-0')}
                transition={NORMAL_TRANSITION}>
                <NavbarLink
                  href={href}
                  isActive={href === pathname}
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
