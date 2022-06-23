import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { vicari1Overview } from './overview'

export const vicari1: ProjectData = {
  ...vicari1Overview,
  images: [
    '/projects/vicari1/1.jpg',
    '/projects/vicari1/2.jpg',
    '/projects/vicari1/3.jpg',
    '/projects/vicari1/4.jpg',
  ],

  video: 'https://youtu.be/7X5eT1wagcg',

  meta: [
    { label: 'Client', value: 'Vicari Shoes' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '20 September 2019' },
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
