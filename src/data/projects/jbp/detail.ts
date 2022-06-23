import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { jbpOverview } from './overview'

export const jbp: ProjectData = {
  ...jbpOverview,
  images: [
    '/projects/jbp/1.jpg',
    '/projects/jbp/2.jpg',
    '/projects/jbp/3.jpg',
    '/projects/jbp/4.jpg',
  ],

  video: '/projects/jbp/video.mp4',

  meta: [
    { label: 'Event', value: "Jakarta Block Party" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '1 February 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Moments
  
    Director - Ivan Saputra Alam
    Videographer - Ivan Saputra Alam, Naphtali Ivan, Matthew Pradipta, Keyvn Augusta, Arya, Geffen Rahardjo, Joab Nehemia, Dede Eka, Dian, Ayu Novia 
    Photographer - Nathania Callista
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
