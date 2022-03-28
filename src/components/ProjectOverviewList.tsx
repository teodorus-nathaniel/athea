import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import ProjectOverview, { ProjectOverviewData } from './ProjectOverview'

interface Props extends HTMLProps<HTMLDivElement> {
  projects: ProjectOverviewData[]
}

export default function ProjectOverviewList({
  className,
  projects,
  ...divProps
}: Props) {
  return (
    <div
      {...divProps}
      className={clsx(
        'w-full',
        'grid gap-10 grid-cols-[repeat(auto-fill,_minmax(300px,_450px))] justify-center',
        className
      )}>
      {projects.map((projectProps) => (
        <ProjectOverview key={projectProps.title} {...projectProps} />
      ))}
    </div>
  )
}
