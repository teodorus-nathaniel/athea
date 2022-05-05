import { ProjectOverviewData } from '#/data/types'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import ProjectOverview from './ProjectOverview'

interface Props extends HTMLProps<HTMLDivElement> {
  projects: ProjectOverviewData[]
}

export default function ProjectOverviewList({
  className,
  projects,
  ...divProps
}: Props) {
  const mdUp = useBreakpointThreshold('md')

  return (
    <div
      {...divProps}
      className={clsx(
        'w-full mx-auto',
        'grid gap-x-12 gap-y-16 justify-center',
        mdUp ? 'grid-cols-2' : '',
        className
      )}>
      {projects.map((projectProps, idx) => (
        <ProjectOverview
          style={{ gridColumn: idx === 0 ? '1/-1' : '' }}
          key={projectProps.title}
          {...projectProps}
        />
      ))}
    </div>
  )
}
