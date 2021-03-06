import { themeClassNames, ThemeTypes } from '#/constants/theme'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import Text from '#/ui/Text'
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
  navbarNoMixBlend?: boolean
  hasOffsetNavbar?: boolean
  mobileFooter?: boolean
  mobileFooterTitle?: string | JSX.Element | true
}

export default function Layout({
  meta,
  children,
  theme = 'dark',
  navbarNoMixBlend = true,
  hasOffsetNavbar = false,
  mobileFooter = false,
  mobileFooterTitle,
}: Props) {
  const mdUp = useBreakpointThreshold('md')
  const defaultTitle = (
    <>
      <Text serif bold>
        Contact{' '}
      </Text>
      <Text>Us</Text>
    </>
  )

  return (
    <div className='min-h-screen flex flex-col'>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.desc ?? 'Athea website page'} />
      </Head>
      <Navbar noMixBlend={navbarNoMixBlend} />
      <div
        className={clsx(
          themeClassNames[theme],
          hasOffsetNavbar ? 'pt-20' : ''
        )}>
        <div className={clsx(hasOffsetNavbar ? 'pt-2' : '')}>{children}</div>
      </div>
      {(mobileFooter || mdUp) && (
        <div className={clsx(themeClassNames[theme], 'mt-auto')}>
          <Footer
            theme={theme}
            title={
              mobileFooterTitle === true ? defaultTitle : mobileFooterTitle
            }
          />
        </div>
      )}
    </div>
  )
}
