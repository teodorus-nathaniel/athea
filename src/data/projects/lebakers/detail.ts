import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { lebakersOverview } from './overview'

export const lebakers: ProjectData = {
  ...lebakersOverview,
  images: [
    '/projects/lebakers/1.jpg',
    '/projects/lebakers/2.jpg',
    '/projects/lebakers/3.jpg',
    '/projects/lebakers/4.jpg',
  ],

  video: ['https://www.youtube.com/watch?v=rzCGBSoS5c4'],

  meta: [
    { label: 'Client', value: 'Le Bakers' },
    {
      label: 'Role',
      value: `Video Production
      Concept`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '16 March 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director - Michelle Amadea
    Talent - Prisca Angelina
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
