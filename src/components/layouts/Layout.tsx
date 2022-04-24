import { themeClassNames, ThemeTypes } from '#/constants/theme'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import clsx from 'clsx'
import Head from 'next/head'
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

type Props = {
  children: any
  theme?: ThemeTypes
  meta: {
    title: string
    desc?: string
  }
  hasOffsetNavbar?: boolean
  mobileFooter?: boolean
  mobileFooterTitle?: string
}

export default function Layout({
  meta,
  children,
  theme = 'light',
  hasOffsetNavbar = false,
  mobileFooter = false,
  mobileFooterTitle,
}: Props) {
  const mdUp = useBreakpointThreshold('md')

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
      {(mobileFooter || mdUp) && (
        <div className={clsx(themeClassNames[theme])}>
          <Footer theme={theme} title={mobileFooterTitle} />
        </div>
      )}
    </div>
  )
}
