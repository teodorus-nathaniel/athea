import Layout from '#/components/layouts/Layout'
import ProjectOverviewList from '#/components/ProjectOverviewList'
import HeadlineSection from '#/components/sections/HeadlineSection'
import SectionWrapper from '#/components/sections/SectionWrapper'
import TabLayout, { TabData } from '#/components/TabLayout'
import { SLOW_TRANSITION } from '#/constants/transition'
import works from '#/data/works'
import useSlideAnimation from '#/helpers/hooks/useSlideAnimation'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'

const tabs: TabData[] = []
works.forEach(({ title, projects, hash }) => {
  tabs.push({
    title,
    additionalInfo: projects.length,
    hash,
  })
})

const Works: NextPage = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const selectedWork = works[selectedTab]

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
            <span>Our </span>
            <span className='font-sans font-light'>Work</span>
          </>
        }
        theme='dark'>
        <div className={clsx('flex justify-center w-full')}>
          <TabLayout
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
              key={selectedWork.title}
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
