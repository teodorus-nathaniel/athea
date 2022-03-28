import Layout from '#/components/layouts/Layout'
import ProjectOverviewList from '#/components/ProjectOverviewList'
import HeadlineSection from '#/components/sections/HeadlineSection'
import SectionWrapper from '#/components/sections/SectionWrapper'
import TabLayout, { TabData } from '#/components/TabLayout'
import recentWorks from '#/data/recent-works'
import clsx from 'clsx'
import type { NextPage } from 'next'
import { useState } from 'react'

const tabs: TabData[] = [
  { title: 'View All', additionalInfo: 50 },
  { title: 'Music Video', additionalInfo: 23 },
  { title: 'Digital Commerce', additionalInfo: 34 },
  { title: 'Branding', additionalInfo: 10 },
  { title: 'Corporatge Video', additionalInfo: 10 },
]

const Home: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <Layout meta={{ title: 'Homepage' }}>
      <HeadlineSection
        subheading='Every project is a chance to try something new. Look at something with a fresh perspective. Do something for the first time.'
        type='projects'
        noBgImage
      />
      <SectionWrapper title='Our Works' theme='dark'>
        <TabLayout
          className={clsx('mb-4')}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabs={tabs}
        />
        <ProjectOverviewList projects={recentWorks} />
      </SectionWrapper>
    </Layout>
  )
}

export default Home
