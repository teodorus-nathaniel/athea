import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { buccheriOverview } from './overview'

export const buccheri: ProjectData = {
  ...buccheriOverview,
  images: [
    '/projects/buccheri/1.jpg',
    '/projects/buccheri/2.jpg',
    '/projects/buccheri/3.jpg',
    '/projects/buccheri/4.jpg',
  ],

  video: 'https://youtu.be/knhUseRhwHw',

  meta: [
    { label: 'Client', value: 'Buccheri' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '20 September 2019' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
  
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Make Up Artist - Michelle Amadea
    Talent - Garcia Bruno & Julia Kostetska
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
