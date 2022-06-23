import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { afterhoursOverview } from './overview'

export const afterhours: ProjectData = {
  ...afterhoursOverview,
  images: [
    '/projects/afterhours/1.jpg',
    '/projects/afterhours/2.jpg',
    '/projects/afterhours/3.jpg',
    '/projects/afterhours/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=9WaV4S2_BfQ',

  meta: [
    { label: 'Client', value: 'Afterhours Books' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '31 July 2021' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director - Michelle Amadea
    Editor - Joseline Clarinda
    Colorist - Ivan Saputra Alam
    Camera Assistant - Faiz Noba`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
