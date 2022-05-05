import AddStoryIcon from '#/assets/icons/add-story.svg'
import CopyLinkIcon from '#/assets/icons/copy-link.svg'
import WhatsappIcon from '#/assets/social-media/whatsapp.svg'
import Container from '#/components/Container'
import Layout from '#/components/layouts/Layout'
import ProjectOverview from '#/components/ProjectOverview'
import detail from '#/data/detail'
import Button from '#/ui/Button'
import Link from '#/ui/Link'
import TextWithNewLines from '#/ui/TextWithNewLines'
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
    <Layout theme='dark' meta={{ title: 'Detail' }} hasOffsetNavbar>
      <Container>
        <DetailSection>
          <h1 className={clsx('text-2xl tracking-wider mb-2')}>
            <span className={clsx('font-bold font-serif')}>{title}</span>{' '}
            &middot; <span className={clsx('font-light')}>{titleDesc}</span>
          </h1>
          <span className='text-sm mb-6 text-gray-400'>{subtitle}</span>
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
                <span
                  className={clsx(
                    'font-serif tracking-wider text-xs',
                    'mb-0.5'
                  )}>
                  {label}
                </span>
                <TextWithNewLines className={clsx('font-light text-lg')}>
                  {value}
                </TextWithNewLines>
              </div>
            ))}
          </div>
        </DetailSection>

        <DetailSection title='Overview'>
          <TextWithNewLines className={clsx('font-light text-lg')}>
            {overview}
          </TextWithNewLines>
        </DetailSection>

        <DetailSection title='Credits'>
          <TextWithNewLines className={clsx('font-light text-lg')}>
            {credits}
          </TextWithNewLines>

          <div className={clsx('flex items-center', 'mt-6')}>
            <p className={clsx('font-normal text-xl tracking-wider')}>
              Share this work
            </p>
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
              <span>Related </span>
              <span className='font-sans font-light'>Works</span>
            </>
          }>
          <div className={clsx('max-w-sm', 'mt-4 mb-8')}>
            <ProjectOverview {...relatedWorks} />
          </div>
          <div className={clsx('flex justify-center')}>
            <Button type='solid-white'>Back to work list</Button>
          </div>
        </DetailSection>
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
      <h2
        className={clsx(
          'text-2xl text-center uppercase',
          'font-serif font-bold tracking-wider',
          'mb-6'
        )}>
        {title}
      </h2>
      {children}
    </section>
  )
}
