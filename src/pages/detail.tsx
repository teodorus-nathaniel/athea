import Layout from '#/components/layouts/Layout'
import detail from '#/data/detail'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import DetailDesktop from '#/modules/detail/DetailDesktop'
import DetailMobile from '#/modules/detail/DetailMobile'
import type { NextPage } from 'next'

const Detail: NextPage = () => {
  const mdUp = useBreakpointThreshold('md')

  return (
    <Layout
      mobileFooter
      mobileFooterTitle
      theme='dark'
      meta={{ title: 'Detail' }}
      hasOffsetNavbar>
      {mdUp ? <DetailDesktop data={detail} /> : <DetailMobile data={detail} />}
    </Layout>
  )
}

export default Detail
