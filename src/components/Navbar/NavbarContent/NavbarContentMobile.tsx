import SearchIcon from '#/assets/icons/search.svg'
import Contact from '#/components/Contact'
import { NORMAL_TRANSITION } from '#/constants/transition'
import { projects } from '#/data/projects'
import useHorizontalPadding from '#/helpers/hooks/useHorizontalPadding'
import { TransitionVariants } from '#/helpers/types'
import Input from '#/ui/Input'
import Link from '#/ui/Link'
import Text from '#/ui/Text'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { NavbarContentChildProps } from './NavbarContent'
import NavbarLink from './NavbarLink'
import SearchResult from './SearchResult'

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

const searchResultVariants: TransitionVariants = {
  close: { opacity: 0, x: -25, transition: NORMAL_TRANSITION },
  open: { opacity: 1, x: 0, transition: NORMAL_TRANSITION },
}

export default function NavbarContentMobile({
  isOpen,
  links,
}: NavbarContentChildProps) {
  const { pathname } = useRouter()
  const horizontalPadding = useHorizontalPadding()
  const [isSearchFocus, setIsSearchFocus] = useState(false)

  const [search, setSearch] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const recentProjects = projects.slice(0, 3)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={clsx(
            'fixed top-0 left-0',
            'pt-24 pb-8 w-full h-screen',
            horizontalPadding,
            'overflow-auto',
            'z-20',
            'flex flex-col',
            'text-gray-100'
          )}
          transition={NORMAL_TRANSITION}
          variants={containerVariants}
          initial='close'
          animate='open'
          exit='close'>
          <motion.form
            onSubmit={handleSubmit}
            variants={contentVariants}
            className={clsx('text-black', 'mb-4')}>
            <Input
              value={search}
              onFocus={() => setIsSearchFocus(true)}
              onBlur={() => setIsSearchFocus(false)}
              onChange={(e: any) => setSearch(e.target.value)}
              leftIcon={SearchIcon}
              containerClassName={clsx('text-lg')}
              className={clsx('font-light')}
              placeholder='Search here'
            />
          </motion.form>
          {search || isSearchFocus ? (
            <>
              {!search && (
                <Text
                  className={clsx(
                    'text-sm',
                    'uppercase',
                    'text-gray-400',
                    'mt-2'
                  )}>
                  Recent Update
                </Text>
              )}
              {recentProjects.map((project, idx) => (
                <motion.div variants={searchResultVariants} key={idx}>
                  <Link noAnimation href='/detail'>
                    <SearchResult result={project} />
                  </Link>
                </motion.div>
              ))}
            </>
          ) : (
            <>
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
              <motion.div
                variants={contentVariants}
                className={clsx('mt-auto')}>
                <Contact theme='dark' />
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
