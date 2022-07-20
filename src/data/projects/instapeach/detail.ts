import { ProjectData } from '../../types'
import { glowgeneOverview } from '../glowgene/overview'
import { mrSunOverview } from '../mr-sun/overview'
import { instapeachOverview } from './overview'

export const instapeach: ProjectData = {
  ...instapeachOverview,
  images: [
    '/projects/instapeach/1.jpg',
    '/projects/instapeach/2.jpg',
    '/projects/instapeach/3.jpg',
    '/projects/instapeach/4.jpg',
  ],
  video: '/projects/instapeach/video.mp4',

  meta: [
    { label: 'Client', value: 'Second Date' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '11 November 2020' },
  ],

  overview: `N'pure is a local skincare and beauty brand that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
  Director - Ivan Saputra Alam
  Producer - Naphtali Ivan
  Production Designer - Michelle Amadea
  Director of Photography - Ivan Saputra Alam
  Editor & Colorist - Ivan Saputra Alam`,

  relatedWorks: [glowgeneOverview, mrSunOverview],
}
