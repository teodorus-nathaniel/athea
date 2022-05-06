import Container from '#/components/Container'
import ProjectOverview from '#/components/ProjectOverview'
import detail from '#/data/detail'
import Button from '#/ui/Button'
import ImageContainer from '#/ui/ImageContainer'
import Text from '#/ui/Text'
import clsx from 'clsx'
import React from 'react'

interface Props {
  data: typeof detail
}

export default function DetailDesktop({ data }: Props) {
  const {
    credits,
    image,
    meta,
    overview,
    relatedWorks,
    shareLinks: _shareLinks, // TODO: ini blom dipake
    title,
    titleDesc,
  } = data

  return (
    <>
      <Container>
        <div className={clsx('w-1/2', 'pt-8')}>
          <Text
            as='h1'
            className={clsx('text-4xl tracking-wider mb-2', 'leading-snug')}>
            <Text bold serif>
              {title}
            </Text>{' '}
            &middot; <Text>{titleDesc}</Text>
          </Text>
        </div>
        <div
          className={clsx(
            'grid grid-cols-[5fr,_7fr]',
            'items-end',
            'pt-6',
            'pb-16'
          )}>
          <div className={clsx('grid grid-cols-2', 'gap-x-4 gap-y-6')}>
            {meta.map(({ label, value }) => (
              <div className={clsx('flex flex-col')} key={label + value}>
                <Text serif className={clsx('tracking-wider', 'mb-0.5')}>
                  {label}
                </Text>
                <Text className={clsx('text-xl')}>{value}</Text>
              </div>
            ))}
          </div>
          <ImageContainer src={image} aspectRatio='16:9' />
        </div>
      </Container>
      <ImageContainer aspectRatio='16:9' src={image} alt={title} />
      <Container>
        <div className={clsx('py-32', 'grid grid-cols-[4fr,_8fr]')}>
          <Text serif bold as='h2' className={clsx('uppercase', 'text-4xl')}>
            Overview
          </Text>
          <Text as='p' className={clsx('text-xl')}>
            {overview}
          </Text>
        </div>
        <div className={clsx('flex flex-col')}>
          <ImageContainer
            src={image}
            alt={title}
            aspectRatio='16:9'
            containerClassName={clsx('mb-12')}
          />
          <ImageContainer
            src={image}
            alt={title}
            aspectRatio='16:9'
            containerClassName={clsx('mb-12')}
          />
          <ImageContainer
            src={image}
            alt={title}
            aspectRatio='16:9'
            containerClassName={clsx('mb-12')}
          />
        </div>
        <div className={clsx('py-16', 'grid grid-cols-[4fr,_8fr]')}>
          <Text serif bold as='h2' className={clsx('uppercase', 'text-4xl')}>
            Credits
          </Text>
          <Text as='p' className={clsx('text-xl')}>
            {credits}
          </Text>
        </div>
        <div className={clsx('py-16')}>
          <Text
            serif
            bold
            as='h2'
            className={clsx('uppercase', 'text-4xl', 'pb-16', 'text-center')}>
            Related Works
          </Text>
          <div className={clsx('grid grid-cols-2', 'gap-12')}>
            <ProjectOverview {...relatedWorks} />
            <ProjectOverview {...relatedWorks} />
          </div>
          <div className={clsx('flex justify-center', 'pt-16')}>
            <Button
              type='solid-white'
              className={clsx('!px-10 py-3', 'uppercase')}>
              Back to work list
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}
