import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { kopichuseyoOverview } from './overview'

export const kopichuseyo: ProjectData = {
  ...kopichuseyoOverview,
  images: [
    '/projects/kopichuseyo/1.jpg',
    '/projects/kopichuseyo/2.jpg',
    '/projects/kopichuseyo/3.jpg',
    '/projects/kopichuseyo/4.jpg',
  ],

  video: 'https://www.youtube.com/watch?v=BrO8zoYPh5A',

  meta: [
    { label: 'Client', value: 'Kopi Chuseyo' },
    {
      label: 'Role',
      value: `Video Production
      Concept`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '13 July 2019' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Scriptwriter - Daniel Hermansyah & Aland Sinduartha
    Talent - Yulius Chandra & Morend Maharani
    Director of Photography - Ivan Saputra Alam
    Editor - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}
