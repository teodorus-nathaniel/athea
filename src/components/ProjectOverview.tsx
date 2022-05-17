import { ProjectOverviewData } from '#/data/types'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import ImageContainer from '#/ui/ImageContainer'
import Link from '#/ui/Link'
import Text from '#/ui/Text'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

interface ProjectOverviewProps extends HTMLProps<HTMLAnchorElement> {
  projectOverview: ProjectOverviewData
}

export default function ProjectOverview({
  projectOverview,
  ref: _ref,
  ...anchorProps
}: ProjectOverviewProps) {
  const mdUp = useBreakpointThreshold('md')

  const { subtitle, thumbnail, title, titleDesc } = projectOverview

  return (
    <Link
      noAnimation
      href='/detail'
      className={clsx('flex flex-col w-full')}
      {...anchorProps}>
      <ImageContainer
        src={thumbnail}
        alt={title}
        aspectRatio={mdUp ? '16:9' : '3:4'}
        withAnimation
      />
      <Text as='p' className={clsx('text-2xl leading-tight', 'mt-6 mb-2')}>
        <Text serif bold>
          {title}
        </Text>{' '}
        &middot;
        <Text> {titleDesc}</Text>
      </Text>
      <Text as='p' className={clsx(mdUp ? 'text-lg' : 'text-sm')}>
        {subtitle}
      </Text>
    </Link>
  )
}
