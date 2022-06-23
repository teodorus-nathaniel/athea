import Layout from '#/components/layouts/Layout'
import ProjectOverviewList from '#/components/ProjectOverviewList'
import HeadlineSection from '#/components/sections/HeadlineSection'
import SectionWrapper from '#/components/sections/SectionWrapper'
import TabLayout, { TabData } from '#/components/TabLayout'
import { SLOW_TRANSITION } from '#/constants/transition'
import { allProjects, projectGroups } from '#/data/projects/projects'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import Text from '#/ui/Text'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import type { NextPage } from 'next'
import { useState } from 'react'

const tabs: TabData[] = []
const groups = [...projectGroups]
groups.unshift({ group: 'All Work', projects: allProjects })
groups.forEach(({ group, projects }) => {
  tabs.push({
    title: group,
    additionalInfo: projects.length,
  })
})

const Works: NextPage = () => {
  const mdUp = useBreakpointThreshold('md')

  const [selectedTab, setSelectedTab] = useState(0)
  const selectedWork = groups[selectedTab]

  return (
    <Layout meta={{ title: 'Works' }}>
      <HeadlineSection
        subheading='Every project is a chance to try something new. Look at something with a fresh perspective. Do something for the first time.'
        type='projects'
        noBgImage
      />
      <SectionWrapper
        title={
          <>
            <Text serif bold>
              Our{' '}
            </Text>
            <Text>Works</Text>
          </>
        }
        theme='dark'
      >
        <div
          className={clsx(
            'flex justify-center items-center w-full text-lg',
            mdUp ? 'mb-8' : ''
          )}
        >
          <TabLayout
            leftText='View'
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tabs={tabs}
          />
        </div>
        <div className={clsx('w-full')}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              className={clsx('w-full')}
              transition={SLOW_TRANSITION}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={selectedWork.group}
              id='works-content'
            >
              <ProjectOverviewList
                largeFirstProject
                projects={selectedWork?.projects ?? []}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>
    </Layout>
  )
}

export default Works
