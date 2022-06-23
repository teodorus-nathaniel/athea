import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { astraOverview } from './overview'

export const astra: ProjectData = {
  ...astraOverview,
  images: [
    '/projects/astra/1.jpg',
    '/projects/astra/2.jpg',
    '/projects/astra/3.jpg',
    '/projects/astra/4.jpg',
  ],

  video: 'https://youtu.be/SLxjNZpxGQk',

  meta: [
    { label: 'Client', value: 'Astra Property' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '15 December 2018' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
  
    Director - Ivan Saputra Alam
    Project Manager - Bunga Cinta
    Director of Photography - Ivan Saputra Alam & Reynaldo
    Editor - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
