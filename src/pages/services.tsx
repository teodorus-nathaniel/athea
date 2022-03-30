import ClientList from '#/components/ClientList'
import Contact from '#/components/Contact'
import Layout from '#/components/layouts/Layout'
import HeadlineSection from '#/components/sections/HeadlineSection'
import SectionWrapper from '#/components/sections/SectionWrapper'
import ServiceList from '#/components/ServiceList'
import TeamMemberList from '#/components/TeamMemberList'
import services from '#/data/services'
import teamMembers from '#/data/team'
import { ClientData } from '#/data/types'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const clientsPromise = import('#/data/clients')

const Services: NextPage = () => {
  const [clients, setClients] = useState<ClientData[]>([])
  useEffect(() => {
    async function awaitClients() {
      const clientsData = (await clientsPromise).default
      setClients(clientsData as unknown as ClientData[])
    }
    awaitClients()
  }, [])

  return (
    <Layout meta={{ title: 'Services' }}>
      <HeadlineSection
        theme='light'
        noBgImage
        subheading={`Not your typical agency. We are your next set of creative innovation experts.\nAthea is a multidisciplinary creative company. We are based in Jakarta and founded in 2019 had 4 subsidiary based on functionality`}
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
