import Layout from '#/components/layouts/Layout'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import clsx from 'clsx'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const mdUp = useBreakpointThreshold('md')
  const desktopClassNames = clsx('pt-[56.25%]')
  const mobileClassNames = clsx('pt-[177.77%]')

  return (
    <Layout
      meta={{ title: 'Homepage' }}
      theme='dark'
      mobileFooter
      mobileFooterTitle='Contact Us'
      hasOffsetNavbar>
      <div
        className={clsx(
          'w-full relative',
          mdUp ? desktopClassNames : mobileClassNames
        )}>
        <video
          autoPlay
          muted
          src='/videos/home.mp4'
          className={clsx('absolute w-full h-full top-0 left-0')}
        />
      </div>
    </Layout>
  )
}

export default Home
