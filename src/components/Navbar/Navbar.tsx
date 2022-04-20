import Logo from '#/assets/brand/logo.svg'
import Menu from '#/assets/icons/menu.svg'
import { NORMAL_TRANSITION } from '#/constants/transition'
import { lockScroll, unlockScroll } from '#/helpers/lock-scroll'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import NavbarContent from './NavbarContent'

export default function Navbar() {
  const [onTopPage, setOnTopPage] = useState(true)
  const [isOpenContent, setIsOpenContent] = useState(false)

  useEffect(() => {
    if (isOpenContent) lockScroll()
    else unlockScroll()
    return unlockScroll
  }, [isOpenContent])

  useEffect(() => {
    const scrollListener = () => {
      setOnTopPage(window.scrollY === 0)
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 w-full',
          'flex justify-end items-center',
          'px-6 py-6',
          'mix-blend-difference text-white',
          'z-30'
        )}>
        <AnimatePresence initial={false}>
          {(onTopPage || isOpenContent) && (
            <motion.div
              className='mr-auto'
              transition={NORMAL_TRANSITION}
              initial={{ opacity: 0, y: -25 }}
              exit={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}>
              <Logo height='1.3rem' />
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsOpenContent((prev) => !prev)}
          className={clsx(
            'flex items-center justify-center',
            'rounded-full',
            'w-10 h-10',
            'transition ease-out',
            'hover:scale-110'
          )}>
          <Menu height='1.2rem' />
        </button>
      </nav>
      <NavbarContent isOpen={isOpenContent} />
    </>
  )
}
