import CopyLinkIcon from '#/assets/icons/copy-link.svg'
import InstagramIcon from '#/assets/social-media/instagram.svg'
import WhatsappIcon from '#/assets/social-media/whatsapp.svg'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import { generateWebsiteUrl } from '#/helpers/url'
import Link from '#/ui/Link'
import Text from '#/ui/Text'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { HTMLProps } from 'react'

const Popover = dynamic(() => import('#/ui/Popover'))

interface ShareContainerProps extends HTMLProps<HTMLDivElement> {
  projectKey: string
  projectTitle: string
  projectTitleDesc: string
}

export default function ShareContainer({
  projectKey,
  projectTitle,
  projectTitleDesc,
  className,
  ...props
}: ShareContainerProps) {
  const mdUp = useBreakpointThreshold('md')

  const currentLink = generateWebsiteUrl(`projects/${projectKey}`)
  const linkTitle = `${projectTitle} · ${projectTitleDesc}`
  const shareDescription = `Please check this out! ${linkTitle}`

  const iconHeight = mdUp ? '0.9em' : '1.3em'

  return (
    <div
      className={clsx('flex', 'space-x-6', 'items-center', className)}
      {...props}>
      <Text bold>Share this work</Text>
      <Popover
        buttonContainerClassName={clsx('flex')}
        button={
          <Link
            href=''
            onClick={() => navigator.clipboard.writeText(currentLink)}
            noAnimation
            className={clsx('hover:scale-110 active:scale-105')}>
            <CopyLinkIcon height={iconHeight} />
          </Link>
        }
        panel={
          <Text bold className='text-sm' as='p'>
            Link Copied!
          </Text>
        }
      />
      {!mdUp && (
        <Link
          noAnimation
          className={clsx('hover:scale-110 active:scale-105')}
          onClick={(e) => {
            e.preventDefault()
            navigator?.share &&
              navigator.share({
                url: currentLink,
                title: projectTitle,
                text: shareDescription,
              })
          }}>
          <InstagramIcon height={iconHeight} />
        </Link>
      )}
      <Link
        target='_blank'
        href={`https://wa.me?text=${shareDescription} ${currentLink}`}
        noAnimation
        className={clsx('hover:scale-110 active:scale-105')}>
        <WhatsappIcon height={iconHeight} />
      </Link>
    </div>
  )
}
