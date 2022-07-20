import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { lafrescoOverview } from './overview'

export const lafresco: ProjectData = {
  ...lafrescoOverview,
  images: [
    '/projects/lafresco/1.jpg',
    '/projects/lafresco/2.png',
    '/projects/lafresco/3.jpg',
    '/projects/lafresco/4.jpg',
  ],
  heroImage: '/projects/lafresco/video.jpg',

  meta: [
    { label: 'Client', value: 'La Fresco' },
    {
      label: 'Role',
      value: 'Branding',
    },
    { label: 'Deliverables', value: `Brand Identity` },

    { label: 'Date', value: '16 July 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Visual Identity by Athea Collective
    
   Graphic Designer - Elrica Cresensia
   Supervisor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
