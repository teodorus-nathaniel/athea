import Bg from '#/assets/bg/home-bg.jpeg'
import BrandHeadline from '#/components/BrandHeadline'
import Container from '#/components/Container'
import Layout from '#/components/layouts/Layout'
import Button from '#/ui/Button'
import clsx from 'clsx'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout meta={{ title: 'Homepage' }}>
      <div className={clsx('w-full h-screen', 'text-white', 'flex flex-col')}>
        <Image
          src={Bg}
          alt='background'
          layout='fill'
          className={clsx('object-cover', 'absolute top-0 left-0')}
        />
        <Container
          className={clsx('flex-1 flex flex-col justify-center mb-12')}>
          <BrandHeadline className={clsx('mx-auto w-full')} />
          <div className='flex flex-col items-center'>
            <p className='font-light text-center mt-8 text-lg'>
              Not your typical agency. We are your next set of creative
              innovation experts.
            </p>
            <Button
              largeHorizontalPadding
              type='solid-white'
              className={clsx('mt-6', 'uppercase')}>
              Read More
            </Button>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Home
