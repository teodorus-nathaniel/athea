import Headline from '#/assets/ui/headline.png'
import Layout from '#/components/layouts/Layout'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import clsx from 'clsx'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const mdUp = useBreakpointThreshold('md')
  const videoName = `/videos/teaser${mdUp ? '' : '-portrait'}`

  return (
    <Layout
      meta={{ title: 'Homepage' }}
      theme='dark'
      mobileFooter
      mobileFooterTitle
    >
      <div className={clsx('w-full h-screen relative mb-8')}>
        <video
          playsInline
          autoPlay
          muted
          loop
          className={clsx(
            'absolute w-full h-full top-0 left-0',
            'object-cover'
          )}
        >
          <source src={`${videoName}.webm`} type='video/webm' />
          <source src={`${videoName}.mp4`} type='video/mp4' />
        </video>
        <div
          className={clsx('absolute w-full h-full', 'bg-black opacity-30')}
        />
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
            'w-full max-w-screen-lg px-12'
          )}
        >
          <img
            className='w-full'
            src={Headline.src}
            alt='A collective of passionate souls'
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
