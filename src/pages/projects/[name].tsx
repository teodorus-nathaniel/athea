import Layout from '#/components/layouts/Layout'
import { projectKeys } from '#/data/projects/projects'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import DetailDesktop from '#/modules/detail/DetailDesktop'
import DetailMobile from '#/modules/detail/DetailMobile'
import Text from '#/ui/Text'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  return {
    paths: Object.keys(projectKeys).map((projectKey) => ({
      params: { name: projectKey },
    })),
    fallback: false,
  }
}

export function getStaticProps() {
  return { props: {} }
}

const Detail: NextPage = () => {
  const mdUp = useBreakpointThreshold('md')
  const { query } = useRouter()
  const name = query.name as string

  const currentProject = projectKeys[name]

  return (
    <Layout
      mobileFooter
      mobileFooterTitle
      theme='dark'
      meta={{ title: 'Detail' }}
      hasOffsetNavbar>
      {(() => {
        if (!currentProject) {
          return (
            <div className='w-full flex justify-center flex-1 py-20'>
              <Text as='h1' className='text-2xl text-center'>
                {name} Project Not Found
              </Text>
            </div>
          )
        }

        return mdUp ? (
          <DetailDesktop data={currentProject} />
        ) : (
          <DetailMobile data={currentProject} />
        )
      })()}
    </Layout>
  )
}

export default Detail
