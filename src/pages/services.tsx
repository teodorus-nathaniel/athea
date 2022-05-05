import ServiceHeadline from '#/assets/ui/service-tagline.jpeg'
import Contact from '#/components/Contact'
import Layout from '#/components/layouts/Layout'
import HeadlineSection from '#/components/sections/HeadlineSection'
import SectionWrapper from '#/components/sections/SectionWrapper'
import ServiceList from '#/components/ServiceList'
import TeamMemberList from '#/components/TeamMemberList'
import services from '#/data/services'
import teamMembers from '#/data/team'
import Text from '#/ui/Text'
import clsx from 'clsx'
import type { NextPage } from 'next'
import Image from 'next/image'

const Services: NextPage = () => {
  return (
    <Layout meta={{ title: 'Services' }}>
      <HeadlineSection
        noBgImage
        subheading={`Athea is a multidisciplinary creative company. We are based in Jakarta and founded in 2019 had 4 subsidiary based on functionality`}
        type='souls'
      />
      <SectionWrapper
        className='px-0'
        title={
          <Text serif bold className='text-4xl capitalize leading-relaxed'>
            {`We Integrate\nCollaborate\nChallenge`}
          </Text>
        }>
        <div className='flex flex-col text-lg px-6'>
          <Text className='pb-4'>
            We are your next set of creative innovation experts. Athea is
            multidisciplinary creative company.
          </Text>
          <Text>
            We are based in Jakarta and founded in 2019 had 4 subsidiary based
            on functionality.
          </Text>
        </div>
      </SectionWrapper>
      <SectionWrapper
        className='px-0'
        title={
          <>
            <Text serif bold>
              Our{' '}
            </Text>
            <Text>Services</Text>
          </>
        }>
        <ServiceList services={services} />
      </SectionWrapper>
      <SectionWrapper
        className='!pb-8'
        title={
          <>
            <Text serif bold>
              Our{' '}
            </Text>
            <Text>Team</Text>
          </>
        }>
        <TeamMemberList teamMembers={teamMembers} />
      </SectionWrapper>
      <SectionWrapper className={clsx('!px-0 !py-0', '!pb-12')}>
        <Image src={ServiceHeadline} alt='tagline' />
      </SectionWrapper>
      <SectionWrapper>
        <Contact
          displayedSections={['contact', 'address', 'socialMedia']}
          className='w-full'
        />
      </SectionWrapper>
    </Layout>
  )
}

export default Services
