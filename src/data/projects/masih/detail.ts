import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { masihOverview } from './overview'

export const masih: ProjectData = {
  ...masihOverview,
  images: [
    '/projects/masih/1.jpg',
    '/projects/masih/2.jpg',
    '/projects/masih/3.jpg',
    '/projects/masih/4.jpg',
  ],
  video: 'https://www.youtube.com/watch?v=PPp-lcEXR7c',


  meta: [
    { label: 'Artist', value: "Rossa" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Video' },
    { label: 'Date', value: '13 November 2020' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Starring - Ki Do Hoon
    Director of Photography - Ivan Saputra Alam
    Offline Editor & Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea
    Sound Designer - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}

