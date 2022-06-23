import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { rainbowspringsOverview } from './overview'

export const rainbowsprings: ProjectData = {
  ...rainbowspringsOverview,
  images: [
    '/projects/rainbowspring/1.jpg',
    '/projects/rainbowspring/2.jpg',
    '/projects/rainbowspring/3.jpg',
    '/projects/rainbowspring/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=TSdMJrNOMA4',

  meta: [
    { label: 'Client', value: 'Summarecon Serpong' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Corporate Video' },
    { label: 'Date', value: '5 December 2019' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Make Up Artist & Art Director - Michelle Amadea
    Unit Production Manager & Assistant Director - Kevyn Augusta
    Music Scoring - Abel Huray`,

  relatedWorks: [mrSunOverview, npureOverview],
}
