import { themeClassNames, ThemeTypes } from '#/constants/theme'
import clsx from 'clsx'
import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar'

type Props = {
  children: any
  theme?: ThemeTypes
  meta: {
    title: string
    desc?: string
  }
  hasOffsetNavbar?: boolean
}

export default function Layout({
  meta,
  children,
  theme = 'light',
  hasOffsetNavbar = false,
}: Props) {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.desc ?? 'Athea website page'} />
      </Head>
      <Navbar />
      <div
        className={clsx(
          themeClassNames[theme],
          hasOffsetNavbar ? 'pt-20' : '',
          'min-h-screen'
        )}>
        {children}
      </div>
    </div>
  )
}
