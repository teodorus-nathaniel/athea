import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { kandaOverview } from './overview'

export const kanda: ProjectData = {
  ...kandaOverview,
  images: [
    '/projects/kanda/1.jpg',
    '/projects/kanda/2.jpg',
    '/projects/kanda/3.jpg',
    '/projects/kanda/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=XbwZHXZb4pI',

  meta: [
    { label: 'Artist', value: 'Kanda' },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '22 November 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    FPV Pilot - Hafidz Irfana & Faiz Zainur
    
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}
