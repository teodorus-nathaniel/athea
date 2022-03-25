import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar'

type Props = {
  children: any
  meta: {
    title: string
    desc?: string
  }
}

export default function Layout({ meta, children }: Props) {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.desc ?? 'Athea website page'} />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}
