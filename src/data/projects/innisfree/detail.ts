import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { innisfreeOverview } from './overview'

export const innisfree: ProjectData = {
  ...innisfreeOverview,
  images: [
    '/projects/innisfree/1.jpg',
    '/projects/innisfree/2.jpg',
    '/projects/innisfree/3.jpg',
    '/projects/innisfree/4.jpg',
  ],
  video: 'https://youtu.be/bX5vP603rc0',

  meta: [
    { label: 'Client', value: 'Innisfree' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Web Series' },
    { label: 'Date', value: '29 March 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director - Michelle Amadea
    Scriptwriter - Ivan Saputra Alam & Audry Dayes
    
    Talent - Shindy Huang, Debora Kerennia, Kenneth Santana
    Director of Photography - Ivan Saputra Alam
    Editor - Kevyn Augusta
    Online Editor - Michelle Amadea
    Sound Designer - Maria Tania
    Music Scoring - Abel Huray`,

  relatedWorks: [mrSunOverview, npureOverview],
}
