import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { vicari2Overview } from './overview'

export const vicari2: ProjectData = {
  ...vicari2Overview,
  images: [
    '/projects/vicari2/1.jpg',
    '/projects/vicari2/2.jpg',
    '/projects/vicari2/3.jpg',
    '/projects/vicari2/4.jpg',
  ],

  video: 'https://youtu.be/jxVc6d4vhp4',

  meta: [
    { label: 'Client', value: 'Vicari Shoes' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '8 May 2019' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
  
    Director - Ivan Saputra Alam
    Director of Photography - Ivan Saputra Alam
    Editor - Ivan Saputra Alam
    Make Up - Michelle Amadea
    Hair Do - Yemima Agytha`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
