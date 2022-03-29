import Contact from '#/components/Contact'
import Layout from '#/components/layouts/Layout'
import ProjectOverviewList from '#/components/ProjectOverviewList'
import SectionWrapper from '#/components/sections/SectionWrapper'
import ServiceList from '#/components/ServiceList'
import recentWorks from '#/data/recent-works'
import services from '#/data/services'
import Button from '#/ui/Button'
import clsx from 'clsx'
import type { NextPage } from 'next'

const Detail: NextPage = () => {
  return (
    <Layout theme='dark' meta={{ title: 'Detail' }}>
      <SectionWrapper title='Recent Works'>
        <ProjectOverviewList projects={recentWorks} />
        <Button className={clsx('mt-8')}>Discover More</Button>
      </SectionWrapper>
      <SectionWrapper className='px-0' title='Our Services'>
        <ServiceList services={services} />
      </SectionWrapper>
      <SectionWrapper title='Contact Us'>
        <Contact
          displayedSections={['contact', 'address', 'socialMedia']}
          className='w-full'
        />
      </SectionWrapper>
    </Layout>
  )
}

export default Detail
