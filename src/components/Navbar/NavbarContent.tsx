import SearchIcon from '#/assets/icons/search.svg'
import { FAST_TRANSITION, NORMAL_TRANSITION } from '#/constants/transition'
import { TransitionVariants } from '#/helpers/types'
import Input from '#/ui/Input'
import Link from '#/ui/Link'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import Contact from '../Contact'

type Props = {
  isOpen: boolean
}

const containerVariants: TransitionVariants = {
  close: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}
const contentVariants: TransitionVariants = {
  close: { opacity: 0, y: -25, transition: NORMAL_TRANSITION },
  open: { opacity: 1, y: 0, transition: NORMAL_TRANSITION },
}

const links = [
  { text: 'HOME', href: '/' },
  { text: 'WORKS', href: '/works' },
  { text: 'SERVICES', href: '/services' },
  { text: 'CONTACT', href: '/contact' },
]

export default function NavbarContent({ isOpen }: Props) {
  const { pathname } = useRouter()

  return (
    <>
      <NavbarOverlay isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={clsx(
              'fixed top-0 left-0',
              'pt-24 pb-8 px-4 w-full min-h-screen',
              'overflow-auto',
              'z-20',
              'flex flex-col',
              'text-white'
            )}
            transition={NORMAL_TRANSITION}
            variants={containerVariants}
            initial='close'
            animate='open'
            exit='close'>
            <motion.form
              onSubmit={(e) => e.preventDefault()}
              variants={contentVariants}
              className={clsx('text-black')}>
              <Input
                leftIcon={SearchIcon}
                containerClassName={clsx('mb-4')}
                placeholder='Search here'
              />
            </motion.form>
            {links.map(({ href, text }) => (
              <motion.div
                variants={contentVariants}
                key={text}
                className={clsx('mt-8')}>
                <Link
                  className={clsx(
                    'text-xl uppercase font-bold',
                    'font-serif tracking-widest',
                    href === pathname ? 'text-white' : 'text-gray-500'
                  )}>
                  {text}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={contentVariants} className={clsx('mt-auto')}>
              <Contact theme='dark' />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const overlayVariants: TransitionVariants = {
  close: { opacity: 0 },
  open: { opacity: 1 },
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
