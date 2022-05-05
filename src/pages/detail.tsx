import AddStoryIcon from '#/assets/icons/add-story.svg'
import CopyLinkIcon from '#/assets/icons/copy-link.svg'
import WhatsappIcon from '#/assets/social-media/whatsapp.svg'
import Container from '#/components/Container'
import Layout from '#/components/layouts/Layout'
import ProjectOverview from '#/components/ProjectOverview'
import detail from '#/data/detail'
import Button from '#/ui/Button'
import Link from '#/ui/Link'
import Text from '#/ui/Text'
import clsx from 'clsx'
import type { NextPage } from 'next'
import Image from 'next/image'
import { HTMLProps } from 'react'

const Detail: NextPage = () => {
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
  } = detail

  return (
    <Layout
      mobileFooter
      mobileFooterTitle
      theme='dark'
      meta={{ title: 'Detail' }}
      hasOffsetNavbar>
      <Container>
        <DetailSection>
          <Text as='h1' className={clsx('text-2xl tracking-wider mb-2')}>
            <Text bold serif>
              {title}
            </Text>{' '}
            &middot; <Text>{titleDesc}</Text>
          </Text>
          <Text className='text-sm mb-6 text-gray-400'>{subtitle}</Text>
          <div className={clsx('mb-4')}>
            <Image src={image} alt={title} />
          </div>
          <div
            className={clsx(
              'w-full',
              'grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]',
              'gap-x-4 gap-y-8'
            )}>
            {meta.map(({ label, value }) => (
              <div className={clsx('flex flex-col')} key={label + value}>
                <Text
                  serif
                  className={clsx('tracking-wider text-sm', 'mb-0.5')}>
                  {label}
                </Text>
                <Text className={clsx('text-lg')}>{value}</Text>
              </div>
            ))}
          </div>
        </DetailSection>

        <DetailSection title='Overview'>
          <Text className={clsx('text-lg')}>{overview}</Text>
        </DetailSection>

        <DetailSection title='Credits'>
          <Text className={clsx('text-lg')}>{credits}</Text>

          <div className={clsx('flex items-center', 'mt-6')}>
            <Text bold className={clsx('text-xl tracking-wider')}>
              Share this work
            </Text>
            <Link
              noAnimation
              className={clsx('ml-4', 'hover:scale-110 active:scale-105')}>
              <CopyLinkIcon width='1.6rem' />
            </Link>
            <Link
              noAnimation
              className={clsx('ml-4', 'hover:scale-110 active:scale-105')}>
              <AddStoryIcon width='1.35rem' />
            </Link>
            <Link
              noAnimation
              className={clsx('ml-4', 'hover:scale-110 active:scale-105')}>
              <WhatsappIcon width='1.3rem' />
            </Link>
          </div>
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
          <div className={clsx('max-w-sm', 'mt-4 mb-8')}>
            <ProjectOverview {...relatedWorks} />
          </div>
        </DetailSection>
        <div className={clsx('flex justify-center mb-12')}>
          <Button type='solid-white'>Back to work list</Button>
        </div>
      </Container>
    </Layout>
  )
}

export default Detail

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
          className={clsx(
            'text-2xl text-center uppercase',
            'tracking-wider',
            'mb-6'
          )}>
          {title}
        </Text>
      ) : (
        <div
          className={clsx(
            'text-2xl text-center uppercase',
            'tracking-wider',
            'mb-6'
          )}>
          {title}
        </div>
      )}
      {children}
    </section>
  )
}
