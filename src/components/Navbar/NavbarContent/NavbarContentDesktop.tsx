import { NORMAL_TRANSITION } from '#/constants/transition'
import { TransitionVariants } from '#/helpers/types'
import Link from '#/ui/Link'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { NavbarContentChildProps } from './NavbarContent'

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
        x: (idx + 1) * -elementOffset,
      },
    }),
    [elementOffset]
  )
  const { pathname } = useRouter()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial='init'
          animate='open'
          exit='close'
          className={clsx(
            'mr-6 mt-8',
            'fixed top-0 right-0 z-30',
            'mix-blend-normal',
            'text-white',
            'flex items-center'
          )}>
          {links.map(({ href, text }, idx) => {
            return (
              <motion.div
                variants={generateContentVariants(idx)}
                key={text}
                className={clsx('absolute top-1/2')}
                transition={NORMAL_TRANSITION}>
                <Link
                  href={href}
                  className={clsx(
                    'text-xl uppercase font-bold',
                    'font-serif tracking-widest',
                    href === pathname ? 'text-white' : 'text-gray-500'
                  )}>
                  {text}
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
