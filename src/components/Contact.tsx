import ArrowLinkIcon from '#/assets/icons/arrow-link.svg'
import InstagramIcon from '#/assets/social-media/instagram.svg'
import LinkedinIcon from '#/assets/social-media/linkedin.svg'
import YoutubeIcon from '#/assets/social-media/youtube.svg'
import { themeClassNames, ThemeTypes } from '#/constants/theme'
import Link from '#/ui/Link'
import clsx from 'clsx'
import React, { HTMLProps } from 'react'

const contactLinks = [
  { text: 'naphtali@atheavisuals.com', href: '/' },
  { text: '+62 817 9222 220', href: '/' },
]

const sections = {
  contact: ContactLinks,
  address: ContactAddress,
  socialMedia: ContactSocialMedia,
}

interface Props extends HTMLProps<HTMLDivElement> {
  theme?: ThemeTypes
  displayedSections?: (keyof typeof sections)[]
  config?: { [key in keyof typeof sections]?: any }
}

export default function Contact({
  className,
  theme = 'dark',
  displayedSections = ['contact'],
  config = {},
  ...divProps
}: Props) {
  return (
    <div
      className={clsx(
        'flex flex-col w-full',
        themeClassNames[theme],
        className
      )}
      {...divProps}>
      {displayedSections.map((key) => {
        const Section = sections[key]
        return (
          <div key={key} className='mb-8'>
            <Section theme={theme} {...config[key]} />
          </div>
        )
      })}
    </div>
  )
}

function ContactLinks({ theme }: { theme: ThemeTypes }) {
  return (
    <div className='flex flex-col'>
      <p className='font-serif text-sm mb-2'>
        Let{"'"}s have a good talk through
      </p>
      {contactLinks.map(({ href, text }) => (
        <div key={text} className={clsx('mb-6')}>
          <Link
            href={href}
            className={clsx(
              'flex justify-between items-center',
              'text-xl font-normal',
              'before:absolute before:bg-gray-400 before:-bottom-1 before:left-0',
              theme === 'dark' ? 'before:bg-gray-600' : 'before:bg-gray-400',
              'before:h-0.5 before:w-full'
            )}>
            {text}
            <ArrowLinkIcon height='1rem' className={clsx('ml-2', 'shrink-0')} />
          </Link>
        </div>
      ))}
    </div>
  )
}

function ContactAddress() {
  return (
    <div className='flex flex-col'>
      <p className='font-serif text-sm mb-2'>Address</p>
      <p className='font-normal text-xl'>BSD City, Tangerang, 15331</p>
    </div>
  )
}

const socialMediaIcons = [
  { icon: InstagramIcon, href: 'https://instagram.com' },
  { icon: LinkedinIcon, href: 'https://linkedin.com' },
  { icon: YoutubeIcon, href: 'https://youtube.com' },
]
function ContactSocialMedia({
  theme,
  smaller = false,
}: {
  theme: ThemeTypes
  smaller?: boolean
}) {
  const size = smaller ? '1.5rem' : '2.1rem'
  return (
    <div className='flex flex-col'>
      <p className='font-serif text-sm mb-2 whitespace-nowrap'>Connect with us</p>
      <div className={clsx('flex items-center')}>
        {socialMediaIcons.map(({ icon: Icon, href }, idx) => (
          <Link
            noAnimation
            className={clsx(
              theme === 'light' ? 'text-gray-800' : '',
              'transition ease-out',
              'hover:scale-110 active:scale-105'
            )}
            href={href}
            key={idx}>
            <Icon className={clsx('mr-4')} width={size} height={size} />
          </Link>
        ))}
      </div>
    </div>
  )
}
