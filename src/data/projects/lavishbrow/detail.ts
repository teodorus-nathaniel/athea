import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { lavishbrowOverview } from './overview'

export const lavishbrow: ProjectData = {
  ...lavishbrowOverview,
  images: [
    '/projects/lavishbrow/1.jpg',
    '/projects/lavishbrow/2.jpg',
    '/projects/lavishbrow/3.jpg',
    '/projects/lavishbrow/4.jpg',
  ],

  video: 'https://www.youtube.com/watch?v=B6b5VVcgTH0',

  meta: [
    { label: 'Client', value: 'Lavish Brow' },
    {
      label: 'Role',
      value: `Video Production
      Concept`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '25 August 2019' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
