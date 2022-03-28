import ArrowLinkIcon from '#/assets/icons/arrow-link.svg'
import InstagramIcon from '#/assets/social-media/instagram.svg'
import LinkedinIcon from '#/assets/social-media/linkedin.svg'
import YoutubeIcon from '#/assets/social-media/youtube.svg'
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

type ThemeTypes = 'light' | 'dark'
interface Props extends HTMLProps<HTMLDivElement> {
  theme?: ThemeTypes
  displayedSections?: (keyof typeof sections)[]
}

export default function Contact({
  className,
  theme = 'light',
  displayedSections = ['contact'],
  ...divProps
}: Props) {
  return (
    <div
      className={clsx(
        'flex flex-col',
        theme === 'light' ? 'text-black' : 'text-white',
        className
      )}
      {...divProps}>
      {displayedSections.map((key) => {
        const Section = sections[key]
        return (
          <div key={key} className='mb-8'>
            <Section theme={theme} />
          </div>
        )
      })}
    </div>
  )
}

function ContactLinks({ theme }: { theme: ThemeTypes }) {
  return (
    <div className='flex flex-col'>
      <p className='font-light font-serif text-sm mb-2'>
        Let{"'"}s have a good talk through
      </p>
      {contactLinks.map(({ href, text }) => (
        <div key={text} className={clsx('mb-6')}>
          <Link
            href={href}
            className={clsx(
              'flex justify-between items-center',
              'text-xl',
              'before:absolute before:bg-gray-400 before:-bottom-1 before:left-0',
              theme === 'dark' ? 'before:bg-gray-600' : 'before:bg-gray-400',
              'before:h-0.5 before:w-full'
            )}>
            {text}
            <ArrowLinkIcon height='1rem' />
          </Link>
        </div>
      ))}
    </div>
  )
}

function ContactAddress() {
  return (
    <div className='flex flex-col'>
      <p className='font-light font-serif text-sm mb-2'>
        Let{"'"}s have a good talk through
      </p>
      <p className='text-bold text-xl'>
        Sheffield B9/19, Greenwich Park, BSD City, Tangerang, 15331
      </p>
    </div>
  )
}

const socialMediaIcons = [
  { icon: InstagramIcon, href: 'https://instagram.com' },
  { icon: LinkedinIcon, href: 'https://linkedin.com' },
  { icon: YoutubeIcon, href: 'https://youtube.com' },
]
function ContactSocialMedia() {
  return (
    <div className='flex flex-col'>
      <p className='font-light font-serif text-sm mb-2'>Connect with us</p>
      <div className={clsx('flex items-center')}>
        {socialMediaIcons.map(({ icon: Icon, href }, idx) => (
          <Link
            noAnimation
            className={clsx(
              'text-gray-800',
              'transition ease-out',
              'hover:scale-110 active:scale-105'
            )}
            href={href}
            key={idx}>
            <Icon className={clsx('mr-4')} width='2.1rem' height='2.1rem' />
          </Link>
        ))}
      </div>
    </div>
  )
}
