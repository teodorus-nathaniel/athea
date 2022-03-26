import Layout from '#/components/layouts/Layout'
import HeadlineSection from '#/components/sections/HeadlineSection'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout meta={{ title: 'Homepage' }}>
      <HeadlineSection
        subheading='Every project is a chance to try something new. Look at something with a fresh perspective. Do something for the first time.'
        type='projects'
      />
    </Layout>
  )
}

export default Home
