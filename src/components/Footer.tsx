import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { HTMLProps } from 'react'
import Contact from './Contact'
import Container from './Container'
import { links } from './Navbar/NavbarContent/NavbarContent'
import NavbarLink from './Navbar/NavbarContent/NavbarLink'

interface Props extends HTMLProps<HTMLDivElement> {}

export default function Footer({ className, ...props }: Props) {
  const { pathname } = useRouter()
  const offsetTop = clsx('pt-6')

  return (
    <Container
      className={clsx(
        'grid grid-cols-[4fr,_3fr,_2fr,_1fr] gap-8',
        'py-8',
        className
      )}
      {...props}>
      <Contact theme='dark' displayedSections={['contact']} />
      <div className={clsx(offsetTop)}>
        <Contact theme='dark' displayedSections={['address']} />
      </div>
      <div className={clsx(offsetTop)}>
        <Contact
          theme='dark'
          displayedSections={['socialMedia']}
          config={{ socialMedia: { smaller: true } }}
        />
      </div>
      <div className={clsx(offsetTop)}>
        <div className={clsx('flex flex-col')}>
          {links.map((link, idx) => (
            <div className={clsx('mb-4')} key={idx}>
              <NavbarLink isActive={pathname === link.href} {...link} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
