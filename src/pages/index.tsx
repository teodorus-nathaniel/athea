import Layout from '#/components/layouts/Layout'
import HeadlineSection from '#/components/sections/HeadlineSection'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout meta={{ title: 'Homepage' }}>
      <HeadlineSection
        subheading='Not your typical agency. We are your next set of creative innovation experts.'
        type='souls'
        ctaButton={{ text: 'Read More' }}
      />
    </Layout>
  )
}

export default Home
