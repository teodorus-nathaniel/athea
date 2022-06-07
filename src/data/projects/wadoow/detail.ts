import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { wadoowOverview } from './overview'

export const wadoow: ProjectData = {
  ...wadoowOverview,
  images: [
    '/projects/wadoow/1.jpg',
    '/projects/wadoow/2.jpg',
    '/projects/wadoow/3.jpg',
    '/projects/wadoow/4.jpg',
  ],
  video: 'https://youtu.be/2LnbKlBhRSU',


  meta: [
    { label: 'Artist', value: "Nidji" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '1 April 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea`,

  relatedWorks: [mrSunOverview, npureOverview],
}

