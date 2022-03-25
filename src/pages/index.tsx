import Bg from '#/assets/bg/home-bg.jpeg'
import Layout from '#/components/layouts/Layout'
import Button from '#/ui/Button'
import clsx from 'clsx'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout meta={{ title: 'Homepage' }}>
      <div className={clsx('w-full h-screen')}>
        <Image
          src={Bg}
          alt='background'
          layout='fill'
          className={clsx('object-cover', 'absolute top-0 left-0')}
        />
      </div>
      <div className={clsx('w-full h-screen')}>
        <p>asdfsadsdf</p>
        <Button>asdfasdfdaf</Button>
        <div className='bg-black'>
          <Button type='solid-white'>asdfasdfdaf</Button>
        </div>
      </div>
    </Layout>
  )
}

export default Home
