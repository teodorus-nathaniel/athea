import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { appleOverview } from './overview'

export const apple: ProjectData = {
  ...appleOverview,
  images: [
    '/projects/apple/1.jpg',
    '/projects/apple/2.jpg',
    '/projects/apple/3.jpg',
    '/projects/apple/4.jpg',
  ],

  video: 'https://youtu.be/1RsUDNtkwfk',

  meta: [
    { label: 'Client', value: "Apple Developer Academy BINUS" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '11 December 2018' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
  
    Director - Ivan Saputra Alam
    Project Manager - Bunga Cinta
    Director of Photography - Ivan Saputra Alam & Matthew Pradipta
    Editor - Ivan Saputra Alam`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
