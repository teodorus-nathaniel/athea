import { ThemeTypes } from '#/constants/theme'
import { useBreakpointThreshold } from '#/helpers/hooks/useBreakpointThreshold'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { HTMLProps } from 'react'
import Contact from './Contact'
import Container from './Container'
import { links } from './Navbar/NavbarContent/NavbarContent'
import NavbarLink from './Navbar/NavbarContent/NavbarLink'
import SectionWrapper from './sections/SectionWrapper'

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'title'> {
  theme: ThemeTypes
  title?: string | JSX.Element
}

export default function Footer(props: Props) {
  const mdUp = useBreakpointThreshold('md')
  const SelectedFooter = mdUp ? FooterDesktop : FooterMobile

  return <SelectedFooter {...props} />
}

function FooterMobile({ className, theme, title, ...props }: Props) {
  return (
    <SectionWrapper
      theme={theme}
      title={title ?? ''}
      className={className}
      {...props}>
      <Contact
        theme={theme}
        displayedSections={['contact', 'address', 'socialMedia']}
        className='w-full'
      />
    </SectionWrapper>
  )
}

function FooterDesktop({ className, theme, title: _title, ...props }: Props) {
  const { pathname } = useRouter()
  const lgUp = useBreakpointThreshold('lg')
  return (
    <Container
      className={clsx(
        'flex',
        'pt-24 pb-12',
        className
      )}
      {...props}>
      <Contact className={clsx('pr-8 lg:pr-16', 'max-w-xs lg:max-w-sm')} theme={theme} displayedSections={['contact']} />
      <div className={clsx('pr-8 lg:pr-16')}>
        <Contact theme={theme} displayedSections={['address']} />
      </div>
      <div className={clsx('pr-8 lg:pr-16')}>
        <Contact
          theme={theme}
          displayedSections={['socialMedia']}
          config={{ socialMedia: { smaller: true } }}
        />
      </div>
      <div className={clsx('flex-1')}>
        <div className={clsx('flex flex-col relative -top-1')}>
          {links.map((link, idx) => (
            <div className={clsx('mb-3')} key={idx}>
              <NavbarLink
                className='!text-lg'
                theme={theme}
                isActive={pathname === link.href}
                {...link}
                text={!lgUp && link.text === 'OUR SERVICES' ? 'SERVICES' : link.text}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
