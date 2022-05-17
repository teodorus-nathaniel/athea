import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import TeamMemberList from '#/components/TeamMemberList'
import teamMembers from '#/data/team-members'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import Text from '#/ui/Text'
import React from 'react'

export default function ServicesTeamSection(props: SectionWrapperProps) {
  const mdUp = useBreakpointThreshold('md')

  return (
    <SectionWrapper
      {...props}
      title={
        <>
          <Text serif bold>
            {mdUp ? 'Meet ' : 'Our '}
          </Text>
          <Text>{mdUp ? 'Our Team' : 'Team'}</Text>
        </>
      }>
      <TeamMemberList teamMembers={teamMembers} />
    </SectionWrapper>
  )
}
