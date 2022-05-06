import Container from '#/components/Container'
import ProjectOverview from '#/components/ProjectOverview'
import detail from '#/data/detail'
import Button from '#/ui/Button'
import Text from '#/ui/Text'
import clsx from 'clsx'
import Image from 'next/image'
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
    subtitle,
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
          <div className={clsx('w-full pt-[56.25%]', 'relative')}>
            <Image
              src={image}
              layout='fill'
              className={clsx('absolute', 'object-cover object-bottom')}
              alt={title}
            />
          </div>
        </div>
      </Container>
      <div className='w-full pt-[56.25%] relative'>
        <Image
          src={image}
          layout='fill'
          className={clsx('absolute', 'object-cover object-bottom')}
          alt={title}
        />
      </div>
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
          <div
            className={clsx(
              'w-full pt-[56.25%]',
              'bg-white',
              'mb-12',
              'relative'
            )}>
            <Image
              className={clsx('object-cover')}
              src={image}
              alt={title}
              layout='fill'
            />
          </div>
          <div
            className={clsx(
              'w-full pt-[56.25%]',
              'bg-white',
              'mb-12',
              'relative'
            )}>
            <Image
              className={clsx('object-cover')}
              src={image}
              alt={title}
              layout='fill'
            />
          </div>
          <div
            className={clsx(
              'w-full pt-[56.25%]',
              'bg-white',
              'mb-12',
              'relative'
            )}>
            <Image
              className={clsx('object-cover')}
              src={image}
              alt={title}
              layout='fill'
            />
          </div>
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
              className={clsx('text-lg', 'px-14 py-3')}>
              BACK TO WORK LIST
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}
