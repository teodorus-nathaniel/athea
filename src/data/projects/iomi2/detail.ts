import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { iomi2Overview } from './overview'

export const iomi2: ProjectData = {
  ...iomi2Overview,
  images: [
    '/projects/iomi2/1.jpg',
    '/projects/iomi2/2.jpg',
    '/projects/iomi2/3.jpg',
    '/projects/iomi2/4.jpg',
  ],

  video: 'https://www.youtube.com/watch?v=XsUn0kyOeyc',

  meta: [
    { label: 'Client', value: 'Iomi' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '14 June 2019' },
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
