import { themeClassNames, ThemeTypes } from '#/constants/theme'
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
}

export default function Layout({ meta, children, theme = 'light' }: Props) {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.desc ?? 'Athea website page'} />
      </Head>
      <Navbar />
      <div className={themeClassNames[theme]}>{children}</div>
    </div>
  )
}
