import Container from '#/components/Container'
import ProjectOverview from '#/components/ProjectOverview'
import { ProjectData } from '#/data/types'
import AspectRatioContainer from '#/ui/AspectRatioContainer'
import Button from '#/ui/Button'
import ImageContainer from '#/ui/ImageContainer'
import Link from '#/ui/Link'
import Text from '#/ui/Text'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import ShareContainer from './common/ShareContainer'

const ReactPlayer = dynamic(() => import('react-player/youtube'))

interface Props {
  data: ProjectData
}

export default function DetailDesktop({ data }: Props) {
  const { ref, inView } = useInView({ threshold: 0.2 })

  const {
    credits,
    thumbnail,
    images,
    meta,
    overview,
    relatedWorks,
    key,
    title,
    titleDesc,
  } = data

  return (
    <>
      <Container>
        <div className={clsx('w-3/4', 'pt-8')}>
          <Text as='h1' className={clsx('text-5xl mb-2', 'leading-snug')}>
            <Text bold serif>
              {title}
            </Text>{' '}
            &middot; <Text>{titleDesc}</Text>
          </Text>
        </div>
        <div
          className={clsx(
            'grid grid-cols-[5fr,_7fr] gap-x-8',
            'pt-8',
            'pb-16'
          )}>
          <div
            className={clsx('grid grid-cols-2', 'gap-x-4 gap-y-6', 'self-end')}>
            {meta.map(({ label, value }) => (
              <div className={clsx('flex flex-col')} key={label + value}>
                <Text serif className={clsx('mb-0.5', 'text-lg')}>
                  {label}
                </Text>
                <Text className={clsx('text-xl')}>{value}</Text>
              </div>
            ))}
          </div>
          <ImageContainer src={thumbnail} aspectRatio='16:9' />
        </div>
      </Container>
      <AspectRatioContainer aspectRatio='16:9' ref={ref}>
        <ReactPlayer
          playing={inView}
          playsinline
          muted
          controls
          url='https://www.youtube.com/watch?v=-wtWbajnxD8'
          width='100%'
          height='100%'
        />
      </AspectRatioContainer>
      <Container>
        <div className={clsx('py-32', 'grid grid-cols-[4fr,_8fr]')}>
          <Text serif bold as='h2' className={clsx('uppercase', 'text-4xl')}>
            Overview
          </Text>
          <Text as='p' className={clsx('text-xl')}>
            {overview}
          </Text>
        </div>
        <div className={clsx('grid grid-cols-2 gap-8', 'mb-8')}>
          {images.map((image, idx) => (
            <ImageContainer
              key={idx}
              src={image}
              alt={title}
              aspectRatio='16:9'
            />
          ))}
        </div>
        <div className={clsx('py-16', 'grid grid-cols-[4fr,_8fr]')}>
          <Text serif bold as='h2' className={clsx('uppercase', 'text-4xl')}>
            Credits
          </Text>
          <div className={clsx('flex flex-col')}>
            <Text as='p' className={clsx('text-xl')}>
              {credits}
            </Text>
            <ShareContainer
              projectTitle={title}
              projectTitleDesc={titleDesc}
              className={clsx('mt-12', 'text-2xl')}
              projectKey={key}
            />
          </div>
        </div>
        {relatedWorks.length > 0 && (
          <>
            <Text
              as='h2'
              className={clsx('uppercase', 'text-4xl', 'pb-16', 'text-center')}>
              <Text serif bold>
                Related
              </Text>
              <Text> Works</Text>
            </Text>
            <div className={clsx('grid grid-cols-2', 'gap-12')}>
              {relatedWorks.map((project, idx) => (
                <ProjectOverview projectOverview={project} key={idx} />
              ))}
            </div>
          </>
        )}
        <div className={clsx('py-16')}>
          <div className={clsx('flex justify-center', 'pt-16')}>
            <Link noAnimation href='/works'>
              <Button
                type='solid-white'
                className={clsx('!px-10 py-3', 'uppercase')}>
                Back to work list
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
