import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { iomi1Overview } from './overview'

export const iomi1: ProjectData = {
  ...iomi1Overview,
  images: [
    '/projects/iomi1/1.jpg',
    '/projects/iomi1/2.jpg',
    '/projects/iomi1/3.jpg',
    '/projects/iomi1/4.jpg',
  ],

  video: 'https://youtu.be/PyQf9JNnAXQ',

  meta: [
    { label: 'Client', value: 'Iomi' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '5 November 2019' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Talent - Naura Hakim & Judith Ayu
    Director of Photography - Ivan Saputra Alam
    Editor - Ivan Saputra Alam
    Art Director & Make Up Artist - Michelle Amadea
    Stylist - Nadira Cahya Purnama`,

  relatedWorks: [mrSunOverview, npureOverview],
}
