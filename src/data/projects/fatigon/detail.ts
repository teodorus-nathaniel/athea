import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { fatigonOverview } from './overview'

export const fatigon: ProjectData = {
  ...fatigonOverview,
  images: [
    '/projects/fatigon/1.jpg',
    '/projects/fatigon/2.jpg',
    '/projects/fatigon/3.jpg',
    '/projects/fatigon/4.jpg',
  ],
  video: '/projects/fatigon/video.mp4',

  meta: [
    { label: 'Client', value: 'Fatigon Promuno' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '11 March 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Agency - Hybrid:H | Hakuhodo Creative Agency
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Sound Designer - Cornelius Kurnia Yonathan

    Camera Operator 1 - Faiz Noba
    Camera Operator 2 - Nathania Callista
    Camera Operator 3 - Joseline Clarinda
    Offline Editor - Joseline Clarinda
    Online Editor - Michelle Amadea
    Colorist - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}
