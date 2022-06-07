import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { homeOverview } from './overview'

export const home: ProjectData = {
  ...homeOverview,
  images: [
    '/projects/home/1.jpg',
    '/projects/home/2.jpg',
    '/projects/home/3.jpg',
    '/projects/home/4.jpg',
  ],
  video: 'https://youtu.be/YC52UOiKN3o',


  meta: [
    { label: 'Artist', value: "Rendy Pandugo" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '16 October 2021' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Director of Photography - Ivan Saputra Alam
    Offline Editor, Colorist, Sound Designer - Ivan Saputra Alam
    Online Editor - Michelle Amadea
    Sound Designer - Ivan Saputra Alam`,

  relatedWorks: [mrSunOverview, npureOverview],
}

