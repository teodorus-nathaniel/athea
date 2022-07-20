import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { larasatieOverview } from './overview'

export const larasatie: ProjectData = {
  ...larasatieOverview,
  images: [
    '/projects/larasatie/1.jpg',
    '/projects/larasatie/2.jpg',
    '/projects/larasatie/3.jpg',
    '/projects/larasatie/4.jpg',
  ],
  heroImage: '/projects/larasatie/video.jpg',

  meta: [
    { label: 'Client', value: 'Larasatie' },
    {
      label: 'Role',
      value: 'Branding',
    },
    {
      label: 'Deliverables',
      value: `Brand Identity
                                      Packaging`,
    },

    { label: 'Date', value: '20 October 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Visual Identity by Athea Collective
    
   Graphic Designer - Elrica Cresensia
   Supervisor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
