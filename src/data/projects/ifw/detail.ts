import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { ifwOverview } from './overview'

export const ifw: ProjectData = {
  ...ifwOverview,
  images: [
    '/projects/ifw/1.jpg',
    '/projects/ifw/2.jpg',
    '/projects/ifw/3.jpg',
    '/projects/ifw/4.jpg',
  ],

  video: 'https://youtu.be/Exn5BlubYIw',

  meta: [
    { label: 'Event', value: 'Jakarta Fashion Week' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Event Video' },
    { label: 'Date', value: '24 June 2019' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Moments
  
    Director - Ivan Saputra Alam
    Director of Photography - Ivan Saputra Alam, Julrinus, Matthew Pradipta, Jimmy Lee, Nata Saputra & Dede Eka Wijaya
    Editor - Ivan Saputra Alam`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
