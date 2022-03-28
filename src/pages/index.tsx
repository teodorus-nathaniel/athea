import Layout from '#/components/layouts/Layout'
import ProjectOverviewList from '#/components/ProjectOverviewList'
import HeadlineSection from '#/components/sections/HeadlineSection'
import SectionWrapper from '#/components/sections/SectionWrapper'
import recentWorks from '#/data/recent-works'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout meta={{ title: 'Homepage' }}>
      <HeadlineSection
        subheading='Not your typical agency. We are your next set of creative innovation experts.'
        type='souls'
        ctaButton={{ text: 'Read More' }}
      />
      <SectionWrapper title='Recent Works'>
        <ProjectOverviewList projects={recentWorks} />
      </SectionWrapper>
    </Layout>
  )
}

export default Home
