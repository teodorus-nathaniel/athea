import { ProjectData } from '../../types'
import { mrSunOverview } from '../mr-sun/overview'
import { npureOverview } from '../npure/overview'
import { calienteOverview } from './overview'

export const caliente: ProjectData = {
  ...calienteOverview,
  images: [
    '/projects/caliente/1.jpg',
    '/projects/caliente/2.jpg',
    '/projects/caliente/3.jpg',
    '/projects/caliente/4.jpg',
  ],
  video: 'https://youtu.be/GBbQNw6mcC4',


  meta: [
    { label: 'Artist', value: "Cinta Laura Kiehl" },
    {
      label: 'Role',
      value: `Concept
        Video Production`,
    },
    { label: 'Deliverables', value: 'Music Video' },
    { label: 'Date', value: '22 November 2019' },
  ],

  overview: `Glowgene is go to collagen jelly that always use natural and local ingredients for their products. They launch a new set skincare for body and face treatment, team up with Isyana Sarasvati.`,

  credits: `Production of Athea Visuals
    
    Director - Ivan Saputra Alam
    Producer - Naphtali Ivan
    Production Designer - Michelle Amadea
    
    Director of Photography - Ivan Saputra Alam
    Offline Editor, Colorist - Ivan Saputra Alam
    Online Editor - Michelle Amadea
    Foley Designer - Cornelius Kurnia`,

  relatedWorks: [mrSunOverview, npureOverview],
}

