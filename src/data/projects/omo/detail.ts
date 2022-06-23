import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { omoOverview } from './overview'

export const omo: ProjectData = {
  ...omoOverview,
  images: [
    '/projects/omo/1.jpg',
    '/projects/omo/2.jpg',
    '/projects/omo/3.jpg',
    '/projects/omo/4.jpg',
  ],

  video: '/projects/omo/omo!.mp4',

  meta: [
    { label: 'Client', value: 'Omo Cosmestics' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '28 October 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist- Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
