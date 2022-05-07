import SectionWrapper, {
  SectionWrapperProps,
} from '#/components/sections/SectionWrapper'
import Text from '#/ui/Text'
import clsx from 'clsx'

export default function ServicesDescriptionSection(props: SectionWrapperProps) {
  return (
    <SectionWrapper
      {...props}
      title={
        <Text
          serif
          bold
          className={clsx(
            'text-4xl sm:text-5xl',
            'capitalize leading-snug sm:leading-relaxed'
          )}>
          {`We Integrate\nCollaborate\nChallenge`}
        </Text>
      }>
      <div className={clsx('flex flex-col text-lg sm:text-xl')}>
        <Text className='pb-4'>
          We are your next set of creative innovation experts. Athea is
          multidisciplinary creative company.
        </Text>
        <Text>
          We are based in Jakarta and founded in 2019 had 4 subsidiary based on
          functionality.
        </Text>
      </div>
    </SectionWrapper>
  )
}
