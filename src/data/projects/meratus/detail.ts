import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { meratusOverview } from './overview'

export const meratus: ProjectData = {
  ...meratusOverview,
  images: [
    '/projects/meratus/1.jpg',
    '/projects/meratus/2.jpg',
    '/projects/meratus/3.jpg',
    '/projects/meratus/4.jpg',
  ],
  video: '/projects/meratus/video.mp4',

  meta: [
    { label: 'Client', value: 'Meratus' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '3 November 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Cinematographer - Ivan Saputra Alam, Matthew Pradipta, Nata Saputra, Joseline Clarinda
    Drone Operator - Nata Saputra & Erwin Dhia Falah
    Photographer - Nathania Callista
    Offline Editor & Online Editor - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}
