import ServicesHeadlineSection from '../common/ServicesHeadlineSection'
import ServicesTaglineSection from '../common/ServicesTaglineSection'
import ServicesTeamSection from '../common/ServicesTeamSection'
import ServicesDescriptionSection from './ServicesDescriptionSection'
import ServicesListSection from './ServicesListSection'

export default function ServicesDesktop() {
  return (
    <>
      <ServicesHeadlineSection />
      <ServicesDescriptionSection />
      <ServicesListSection />
      <ServicesTeamSection />
      <ServicesTaglineSection />
    </>
  )
}
