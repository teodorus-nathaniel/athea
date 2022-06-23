import { ProjectOverviewData } from '#/data/types'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import ProjectOverview from './ProjectOverview'

interface Props extends HTMLProps<HTMLDivElement> {
  projects: ProjectOverviewData[]
  largeFirstProject?: boolean
}

export default function ProjectOverviewList({
  className,
  projects,
  largeFirstProject = false,
  ...divProps
}: Props) {
  const mdUp = useBreakpointThreshold('md')

  return (
    <div
      {...divProps}
      className={clsx(
        'w-full mx-auto',
        'grid gap-x-12 gap-y-16',
        mdUp ? 'grid-cols-2 justify-center' : '',
        className
      )}>
      {projects.map((project, idx) => (
        <ProjectOverview
          style={{
            gridColumn:
              mdUp && largeFirstProject && idx % 7 === 0 ? '1/-1' : '',
          }}
          key={idx}
          projectOverview={project}
        />
      ))}
    </div>
  )
}
