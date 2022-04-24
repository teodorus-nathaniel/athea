import Bg from '#/assets/bg/home-bg.jpeg'
import BrandHeadline, { BrandHeadlineProps } from '#/components/BrandHeadline'
import Container from '#/components/Container'
import Button from '#/ui/Button'
import TextWithNewLines from '#/ui/TextWithNewLines'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

interface Props extends BrandHeadlineProps {
  subheading?: string
  noBgImage?: boolean
  theme?: 'dark' | 'light'
  ctaButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
}

export default function HeadlineSection({
  ctaButton,
  theme = 'dark',
  subheading,
  noBgImage = false,
  ...headlineProps
}: Props) {
  return (
    <div
      className={clsx(
        'w-full h-screen',
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black',
        'flex flex-col'
      )}>
      {!noBgImage && (
        <Image
          src={Bg}
          alt='background'
          layout='fill'
          className={clsx('object-cover', 'absolute top-0 left-0')}
        />
      )}
      <Container
        className={clsx('flex-1 flex flex-col justify-center', 'max-w-md')}>
        <BrandHeadline {...headlineProps} className={clsx('mx-auto w-full')} />
        <div className='flex flex-col items-center'>
          <TextWithNewLines className='font-light text-center mt-16 text-lg'>
            {subheading}
          </TextWithNewLines>
          {ctaButton &&
            (() => {
              const cta = (
                <Button
                  largeHorizontalPadding
                  type='solid-white'
                  onClick={!ctaButton.href ? ctaButton.onClick : undefined}
                  className={clsx('mt-6', 'uppercase')}>
                  Read More
                </Button>
              )
              if (ctaButton.href) {
                return <Link href={ctaButton.href}>{cta}</Link>
              }
              return cta
            })()}
        </div>
      </Container>
    </div>
  )
}
