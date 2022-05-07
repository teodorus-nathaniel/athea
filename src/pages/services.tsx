import Layout from '#/components/layouts/Layout'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import ServicesDesktop from '#/modules/services/ServicesDesktop'
import ServicesMobile from '#/modules/services/ServicesMobile'
import type { NextPage } from 'next'

const Services: NextPage = () => {
  const mdUp = useBreakpointThreshold('md')

  return (
    <Layout mobileFooter meta={{ title: 'Services' }}>
      {mdUp ? <ServicesDesktop /> : <ServicesMobile />}
    </Layout>
  )
}

export default Services
