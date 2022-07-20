import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { pedroOverview } from './overview'

export const pedro: ProjectData = {
  ...pedroOverview,
  images: [
    '/projects/pedro/1.jpg',
    '/projects/pedro/2.jpg',
    '/projects/pedro/3.jpg',
    '/projects/pedro/4.jpg',
  ],

  video: '/projects/pedro/video.mp4',

  meta: [
    { label: 'Client', value: 'Pedro' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '10 January 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Talent - Maria Rahajeng & Kevin Suan
    Director of Photography - Ivan Saputra Alam
    Editor - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}
