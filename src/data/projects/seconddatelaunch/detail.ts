import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { seconddateOverview } from './overview'

export const seconddate: ProjectData = {
  ...seconddateOverview,
  images: [
    '/projects/seconddate/1.jpg',
    '/projects/seconddate/2.jpg',
    '/projects/seconddate/3.jpg',
    '/projects/seconddate/4.jpg',
  ],

  video: 'https://youtu.be/gTaH9B0Nu9M',

  meta: [
    { label: 'Event', value: "Second Date" },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Event Video' },
    { label: 'Date', value: '18 March 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Moments
  
    Director - Ivan Saputra Alam
    Director of Photography - Ivan Saputra Alam
    Photographer - Nathania Callista
    Editor - Ivan Saputra Alam`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
