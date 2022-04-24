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
        'w-full',
        'grid gap-12 grid-cols-[repeat(auto-fit,_minmax(300px,_450px))] justify-center',
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
