import Contact from '#/components/Contact'
import Layout from '#/components/layouts/Layout'
import ProjectOverviewList from '#/components/ProjectOverviewList'
import HeadlineSection from '#/components/sections/HeadlineSection'
import SectionWrapper from '#/components/sections/SectionWrapper'
import ServicesList from '#/components/ServicesList'
import recentWorks from '#/data/recent-works'
import services from '#/data/services'
import Button from '#/ui/Button'
import clsx from 'clsx'
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
        <Button className={clsx('mt-8')}>Discover More</Button>
      </SectionWrapper>
      <SectionWrapper className='px-0' title='Our Services'>
        <ServicesList services={services} />
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

export default Home
