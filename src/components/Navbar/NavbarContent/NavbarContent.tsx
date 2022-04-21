import { FAST_TRANSITION } from '#/constants/transition'
import { TransitionVariants } from '#/helpers/types'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useMemo } from 'react'
import NavbarContentMobile from './NavbarContentMobile'

export interface NavbarContentProps {
  isOpen: boolean
}

export default function NavbarContent(props: NavbarContentProps) {
  return (
    <>
      <NavbarOverlay isOpen={props.isOpen} />
      <NavbarContentMobile {...props} />
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
          transition={FAST_TRANSITION}
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
