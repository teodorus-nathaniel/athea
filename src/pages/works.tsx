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
        subheading='Every project is a chance to try something new. Look at something with a fresh perspective. Do something for the first time.'
        type='projects'
        noBgImage
      />
      <SectionWrapper title='Our Works' theme='dark'>
        <ProjectOverviewList projects={recentWorks} />
      </SectionWrapper>
    </Layout>
  )
}

export default Home
