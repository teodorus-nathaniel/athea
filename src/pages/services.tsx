import Contact from '#/components/Contact'
import Layout from '#/components/layouts/Layout'
import HeadlineSection from '#/components/sections/HeadlineSection'
import SectionWrapper from '#/components/sections/SectionWrapper'
import ServicesList from '#/components/ServicesList'
import services from '#/data/services'
import type { NextPage } from 'next'

const Services: NextPage = () => {
  return (
    <Layout meta={{ title: 'Homepage' }}>
      <HeadlineSection
        theme='light'
        noBgImage
        subheading='Not your typical agency. We are your next set of creative innovation experts.\nAthea is a multidisciplinary creative company. We are based in Jakarta and founded in 2019 had 4 subsidiary based on functionality'
        type='souls'
      />
      <SectionWrapper className='px-0' title='Our Services'>
        <ServicesList services={services} />
      </SectionWrapper>
      <SectionWrapper title='Contact Us'>
        <Contact displayedSections={['contact']} className='w-full' />
      </SectionWrapper>
    </Layout>
  )
}

export default Services
