import Layout from '#/components/layouts/Layout'
import ProjectOverviewList from '#/components/ProjectOverviewList'
import HeadlineSection from '#/components/sections/HeadlineSection'
import SectionWrapper from '#/components/sections/SectionWrapper'
import TabLayout, { TabData } from '#/components/TabLayout'
import { SLOW_TRANSITION } from '#/constants/transition'
import { projectGroups } from '#/data/projects/projects'
import { ProjectData } from '#/data/types'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import useSlideAnimation from '#/helpers/hooks/useSlideAnimation'
import Text from '#/ui/Text'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'

const tabs: TabData[] = []
let allProjects: ProjectData[] = []
const groups = [...projectGroups]
groups.forEach(({ projects }) => {
  allProjects.push(...projects)
})
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

  const [contentHeight, setContentHeight] = useState(0)
  const { setSlideDir, ...slideAnimation } = useSlideAnimation()

  const updateHeight = useCallback(() => {
    setTimeout(() => {
      const content = document.getElementById('works-content')
      setContentHeight((prev) => content?.offsetHeight || prev)
    })
  }, [])
  useEffect(() => {
    if (selectedWork) {
      updateHeight()
    }
  }, [selectedWork, updateHeight])

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
            <Text>Work</Text>
          </>
        }
        theme='dark'>
        <div
          className={clsx(
            'flex justify-center items-center w-full text-lg',
            mdUp ? 'mb-8' : ''
          )}>
          <TabLayout
            leftText='View'
            className={clsx('!w-auto')}
            selectedTab={selectedTab}
            onTabClick={(clickedIdx) =>
              setSlideDir(clickedIdx > selectedTab ? 'right' : 'left')
            }
            setSelectedTab={setSelectedTab}
            tabs={tabs}
          />
        </div>
        <motion.div
          animate={{ height: contentHeight }}
          transition={SLOW_TRANSITION}
          className={clsx('overflow-hidden relative w-full')}>
          <AnimatePresence>
            <motion.div
              {...slideAnimation}
              className={clsx('absolute top-0 w-full z-0')}
              transition={SLOW_TRANSITION}
              onUnmount={updateHeight}
              onAnimationStart={updateHeight}
              key={selectedWork.group}
              id='works-content'>
              <ProjectOverviewList projects={selectedWork?.projects ?? []} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </SectionWrapper>
    </Layout>
  )
}

export default Works
