import ClientList from '#/components/ClientList'
import Contact from '#/components/Contact'
import Layout from '#/components/layouts/Layout'
import HeadlineSection from '#/components/sections/HeadlineSection'
import SectionWrapper from '#/components/sections/SectionWrapper'
import ServiceList from '#/components/ServiceList'
import TeamMemberList from '#/components/TeamMemberList'
import clients from '#/data/clients'
import services from '#/data/services'
import teamMembers from '#/data/team'
import type { NextPage } from 'next'

const Services: NextPage = () => {
  return (
    <Layout meta={{ title: 'Services' }}>
      <HeadlineSection
        noBgImage
        subheading={`Athea is a multidisciplinary creative company. We are based in Jakarta and founded in 2019 had 4 subsidiary based on functionality`}
        type='souls'
      />
      <SectionWrapper className='px-0' title='Our Services'>
        <ServiceList services={services} />
      </SectionWrapper>
      <SectionWrapper title='Our Clients'>
        <ClientList clients={clients} />
      </SectionWrapper>
      <SectionWrapper title='Meet Our Team'>
        <TeamMemberList teamMembers={teamMembers} />
      </SectionWrapper>
      <SectionWrapper title='Contact Us'>
        <Contact displayedSections={['contact']} className='w-full' />
      </SectionWrapper>
    </Layout>
  )
}

export default Services
