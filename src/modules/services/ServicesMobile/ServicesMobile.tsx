import clsx from 'clsx'
import ServicesHeadlineSection from '../common/ServicesHeadlineSection'
import ServicesTaglineSection from '../common/ServicesTaglineSection'
import ServicesTeamSection from '../common/ServicesTeamSection'
import ServicesDescriptionSection from './ServicesDescriptionSection'
import ServicesListSection from './ServicesListSection'

export default function ServicesMobile() {
  return (
    <>
      <ServicesHeadlineSection />
      <ServicesDescriptionSection className='px-0' />
      <ServicesListSection className='!px-0' />
      <ServicesTeamSection className='!pb-8' />
      <ServicesTaglineSection className={clsx('!px-0 !py-0', '!pb-12')} />
    </>
  )
}
