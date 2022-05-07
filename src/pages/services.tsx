import Layout from '#/components/layouts/Layout'
import HeadlineSection from '#/components/sections/HeadlineSection'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import ServicesDesktop from '#/modules/services/ServicesDesktop'
import ServicesMobile from '#/modules/services/ServicesMobile'
import type { NextPage } from 'next'

const Services: NextPage = () => {
  const mdUp = useBreakpointThreshold('md')

  return (
    <Layout meta={{ title: 'Services' }}>
      <HeadlineSection
        noBgImage
        subheading='Every project is a chance to try something new. Look at something with a fresh perspective. Do something for the first time.'
        type='souls'
      />
      {mdUp ? <ServicesDesktop /> : <ServicesMobile />}
    </Layout>
  )
}

export default Services
