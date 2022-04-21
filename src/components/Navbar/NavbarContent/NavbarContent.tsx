import { NORMAL_TRANSITION } from '#/constants/transition'
import { TransitionVariants } from '#/helpers/types'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useMemo } from 'react'
import NavbarContentDesktop from './NavbarContentDesktop'
import NavbarContentMobile from './NavbarContentMobile'

export interface NavbarContentProps {
  isOpen: boolean
  type: 'desktop' | 'mobile'
}
export interface NavbarContentChildProps {
  isOpen: boolean
  links: { text: string; href: string }[]
}

const links = [
  { text: 'HOME', href: '/' },
  { text: 'WORKS', href: '/works' },
  { text: 'SERVICES', href: '/services' },
  { text: 'CONTACT', href: '/contact' },
]

export default function NavbarContent({ isOpen, type }: NavbarContentProps) {
  const isDesktop = type === 'desktop'

  let Component = null
  switch (type) {
    case 'desktop':
      Component = NavbarContentDesktop
      break
    case 'mobile':
      Component = NavbarContentMobile
      break
    default:
      Component = NavbarContentMobile
  }

  return (
    <>
      <NavbarOverlay isOpen={isOpen} opacity={isDesktop ? 0.85 : 1} />
      <Component isOpen={isOpen} links={links} />
    </>
  )
}

interface NavbarOverlayProps {
  isOpen: boolean
  opacity?: number
}
function NavbarOverlay({ isOpen, opacity = 1 }: NavbarOverlayProps) {
  const overlayVariants: TransitionVariants = useMemo(
    () => ({
      close: { opacity: 0 },
      open: { opacity },
    }),
    [opacity]
  )
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          exit='close'
          animate='open'
          initial='close'
          transition={NORMAL_TRANSITION}
          className={clsx(
            'fixed top-0 left-0',
            'w-full h-screen',
            'bg-black text-white',
            'z-20'
          )}
        />
      )}
    </AnimatePresence>
  )
}
