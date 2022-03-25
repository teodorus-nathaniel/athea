import {
  NORMAL_TIME,
  NORMAL_TRANSITION,
  SLOW_TIME,
  SLOW_TRANSITION,
} from '#/constants/transition'
import { TransitionVariants } from '#/helpers/types'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

type Props = {
  isOpen: boolean
}

const contentVariants: TransitionVariants = {
  close: { opacity: 0, transition: { ...NORMAL_TRANSITION } },
  open: {
    opacity: 1,
    transition: {
      ...NORMAL_TRANSITION,
      delay: SLOW_TIME - NORMAL_TIME,
    },
  },
}

export default function NavbarContent({ isOpen }: Props) {
  return (
    <>
      <NavbarOverlay isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx(
              'fixed top-0 left-0',
              'pt-24 px-4 w-full',
              'z-20',
              'flex flex-col'
            )}
            variants={contentVariants}
            initial='close'
            animate='open'
            exit='close'>
            <input />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const overlayVariants: TransitionVariants = {
  close: { opacity: 0, y: -50 },
  open: { opacity: 1, y: 0 },
}
function NavbarOverlay({ isOpen }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          exit='close'
          animate='open'
          initial='close'
          transition={SLOW_TRANSITION}
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
