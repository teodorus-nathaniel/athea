import Container from '#/components/Container'
import ProjectOverview from '#/components/ProjectOverview'
import { ProjectData } from '#/data/types'
import Button from '#/ui/Button'
import ImageContainer from '#/ui/ImageContainer'
import Link from '#/ui/Link'
import Text from '#/ui/Text'
import clsx from 'clsx'
import { HTMLProps } from 'react'
import ShareContainer from './common/ShareContainer'

interface Props {
  data: ProjectData
}

export default function DetailMobile({ data }: Props) {
  const {
    credits,
    thumbnail,
    images,
    meta,
    overview,
    relatedWorks,
    title,
    titleDesc,
    subtitle,
    key,
  } = data

  return (
    <Container>
      <DetailSection>
        <Text as='h1' className={clsx('text-2xl mb-2')}>
          <Text bold serif>
            {title}
          </Text>{' '}
          &middot; <Text>{titleDesc}</Text>
        </Text>
        <Text className='text-sm mb-6 opacity-75'>{subtitle}</Text>
        <div className={clsx('mb-6')}>
          <ImageContainer aspectRatio='3:4' src={thumbnail} alt={title} />
        </div>
        <div className={clsx('w-full', 'grid grid-cols-2', 'gap-x-4 gap-y-6')}>
          {meta.map(({ label, value }) => (
            <div className={clsx('flex flex-col')} key={label + value}>
              <Text serif bold className={clsx('text-base', 'mb-0.5')}>
                {label}
              </Text>
              <Text className={clsx('text-lg')}>{value}</Text>
            </div>
          ))}
        </div>
      </DetailSection>

      <DetailSection title='Overview'>
        <Text className={clsx('text-lg')}>{overview}</Text>
        <div className={clsx('flex flex-col', 'items-stretch', 'mt-8')}>
          {images.map((image, idx) => (
            <ImageContainer
              key={idx}
              aspectRatio='4:3'
              src={image}
              containerClassName={clsx('mb-6')}
            />
          ))}
        </div>
      </DetailSection>

      <DetailSection title='Credits'>
        <Text className={clsx('text-lg')}>{credits}</Text>
        <ShareContainer
          projectTitle={title}
          projectTitleDesc={titleDesc}
          projectKey={key}
          className={clsx('mt-6', 'text-lg')}
        />
      </DetailSection>

      <DetailSection
        title={
          <>
            <Text serif bold>
              Related{' '}
            </Text>
            <Text>Works</Text>
          </>
        }>
        <div
          className={clsx(
            'mt-4 mb-8',
            '-mx-6 pb-4',
            'flex items-stretch',
            'w-[100%_+_theme(spacing.6)_*_2] overflow-auto'
          )}>
          {relatedWorks.map((project, idx) => (
            <ProjectOverview
              className={clsx(
                'flex-shrink-0',
                'w-[calc(100vw_-_theme(spacing.6)_*_2)]',
                `${idx === 0 ? 'ml-6' : ''} mr-4`
              )}
              projectOverview={project}
              key={idx}
            />
          ))}
        </div>
      </DetailSection>
      <div className={clsx('flex justify-center mb-12')}>
        <Link href='/works' noAnimation>
          <Button type='solid-white'>Back to work list</Button>
        </Link>
      </div>
    </Container>
  )
}

const DetailSection = ({
  title,
  children,
  className,
  ...props
}: { title?: string | JSX.Element } & Omit<
  HTMLProps<HTMLDivElement>,
  'title'
>) => {
  return (
    <section className={clsx('flex flex-col', 'pb-16', className)} {...props}>
      {typeof title === 'string' ? (
        <Text
          as='h2'
          bold
          serif
          className={clsx('text-2xl text-center uppercase', 'mb-6')}>
          {title}
        </Text>
      ) : (
        <div className={clsx('text-2xl text-center uppercase', 'mb-6')}>
          {title}
        </div>
      )}
      {children}
    </section>
  )
}
