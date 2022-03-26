import Bg from '#/assets/bg/home-bg.jpeg'
import BrandHeadline, { BrandHeadlineProps } from '#/components/BrandHeadline'
import Container from '#/components/Container'
import Button from '#/ui/Button'
import clsx from 'clsx'
import Image from 'next/image'

interface Props extends BrandHeadlineProps {
  subheading?: string
  ctaButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
}

export default function HeadlineSection({
  ctaButton,
  subheading,
  ...headlineProps
}: Props) {
  return (
    <div className={clsx('w-full h-screen', 'text-white', 'flex flex-col')}>
      <Image
        src={Bg}
        alt='background'
        layout='fill'
        className={clsx('object-cover', 'absolute top-0 left-0')}
      />
      <Container className={clsx('flex-1 flex flex-col justify-center mb-12')}>
        <BrandHeadline {...headlineProps} className={clsx('mx-auto w-full')} />
        <div className='flex flex-col items-center'>
          <p className='font-light text-center mt-8 text-lg'>{subheading}</p>
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
                return <a href={ctaButton.href}>{cta}</a>
              }
              return cta
            })()}
        </div>
      </Container>
    </div>
  )
}
