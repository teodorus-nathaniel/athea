import Headline from '#/assets/ui/headline.png'
import Layout from '#/components/layouts/Layout'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import clsx from 'clsx'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  const mdUp = useBreakpointThreshold('md')

  return (
    <Layout
      meta={{ title: 'Homepage' }}
      theme='dark'
      mobileFooter
      mobileFooterTitle
      navbarNoMixBlend>
      <div className={clsx('w-full h-screen relative mb-8')}>
        <video
          autoPlay
          muted
          loop
          src={`/videos/teaser${mdUp ? '' : '-portrait'}.mp4`}
          className={clsx(
            'absolute w-full h-full top-0 left-0',
            'object-cover'
          )}
        />
        <div
          className={clsx('absolute w-full h-full', 'bg-black opacity-30')}
        />
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
            'w-full max-w-screen-md px-12'
          )}>
          <Image
            layout='responsive'
            src={Headline}
            alt='A collective of passionate souls'
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
