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
  closeContent: () => void
}
export interface NavbarContentChildProps {
  isOpen: boolean
  links: { text: string; href: string }[]
}

export const links = [
  { text: 'HOME', href: '/' },
  { text: 'OUR WORKS', href: '/works' },
  { text: 'OUR SERVICES', href: '/services' },
]

export default function NavbarContent({
  isOpen,
  type,
  closeContent,
}: NavbarContentProps) {
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
      <NavbarOverlay
        closeContent={closeContent}
        isOpen={isOpen}
        opacity={isDesktop ? 0.85 : 1}
      />
      <Component isOpen={isOpen} links={links} />
    </>
  )
}

interface NavbarOverlayProps {
  isOpen: boolean
  opacity?: number
  closeContent: () => void
}
function NavbarOverlay({
  isOpen,
  opacity = 1,
  closeContent,
}: NavbarOverlayProps) {
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
          onClick={closeContent}
          variants={overlayVariants}
          exit='close'
          animate='open'
          initial='close'
          transition={NORMAL_TRANSITION}
          className={clsx(
            'fixed top-0 left-0',
            'w-full h-screen',
            'bg-black text-gray-50',
            'z-20'
          )}
        />
      )}
    </AnimatePresence>
  )
}
