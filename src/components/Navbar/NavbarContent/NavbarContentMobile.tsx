import SearchIcon from '#/assets/icons/search.svg'
import Contact from '#/components/Contact'
import { NORMAL_TRANSITION } from '#/constants/transition'
import { TransitionVariants } from '#/helpers/types'
import Input from '#/ui/Input'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React from 'react'
import { NavbarContentChildProps } from './NavbarContent'
import NavbarLink from './NavbarLink'

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

export default function NavbarContentMobile({
  isOpen,
  links,
}: NavbarContentChildProps) {
  const { pathname } = useRouter()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={clsx(
            'fixed top-0 left-0',
            'pt-24 pb-8 px-6 w-full min-h-screen',
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
              <NavbarLink
                href={href}
                isActive={href === pathname}
                text={text}
              />
            </motion.div>
          ))}
          <motion.div variants={contentVariants} className={clsx('mt-auto')}>
            <Contact theme='dark' />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
