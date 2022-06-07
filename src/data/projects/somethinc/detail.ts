import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { somethincOverview } from './overview'

export const somethinc: ProjectData = {
  ...somethincOverview,
  images: [
    '/projects/somethinc/1.jpg',
    '/projects/somethinc/2.jpg',
    '/projects/somethinc/3.jpg',
    '/projects/somethinc/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=-wtWbajnxD8',

  meta: [
    { label: 'Client', value: 'Somethinc' },
    {
      label: 'Role',
      value: 'Video Production',
    },
    { label: 'Deliverables', value: 'Manifesto Video' },
    { label: 'Date', value: '10 May 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Collective
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Art Director - Michelle Amadea
    
    Talent -  Zakky, Ibu Tina, Wiwid, Sakira
    
    Director of Photography - Ivan Saputra Alam
    Offline Editor - Ivan Saputra Alam
    Online Editor - Michelle Amadea
    Colorist - Ivan Saputra Alam
    Music Composer - Abel Huray
    VO Talent - Indonesia Voice Over`,

  relatedWorks: [mrSunOverview, npureOverview],
}
