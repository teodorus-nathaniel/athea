import { TeamMemberData } from '#/data/types'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'
import TeamMember from './TeamMember'

export interface TeamMemberListProps extends HTMLProps<HTMLDivElement> {
  teamMembers: TeamMemberData[]
}

export default function TeamMemberList({
  className,
  teamMembers,
  ...props
}: TeamMemberListProps) {
  return (
    <div
      className={clsx(
        'w-full',
        'grid grid-cols-[repeat(auto-fit,_minmax(125px,_1fr))]',
        'gap-x-4 gap-y-12',
        className
      )}
      {...props}>
      {teamMembers.map((teamMember) => (
        <TeamMember
          key={teamMember.name + teamMember.position}
          {...teamMember}
        />
      ))}
    </div>
  )
}
