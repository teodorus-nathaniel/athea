import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { remingtonOverview } from './overview'

export const remington: ProjectData = {
  ...remingtonOverview,
  images: [
    '/projects/remington/1.jpg',
    '/projects/remington/2.jpg',
    '/projects/remington/3.jpg',
    '/projects/remington/4.jpg',
  ],

  video: 'https://www.youtube.com/watch?v=BrO8zoYPh5A',

  meta: [
    { label: 'Client', value: 'Remington' },
    {
      label: 'Role',
      value: `Video Production
      Concept`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '15 May 2019' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Scriptwriter - Audry Dayes
    Production Designer - Daniel Yuono
    Talent - Nikita Kusuma & Cindy Priscilla
    Director of Photography - Ivan Saputra Alam
    Offline Editor - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
